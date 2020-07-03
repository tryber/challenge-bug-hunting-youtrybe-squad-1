import React, { Component, Fragment } from 'react';
import formatDate from '../../../../helper';
import profileIcon from '../../../../assets/profile.jpg';

class VideoPlayerUsersComments extends Component {
  render() {
    const { videoComments } = this.props;
    // authorProfileImageUrl
    return (
      <Fragment>
        {
          videoComments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-avatar">
                <i className="material-icons account-icon">account_circle</i>
              </div>
              <div className="comment-info">
                <h3>
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>
                    {formatDate(comment
                      .snippet
                      .topLevelComment
                      .snippet
                      .publishedAt)}
                  </span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div>
                  <a className="thumb-up-btn">
                    <i className="material-icons">thumb_up</i>
                    <span className="thumbs-count">
                      {comment.snippet.topLevelComment.snippet.likeCount}
                    </span>
                  </a>
                  <a className="thumb-up-btn">
                    <i className="material-icons">thumb_down</i>
                    <span className="thumbs-count" />
                  </a>
                  <a>REPLY</a>
                </div>
              </div>
            </div>
          ))
        }
      </Fragment>
    );
  }
}

export default VideoPlayerUsersComments;
