# Candidate List Viewer Backend

This is the backend part of the Candidate List Viewer project, which serves a hardcoded list of candidates through a simple API.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd candidate-list-viewer/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the server**:
   ```
   npm start
   ```

   The server will start on `http://localhost:3000` by default.

## API Endpoint

- **GET /api/candidates**: Returns a list of candidates with the following fields:
  - Name
  - Skills
  - Years of Experience

## Folder Structure

- `src/app.js`: Entry point of the application, sets up the Express server and middleware.
- `src/routes/candidates.js`: Defines the API endpoint for fetching candidates.

## Dependencies

- Express: A minimal and flexible Node.js web application framework.