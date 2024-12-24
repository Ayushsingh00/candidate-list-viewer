import React from 'react';

const CandidateTable = ({ candidates }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Skills</th>
          <th>Years of Experience</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate, index) => (
          <tr key={index}>
            <td>{candidate.name}</td>
            <td>{candidate.skills}</td>
            <td>{candidate.yearsOfExperience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;