# Bookstore App (MERN Stack)

## Overview

This is a bookstore application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Features

- **Browse Books:** View a list of available books with details.
- **Add Book:** Add new books to the collection with title, author, and other details.
- **Edit Book:** Modify existing book details.
- **Delete Book:** Remove a book from the collection.

## Front-end Functionalities

- **Spinner Component:** Provides a loading indicator during asynchronous operations.
- **Table View:** Display books in a tabular format for a structured view.
- **Card View:** Present books in a card-based layout for a more visual representation.
- **Snackbar (Notistack):** Show messages, such as success or error notifications, using the Notistack library.

## Technologies Used

- **MongoDB:** Database to store book information.
- **Mongoose:** MongoDB object modeling for Node.js.
- **Express.js:** Backend framework for handling API requests.
  - Middleware:
    - `express.json()`: Middleware for parsing JSON data.
    - `CORS`: Middleware for handling Cross-Origin Resource Sharing.
  - Routing:
    - `express.Router()`: Modular routing using Express Router.
- **React:** Frontend library for building the user interface.
  - **Vite:** Frontend build tool for faster development.
  - **Tailwind CSS:** Utility-first CSS framework for styling.
  - **React Router Dom:** Routing for React applications.
  - **Axios:** HTTP client for making API requests.
  - **Notistack:** Snackbar library for displaying messages.
- **Node.js:** Server-side runtime environment.
- **Bootstrap:** Frontend styling for a responsive design.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/bookstore-app.git
   cd bookstore-app

   ```

# Install server dependencies

cd server
npm install

# Install client dependencies

cd ../client
npm install

set the config file.

PORT=5000
MONGODB_URI=your_mongodb_connection_string

# Run the server

cd ../server
npm start

# Run the client

cd ../client
npm run dev

You can copy this content and paste it into your text editor.
