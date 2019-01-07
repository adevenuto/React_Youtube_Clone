import React from 'react';

const SearchBar = ({newSearch}) => {
const search = (e) => {
	if (e.key === 'Enter') {
      	newSearch(e.target.value);
    }
}
		return	<div className="form-group">
					<input 
						onKeyPress={search} className="form-control" 
						placeholder="Search"
					/>
				</div>
}

export default SearchBar;