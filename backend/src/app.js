const express = require('express');
const cors = require('cors');
const candidatesRouter = require('./routes/candidates');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/candidates', candidatesRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Candidate List Viewer API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});