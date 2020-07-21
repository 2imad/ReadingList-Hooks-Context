import React, { useContext } from "react";
import { Context as BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const {
    state: { books },
  } = useContext(BookContext);
  return books && books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read at this moment.</div>
  );
};

export default BookList;
