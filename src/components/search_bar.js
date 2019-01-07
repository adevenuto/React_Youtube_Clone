import React from 'react';

const SearchBar = ({newSearch}) => {
	const search = (e) => {
		if (e.key === 'Enter') {
			newSearch(e.target.value);
		}
	}
	const apiSearch = (e) => {
		console.log(e.target.value);
	}
		return	<div className="form-group">
					
					<label className="sr-only" htmlFor="searchBar">Search</label>
					<div className="input-group mb-2 mr-sm-2">
						
						<input onKeyPress={search} onChange={apiSearch} type="text" className="form-control" id="searchBar" placeholder="Search"/>
						<div className="input-group-append">
							<div className="input-group-text">@</div>
						</div>
					</div>
				</div>
}

export default SearchBar;