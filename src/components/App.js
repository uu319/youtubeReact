import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "../VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: ""
  };

  componentDidMount() {
    this.onSearchSubmit("buildings");
  }

  onSearchSubmit = async search => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
        maxResults: 10
      }
    });
    const videos = response.data.items;
    const selectedVideo = response.data.items[0];
    this.setState({
      videos,
      selectedVideo
    });
  };

  onVideoSelect = selectedVideo => {
    console.log(selectedVideo);
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
