import createDataContext from "auto-react-context";
import uuid from "uuid/v1";
import { ADD_BOOK, REMOVE_BOOK } from "./types";

const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
const addBook = (dispatch) => (title, author) => {
  dispatch({ type: ADD_BOOK, payload: { title, author } });
};

const removeBook = (dispatch) => (id) => {
  dispatch({ type: REMOVE_BOOK, payload: id });
};

export const { Context, Provider } = createDataContext(
  bookReducer,
  {
    addBook,
    removeBook,
  },
  {
    books: [
      {
        title: "Elementary Knowledge",
        author: "Brian Stinckx",
        id: uuid(),
      },
      {
        title: "Eloquent Javascript",
        author: "Louis van de Root",
        id: uuid(),
      },
      {
        title: "7 dwarfs in The Jungle",
        author: "Sabina Shweinsteiger",
        id: uuid(),
      },
    ],
  }
);
