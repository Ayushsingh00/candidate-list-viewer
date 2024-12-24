import React from 'react';

const SortButton = ({ sortOrder, handleSort }) => {
  return (
    <button onClick={handleSort}>
      Sort by Years of Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
    </button>
  );
};

export default SortButton;