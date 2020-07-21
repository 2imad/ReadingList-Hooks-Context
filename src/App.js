import React from "react";
import { Provider as BookProvider } from "./context/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookProvider>
    </div>
  );
}

export default App;
