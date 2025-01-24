# Node.js Authentication Backend

A simple authentication backend built with Node.js, Express, MongoDB, JWT, and bcrypt. This project provides user registration and login functionality with secure password hashing and token-based authentication.

## Features

- User registration with hashed passwords using `bcrypt`.
- User login with JWT-based authentication.
- Middleware for protecting routes.
- Modular structure with controllers, routes, models, and middleware.

## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Framework for building the API.
- **MongoDB**: NoSQL database for user data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT (JSON Web Tokens)**: For token-based authentication.
- **bcrypt**: For hashing passwords securely.

## Project Structure


## Installation

1. Clone the repository:

   git clone https://github.com/AshiqNiyas/auth-backend.git
   cd auth-backend
2. Install dependencies
   npm install
3. Setup environment variables
   MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=5000
4. start the server
   npm start


## Dependencies
  express
  mongoose
  jsonwebtoken
  bcrypt
  dotenv
