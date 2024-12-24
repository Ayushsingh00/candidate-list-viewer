import React, { useState, useEffect } from 'react';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import SortButton from './components/SortButton';
import { fetchCandidates } from './services/api';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchCandidates().then(data => setCandidates(data));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = () => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(order);
    const sortedCandidates = [...candidates].sort((a, b) => {
      return order === 'asc' ? a.yearsOfExperience - b.yearsOfExperience : b.yearsOfExperience - a.yearsOfExperience;
    });
    setCandidates(sortedCandidates);
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />
      <SortButton sortOrder={sortOrder} handleSort={handleSort} />
      <CandidateTable candidates={filteredCandidates} />
    </div>
  );
};

export default App;