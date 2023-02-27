import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
        books: state.books.filter((book) => book.id !== removeId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
