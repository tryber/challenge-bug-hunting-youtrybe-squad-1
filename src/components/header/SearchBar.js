import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import addToLocalStorage from '../../api/localStorage';
import '../../css/searchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      keyEnter: false
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.pressEnterKey = this.pressEnterKey.bind(this);
  }

  pressEnterKey(event) {
    const { searchInput } = this.state;
    const enterOrSpace = event.key === 'Enter'
      || event.keyCode === 13;

    if (enterOrSpace) {
      console.log('enter')
      event.preventDefault();
      this.setState({ keyEnter: true });
    }
    return false;
  }

  handleSearchInput(event) {
    const {
      target: { value },
    } = event;
    this.setState({ searchInput: value });
  }

  render() {
    const { searchInput, keyEnter } = this.state;
    if (keyEnter) {
      this.setState({ keyEnter: false });
      return (
        <Redirect
          to={{ pathname: `/results/${searchInput}`, state: { searchInput } }}
        />
      )}

    return (
      <div className="searchbar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={this.handleSearchInput}
          onKeyPress={(event) => this.pressEnterKey(event)}
        />
        <div className="search-btn">
          <Link
            className="material-icons search-icon"
            onClick={() => {
              addToLocalStorage('searchHistory', searchInput);
            }}
            to={{ pathname: `/results/${searchInput}`, state: { searchInput } }}
          >
            search
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
