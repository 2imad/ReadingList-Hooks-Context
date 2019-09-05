import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {

    const [books,setBooks] =  useState([
       {title:'Elementary Knowledge', author:'Brian Stinckx',id:uuid()},
       {title:'Eloquent Javascript', author:'Louis van de Root',id:uuid()},
       {title:'7 dwarfs in The Jungle', author:'Sabina Shweinsteiger',id:uuid()}
   ])
   const addBook = (title, author) => {
       setBooks([...books, { title, author,id:uuid() }])
   }
   const removeBook = (id) => {
      setBooks(books.filter(book => book.id !== id ));  
   }
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
           {children} 
        </BookContext.Provider>
    )
}

export default BookContextProvider;
