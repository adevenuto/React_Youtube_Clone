import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTsearch from 'youtube-api-search';
import keys from './config/keys';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videos: [],
			searchResults: [],
			selectedVideo: null
		}
		this.setTerm('web development');
	}
	setTerm(term) {
		YTsearch({key: keys.api_key, term: term, limit: 15}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		})
	}
	// setCurrent(video, videos) {
	// 	console.log(video)
	// 	console.log(videos)
	// }
	searchTerm(term) {
		if (term) {
			YTsearch({key: keys.api_key, term: term, limit: 10}, (videos) => {
				this.setState ({
					searchResults: videos
				})
			})
		} else {
			this.setState ({
				searchResults: []
			})
		}
	}
	render() {
	return 	<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<SearchBar 
							newSearch={(term) => this.searchTerm(term)}
							searchResults={this.state.searchResults}
						/>
						<VideoDetail video={this.state.selectedVideo}/>
					</div>
					<div className="col-lg-4">
						<VideoList 
							onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
							videos={this.state.videos}
						/>	
					</div>
				</div>
			</div>;
	}
}
ReactDOM.render(<App />, document.getElementById('app'));
