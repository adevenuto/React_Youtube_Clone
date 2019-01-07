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
			selectedVideo: null
		}

		this.searchTerm('popular videos');
	}
	searchTerm(term) {
		YTsearch({key: keys.api_key, term: term, limit: 15}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		})
	}
	render() {
	// const videoSearch = _lodash.debounce((term) => {this.searchTerm(term)},300);
	return 	<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<SearchBar newSearch={(term) => this.searchTerm(term)}/>
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
