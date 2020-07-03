import React, { Component } from 'react';

class VideoThumbNail extends Component {
  render() {
    const { imageSource, videoId } = this.props;
    return (
      <div className="thumbnail">
        <img src={imageSource} alt="cabin" key={videoId} />
        <span>17:30</span>
      </div>
    );
  }
}

export default VideoThumbNail;
