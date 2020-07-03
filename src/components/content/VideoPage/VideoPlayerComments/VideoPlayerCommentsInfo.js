import React, { Component } from 'react';

class VideoPlayerCommentsInfo extends Component {
  render() {
    const { statisticsInfo } = this.props;
    return (
      <>
        <div className="comment-toolbar">
          <div className="comment-count">
            <span>
              {statisticsInfo.commentCount}
              {' '}
            </span>
            <span>Comments</span>
          </div>
          <div className="comment-count">
            <i className="material-icons">sort</i>
            <span>SORT BY</span>
          </div>
        </div>
        <div className="add-comment">
          <i className="material-icons account-icon">account_circle</i>
          <input type="text" placeholder="Add a public comment..." />
        </div>
      </>
    );
  }
}

export default VideoPlayerCommentsInfo;
