import React from 'react';
import {debounce} from 'lodash';
import SearchList from './search_list';

const SearchBar = (props) => {
	const search = (e) => {
		if (e.key === 'Enter') {
			props.setCurrentVideo(e.target.value);
		}
	}
	const apiSearch = debounce((e) => {
		// props.newSearch(e.target.value);
		console.log('hello')
	}, 200)
	const searchList = props.searchResults.map((video) => {
		return 	<SearchList
					videoTitle={video.snippet.title}
					key={video.etag}
				/>
	})
	return	<div className="form-group">
				<label className="sr-only" htmlFor="searchBar">Search</label>
				<div className="input-group mb-2 mr-sm-2">	
					<input onKeyPress={search} onChange={apiSearch} type="text" className="form-control" id="searchBar" placeholder="Search"/>
					<div className="input-group-append">
						<div className="input-group-text">@</div>
					</div>
				</div>
				<ul>
					{searchList}
				</ul>
			</div>
}

export default SearchBar;