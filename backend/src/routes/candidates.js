const express = require('express');
const router = express.Router();

const candidates = [
  { name: 'John Doe', skills: 'JavaScript, React', yearsOfExperience: 5 },
  { name: 'Jane Smith', skills: 'Java, Spring', yearsOfExperience: 8 },
  { name: 'Charlie Brown', skills: 'Python, Django', yearsOfExperience: 3 },
  { name: 'Diana Prince', skills: 'C#, .NET', yearsOfExperience: 6 },
  { name: 'Ethan Hunt', skills: 'JavaScript, Node.js', yearsOfExperience: 4 },
  { name: 'Fiona Gallagher', skills: 'Ruby, Rails', yearsOfExperience: 7 },
  { name: 'George Costanza', skills: 'PHP, Laravel', yearsOfExperience: 2 },
  { name: 'Hannah Baker', skills: 'Swift, iOS', yearsOfExperience: 5 },
  { name: 'Ian Malcolm', skills: 'C++, Unreal Engine', yearsOfExperience: 9 },
  { name: 'Julia Roberts', skills: 'Go, Microservices', yearsOfExperience: 1 }
];

router.get('/', (req, res) => {
  res.json(candidates);
});

module.exports = router;