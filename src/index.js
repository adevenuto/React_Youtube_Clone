import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import axios from 'axios';

import keys from './config/keys';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			searchResults: [],
			selectedVideo: null
		}
		this.youtubeApi = this.youtubeApi.bind(this);
		this.searchApi = this.searchApi.bind(this);
		this.setInitial('react js');
	}
	youtubeApi(term) {
		const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
		const params = {
			part: 'snippet',
			key: keys.api_key,
			q: term,
			type: 'video',
			order: 'viewCount',
			maxResults: 15
		};				
		let data = axios.get(ROOT_URL, { params: params })
		.then(function(response) {
			return response.data.items;
		}).catch(function(error) {
			console.error(error);
		});
		return data;
	}
	async setInitial(term) {
		let videos = await this.youtubeApi(term);
		this.setState({
			videos: videos,
			selectedVideo: videos[0],
			searchResults: []
		});
	}
	async searchApi(term) {
		if (!term) {
			this.setState({searchResults: []});
		} else {
			let videos = await this.youtubeApi(term);
			this.setState({searchResults: videos});
		}
	}
	setVideoFromSearch(video) {
		document.getElementById('searchInput').value = '';
		this.setState({
			videos: this.state.searchResults,
			selectedVideo: video,
			searchResults: []
		});
	}
	async setVideoFromListItem(video) {
		let newVideos = await this.youtubeApi(video.snippet.title);
		document.getElementById('searchInput').value = '';
		this.setState({
			videos: newVideos,
			selectedVideo: video,
			searchResults: []
		});
	}
	
	render() {
	return 	<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<SearchBar 
							newSearch={term => this.searchApi(term)}
							searchResults={this.state.searchResults}
							setCurrent={video => this.setVideoFromSearch(video)}
							searchByTerm={term => this.setInitial(term)}
						/>
						<VideoDetail video={this.state.selectedVideo}/>
					</div>
					<div className="col-lg-4">
						<VideoList 
							onVideoSelect={video => this.setVideoFromListItem(video)}
							videos={this.state.videos}
						/>	
					</div>
				</div>
			</div>;
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
