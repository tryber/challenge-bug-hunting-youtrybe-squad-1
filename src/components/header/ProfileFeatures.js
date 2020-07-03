import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/featureIcons.css';

class ProfileFeatures extends Component {
  render() {
    return (
      <div className="feature-icons">
        <i className="material-icons">video_call</i>
        <i className="material-icons">apps</i>
        <i className="material-icons">message</i>
        <i className="material-icons">notifications</i>
        <span className="bell-icon-badge">9+</span>
        <Link to="/profile">
          <i className="material-icons account-icon login-account">
            account_circle
          </i>
        </Link>
      </div>
    );
  }
}

export default ProfileFeatures;
