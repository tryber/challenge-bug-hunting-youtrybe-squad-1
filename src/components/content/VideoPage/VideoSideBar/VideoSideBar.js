import React, { Component, Fragment } from 'react';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

import '../../../../css/sideBar.css';

class VideoSideBar extends Component {
  static onKeyPress(event, callback, value) {
    const enterOrSpace = event.key === 'Enter'
      || event.key === ' '
      || event.key === 'Spacebar'
      || event.which === 13
      || event.which === 32;
    if (enterOrSpace) {
      event.preventDefault();
      return callback(value);
    }
    return undefined;
  }

  render() {
    const { relatedVideos, handleSelectedVideo } = this.props;
    return (
      <Fragment>
        {relatedVideos.map((video) => (
          <Fragment key={`ID: ${video.id.videoId}- Verifier: ${Math.random() * 10}`}>
            <div
              role="button"
              tabIndex={0}
              data-testid="selectedVideo"
              className="suggested-video"
              onClick={() => handleSelectedVideo(video.id.videoId, video)}
              onKeyPress={(event) => VideoSideBar.onKeyPress(
                event,
                handleSelectedVideo,
                video.id.videoId,
              )}
            >
              <VideoThumbNail
                videoId={video.id.videoId}
                imageSource={video.snippet.thumbnails.medium.url}
              />
              <VideoThumbNailInfo
                title={video.snippet.title}
                channel={video.snippet.channelTitle}
              />
            </div>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

export default VideoSideBar;
