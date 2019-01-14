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
						id="searchInput" 
						placeholder="Search"
					/>
					<div className="input-group-append">
						<div className="input-group-text">
						<svg xmlns="http://www.w3.org/2000/svg" id="magnifyGlass" width="20" height="20" viewBox="0 0 30.239 30.239"><path d="M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 0 0 3.535 0 2.496 2.496 0 0 0 0-3.535l-6.718-6.72a2.5 2.5 0 0 0-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z" fill="#fff"/></svg>
						</div>
					</div>
				</div>
				<ul className="searchList">
					{SearchListItem}
				</ul>
			</div>
}

export default SearchBar;