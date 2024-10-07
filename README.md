# User Management System

This project is a simple user management system with a React frontend and Node.js backend.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm
* You have a MongoDB instance running

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install backend dependencies:
   ```
   cd <project-directory>
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```
   cd <project-directory>
   node index.js
   ```
   The server will start running on `http://localhost:3000`.

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```
   The React app will start running on `http://localhost:3000`.

## Usage

- To add a new user, fill out the form on the homepage and submit.
- To search for users, use the search box and enter a first name.

## API Endpoints

- POST `/`: Add a new user
- GET `/search`: Search for users by first name

## Technologies Used
- MongoDB: NoSQL database for storing user information
- Cors: Middleware for enabling Cross-Origin Resource Sharing

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed Node.js and npm
* You have MongoDB installed and running on your local machine or have access to a MongoDB instance
  - To start MongoDB locally, typically use: `mongod` (this may vary based on your installation)
  - Ensure MongoDB is running on the default port 27017, or update the connection string in the backend accordingly

- Backend: Node.js, Express.js, MongoDB with Mongoose
- Frontend: React.js, Axios for API calls
