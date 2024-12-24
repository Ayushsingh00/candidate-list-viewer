# Candidate List Viewer - Frontend

This project is a React application that displays a list of candidates fetched from a Node.js/Express backend API. It allows users to filter candidates by name or skills and sort them by years of experience.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd candidate-list-viewer/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the React application:
   ```
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the application.

### Features

- Displays a list of candidates with their Name, Skills, and Years of Experience.
- Search functionality to filter candidates by Name or Skills.
- Sorting feature to order candidates by Years of Experience.

### API Endpoint

The frontend fetches candidate data from the following API endpoint:
```
GET /api/candidates
```

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.