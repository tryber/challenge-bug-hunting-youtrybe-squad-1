const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_AUTH_KEY = () => {
  const auth =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_KEY
      : null;
  return auth;
};

export const searchVideos = async (searchText) => {
  const URL = `${YOUTUBE_API_URL}/search?part=snippet&q=${searchText}&type=video&maxResults=25&key=${YOUTUBE_AUTH_KEY()}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getVideoInfo = async (videoId) => {
  const urlParams = `part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/videos?${urlParams}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getVideoComments = async (videoId) => {
  const urlParams = `part=snippet&videoId=${videoId}&textFormat=plainText&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/commentThreads?${urlParams}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getRelatedVideos = async (videoId) => {
  const urlParams = `part=snippet&relatedToVideoId=${videoId}&type=video&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/search?${urlParams}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
