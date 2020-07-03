import React, { Component } from 'react';

class VideoPlayerDescription extends Component {
  static formatDate(publishedAt) {
    const dateObj = new Date(publishedAt);

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `Published on ${month} ${day}, ${year}`;
  }

  render() {
    const { channelTitle, description, publishedAt } = this.props;

    return (
      <section data-testid="channelinfo" className="channel-info">
        <div className="avatar">
          <div />
        </div>
        <div className="description">
          <h2>{channelTitle}</h2>
          <h3>{VideoPlayerDescription.formatDate(publishedAt)}</h3>
          <p>{description}</p>
          <p className="show-more">show more</p>
        </div>
        <div className="subscribe">
          <button type="button">
            subscribe
            <span>293K</span>
          </button>
        </div>
      </section>
    );
  }
}

export default VideoPlayerDescription;
