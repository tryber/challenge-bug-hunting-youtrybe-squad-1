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
    const { searchParam } = this.props.match.params;

    searchVideos(searchParam).then(
      (data) => this.setState({ data: data.items }),
      (error) => this.setState({ error }),
    );
  }

  render() {
    const { data } = this.state;

    if (data.length < 1) return <div>Loading...</div>;

    return (
      <div>
        {data.map((item) => (
          <Link
            className="thumbnail-card"
            key={item.etag}
            to={{
              pathname: `/watch/${item.id.videoId}`,
              state: { data },
            }}
          >
            <VideoCard video={item} />
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResult;
