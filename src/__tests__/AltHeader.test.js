import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';
import mockSearchVideo from '../__mocks__/mockSearchVideo';
import * as api from '../api/service';

jest.mock('react-router-dom', () => {
  const moduloOriginal = jest.requireActual('react-router-dom');
  return {
    ...moduloOriginal,
    BrowserRouter: ({ children }) => <div>{children}</div>,
  };
});

jest.mock('../api/service');
api.searchVideos.mockImplementation(() => Promise.resolve(mockSearchVideo));

function renderWithRouter(ui, routeConfigs = {}) {
  const route = routeConfigs.route || '/';
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Funcionalidades Componente Header', () => {
  it('Renderiza dois links na tela', () => {
    const { container } = renderWithRouter(<App />);
    const links = container.querySelectorAll('a');
    expect(links.length).toBe(3);
    expect(links[1].href).toMatch('/results');
  });

  it('Ao fazer uma busca redireciona a página de resultados', async () => {
    const { getAllByRole, getByPlaceholderText, history } = renderWithRouter(
      <App />,
    );
    expect(history.location.pathname).toBe('/');

    const searchText = 'bugs';
    fireEvent.change(getByPlaceholderText(/search/i), { target: { value: searchText } });
    fireEvent.click(getAllByRole('link')[1]);

    await waitFor(() => expect(api.searchVideos).toHaveBeenCalled());
    expect(history.location.pathname).toBe(`/results/${searchText}`);
  });
});
