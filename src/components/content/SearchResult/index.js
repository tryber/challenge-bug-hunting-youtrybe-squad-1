import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard/VideoCard';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    this.getVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) return this.getVideos();
    return false;
  }

  getVideos() {
    const { match: { params: { searchParam } } } = this.props;

    searchVideos(searchParam).then(
      (data) => this.setState({ data: data.items.slice(0, 24) }),
      (error) => this.setState({ error }),
    );
  }

  render() {
    const { data, error } = this.state;

    if (data.length < 1) return <div>Loading...</div>;

    if (error) return <div>{error}</div>;

    return (
      <div>
        {data.map((item) => (
          <Link
            className="thumbnail-card"
            key={item.etag}
            to={`/watch/${item.id.videoId}`}
          >
            <VideoCard video={item} />
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResult;
