import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';
import { getVideoInfo, getVideoComments } from '../../../api/service';

class VideoPage extends Component {
  constructor(props) {
    super(props);

    const {
      match: { params: { videoId } },
      location: { state: { data } },
    } = this.props;

    this.state = {
      videoId,
      relatedVideos: data,
      shouldRedirect: false,
      videoInfo: null,
      videoComments: null,
    };

    this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
  }

  componentDidMount() {
    this.mountVideoPage();
  }

  handleSelectedVideo(videoId) {
    this.setState({ videoId }, () => {
      getVideoInfo(videoId).then((data) => this.setState({ videoInfo: data.items[0] }));
      getVideoComments(videoId).then((data) => this.setState({ videoComments: data.items }));
    });

    return this.setState({ shouldRedirect: true });
  }

  mountVideoPage() {
    const { videoId } = this.state;
    this.setState({ shouldRedirect: false });
    getVideoInfo(videoId).then((data) => this.setState({ videoInfo: data.items[0] }));
    getVideoComments(videoId).then((data) => this.setState({ videoComments: data.items }));
  }

  renderVideoPage(videoId, videoInfo, videoComments, relatedVideos) {
    return (
      <main>
        <section className="player">
          <VideoPlayer embedId={videoId} title={videoInfo.snippet.title} />
          <VideoPlayerInfo
            statisticsInfo={videoInfo.statistics}
            title={videoInfo.snippet.title}
          />
          <VideoPlayerDescription
            channelTitle={videoInfo.snippet.channelTitle}
            description={videoInfo.snippet.description}
            publishedAt={videoInfo.snippet.publishedAt}
          />
          <VideoPlayerComments
            statisticsInfo={videoInfo.statistics}
            videoComments={videoComments}
          />
        </section>
        <section className="sidebar">
          <VideoSideBar
            relatedVideos={relatedVideos}
            handleSelectedVideo={this.handleSelectedVideo}
          />
        </section>
      </main>
    );
  }

  render() {
    const {
      videoId,
      videoComments,
      shouldRedirect,
      relatedVideos,
      videoInfo,
    } = this.state;

    if (!videoInfo || !videoComments) return <main />;

    if (shouldRedirect) {
      this.setState({ shouldRedirect: false });
      return (
        <Redirect
          to={{
            pathname: `/watch/${videoId}`,
            state: { data: relatedVideos },
          }}
        />
      );
    }

    return this.renderVideoPage(
      videoId,
      videoInfo,
      videoComments,
      relatedVideos,
    );
  }
}

export default VideoPage;
