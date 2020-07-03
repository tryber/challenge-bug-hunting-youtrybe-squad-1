import React, { Component } from 'react';
import ViewedVideos from './ViewedVideos';

class Profile extends Component {
  render() {
    return <section>
      <div>
        <h3>Vídeos Pesquisados</h3>
      </div>
      <div>
    <ViewedVideos/>
      </div>
      <div>
        <h3>Vídeos Favoritos</h3>
      </div>
      <div>
        <h3>Assistir mais tarde</h3>
      </div>
    </section>;
  }
}

export default Profile;
