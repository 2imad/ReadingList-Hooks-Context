import React, { useContext } from "react";
import { Context as BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  const deleteBook = (id) => {
    removeBook(id);
  };
  return (
    <li onClick={() => deleteBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
