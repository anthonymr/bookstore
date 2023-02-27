import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  newTitle: '',
  newAuthor: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, { payload }) => {
      const removeId = payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== removeId),
      };
    },
    setNewTitle(state, { payload }) {
      return {
        ...state,
        newTitle: payload,
      };
    },
    setNewAuthor(state, { payload }) {
      return {
        ...state,
        newAuthor: payload,
      };
    },
  },
});

export const {
  addBook, removeBook, setNewTitle, setNewAuthor,
} = booksSlice.actions;
export default booksSlice.reducer;
