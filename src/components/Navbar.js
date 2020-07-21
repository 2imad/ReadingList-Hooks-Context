import React, { useContext } from "react";
import { Context as BookContext } from "../context/BookContext";

const Navbar = () => {
  const {
    state: { books },
  } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List </h1>
      <p>Currently you have {books && books.length} items to read</p>
    </div>
  );
};

export default Navbar;
