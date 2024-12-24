import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by name or skills"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;