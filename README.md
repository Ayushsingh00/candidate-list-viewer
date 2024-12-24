# Candidate List Viewer

This project is a Candidate List Viewer application built with React for the frontend and Node.js/Express for the backend. It displays a list of candidates with their respective skills and years of experience, allowing users to search and sort the candidates.

## Project Structure

```
candidate-list-viewer
├── backend
│   ├── src
│   │   ├── app.js          # Entry point for the backend application
│   │   └── routes
│   │       └── candidates.js # API endpoint for serving candidate data
│   ├── package.json        # Backend dependencies and scripts
│   └── README.md           # Documentation for the backend
├── frontend
│   ├── src
│   │   ├── App.js          # Main React component
│   │   ├── components
│   │   │   ├── CandidateTable.js # Component for displaying candidates in a table
│   │   │   ├── SearchBar.js      # Component for searching candidates
│   │   │   └── SortButton.js      # Component for sorting candidates
│   │   └── services
│   │       └── api.js       # API service for fetching candidate data
│   ├── package.json         # Frontend dependencies and scripts
│   └── README.md            # Documentation for the frontend
├── README.md                # Overall project documentation
└── .gitignore               # Files and directories to ignore in version control
```

## Getting Started

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. The API will be available at `http://localhost:5000/api/candidates`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```
4. The application will be available at `http://localhost:3000`.

## Features

- Displays a list of candidates with Name, Skills, and Years of Experience.
- Search functionality to filter candidates by Name or Skills.
- Sorting feature to order candidates by Years of Experience.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.