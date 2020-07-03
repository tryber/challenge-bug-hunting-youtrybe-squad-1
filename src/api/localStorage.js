export default function addToLocalStorage(key, value) {
  // const jsonKey = JSON.stringify(key);
  if (!localStorage[key]) localStorage[key] = JSON.stringify([]);
  const searchHistory = JSON.parse(localStorage[key]);
  const historyArray = searchHistory.filter((element) => element.etag !== value.etag);
  const updatedSearchHistory = [...historyArray, value];
  localStorage[key] = JSON.stringify(updatedSearchHistory);
}
