import React, { Component } from 'react';

import '../../../../css/searchResult.css';

class VideoCard extends Component {
  render() {
    const {
      video: {
        id: { kind },
        snippet: {
          thumbnails: { medium: { url } },
          channelTitle,
          description,
          title,
        },
      },
    } = this.props;
    return (
      <div className="suggested-video search-result">
        <div className="thumbnail">
          <img
            alt="thumbnail"
            src={url}
          />
          {kind === 'youtube#video'
            || (kind === 'youtube#channel' && (
              <span>17:30</span>
            ))}
        </div>

        <div className="thumbnail-info">
          <h2>{title}</h2>
          <div className="channel">{channelTitle}</div>
          {kind === 'youtube#video'
            || (kind === 'youtube#channel' && (
              <div className="views">792K views</div>
            ))}
          <p className="description">{description}</p>
        </div>
      </div>
    );
  }
}

export default VideoCard;
