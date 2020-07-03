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
    const data = JSON.parse(localStorage.getItem('viewedVideos'));
    console.log(data, JSON.parse(localStorage.getItem('viewedVideos')));
    return this.setState({ data: [...data] });
  }

  render() {
    const { data } = this.state;

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
