
export const fetchCandidates = async () => {
  const response = await fetch('http://localhost:5000/api/candidates');
  const data = await response.json();
  return data;
};