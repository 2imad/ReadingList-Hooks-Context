import React, { useState, useContext } from "react";
import { Context as BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      return;
    }
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="enter a title"
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          placeholder="enter a author"
        />
        <input value="add book" type="submit" />
      </form>
    </div>
  );
};

export default BookForm;
