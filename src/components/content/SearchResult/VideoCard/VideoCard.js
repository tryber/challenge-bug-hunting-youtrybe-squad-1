import React, { Component } from 'react';

import '../../../../css/searchResult.css';

class VideoCard extends Component {
  static propsComparator(props, param1, param2) {
    return !!(props === param1 || props === param2);
  }

  render() {
    const { video } = this.props;
    const { id: { kind }, snippet } = video;
    const { thumbnails: { medium: { url } }, channelTitle, description, title } = snippet;
    return (
      <div className="suggested-video search-result">
        <div className="thumbnail">
          <img alt="thumbnail" src={url} />
          {VideoCard.propsComparator(
            kind,
            'youtube#video',
            'youtube#channel',
          ) && <span>17:30</span>}
        </div>

        <div className="thumbnail-info">
          <h2>{title}</h2>
          <div className="channel">{channelTitle}</div>
          {VideoCard.propsComparator(
            kind,
            'youtube#video',
            'youtube#channel',
          ) && <div className="views">792K views</div>}
          <p className="description">{description}</p>
        </div>
      </div>
    );
  }
}

export default VideoCard;
