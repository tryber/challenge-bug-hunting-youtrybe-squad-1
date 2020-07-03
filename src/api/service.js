const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_AUTH_KEY = () => {
  const auth = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_KEY
    : null;
  return auth;
};

export const searchVideos = (searchText) => {
  const URL = `${YOUTUBE_API_URL}/search?part=snippet&q=${searchText}&type=video&maxResults=25&key=${YOUTUBE_AUTH_KEY()}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export const getVideoInfo = (videoId) => {
  const urlParams = `part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/videos?${urlParams}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export const getVideoComments = (videoId) => {
  const urlParams = `part=snippet&videoId=${videoId}&textFormat=plainText&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/commentThreads?${urlParams}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};
