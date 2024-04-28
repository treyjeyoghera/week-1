// SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for recent transaction ..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;
