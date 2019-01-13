import React from 'react';
import {debounce} from 'lodash';
import SearchItem from './search_Item';

const SearchBar = (props) => {
	const searchByTerm = (e, term) => {
		if (e.key === 'Enter') {
			console.log('hello')
			props.searchByTerm(term);
		}
	}
	const apiSearch = debounce((value) => {
		props.newSearch(value);
	}, 100)
	const SearchListItem = props.searchResults.map((video) => {
		return 	<SearchItem
					currentVideo={props.setCurrent}
					video={video}
					videoTitle={video.snippet.title}
					key={video.etag}
				/>
	})

	return	<div id="searchBar" className="form-group">
				<label className="sr-only" htmlFor="searchBar">Search</label>
				<div className="input-group mr-sm-2">	
					<input 
						onKeyPress={(e) => searchByTerm(e, e.target.value)} 
						onInput={(e) => apiSearch(e.target.value)} 
						type="text" 
						className="form-control" 
						id="searchBar" 
						placeholder="Search"
					/>
					<div className="input-group-append">
						<div className="input-group-text">@</div>
					</div>
				</div>
				<ul className="searchList">
					{SearchListItem}
				</ul>
			</div>
}

export default SearchBar;