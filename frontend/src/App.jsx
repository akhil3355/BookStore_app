import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import EditBook from "./pages/EditBook";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import Home from "./pages/Home";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
