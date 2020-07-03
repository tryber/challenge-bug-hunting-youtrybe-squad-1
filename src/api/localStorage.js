export default function addToLocalStorage(key, value) {
  const jsonKey = JSON.stringify(key);
  if (!localStorage[jsonKey]) localStorage[jsonKey] = JSON.stringify([]);
  const searchHistory = JSON.parse(localStorage[jsonKey]);
  const updatedSearchHistory = [...searchHistory, value];
  localStorage[jsonKey] = JSON.stringify(updatedSearchHistory);
}
