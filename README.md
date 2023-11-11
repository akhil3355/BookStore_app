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

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB atlas account.

### Backend Configuration

1. **Set up `config.js`:**

   Inside the `backend` folder, locate the `config.js` file.

2. **Configure `config.js`:**

   Open `config.js` and set the `PORT` and `mongoDBURL` to your desired values.

   ```javascript
   // server/config.js

   module.exports = {
     PORT: 5000, // Set your preferred port
     mongoDBURL: "your_mongodb_connection_string", // Set your MongoDB connection string
   };
   ```

1## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/bookstore-app.git
   cd bookstore-app
   ```

2. # Install server dependencies

```bash
   cd backend
   npm install
```

3. # Install client dependencies

```bash
   cd frontend
   npm install
```

4. # Run the backend

```bash
   cd ../backend
   npm run dev
```

5. # Run the frontend

```bash
   cd ../client
   npm run dev
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the [contributing guidelines](CONTRIBUTING.md).

## Contact

For questions or support, contact me at [akhilthiruthiyottil@gmail.com].

---
