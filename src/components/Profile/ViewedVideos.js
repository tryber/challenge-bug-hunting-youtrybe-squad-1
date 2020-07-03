import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../content/SearchResult/VideoCard/VideoCard';
import '../../css/sideBar.css';

class ViewedVideos extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    this.mountViewedComponent();
  }

  mountViewedComponent() {
    const data = new Set(JSON.parse(localStorage.getItem('viewedVideos') || '[]'));
    return this.setState({ data: [...data] });
  }

  render() {
    const { data } = this.state;
    if (!data) return <h4>Sem vídeos favoritos</h4>;
    return (
      <div>
        {data.map((item) => (
          <Link
            className="thumbnail-card"
            key={item.etag}
            to={{ pathname: `/watch/${item.id.videoId}`, state: { item } }}
          >
            <VideoCard video={item} />
          </Link>
        ))}
      </div>
    );
  }
}

export default ViewedVideos;
