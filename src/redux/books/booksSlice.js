import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import key from '../../key';

const initialState = {
  books: [],
  newTitle: '',
  newAuthor: '',
  isLoading: false,
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  () => {
    const endPoint = `/apps/${key}/books`;
    return axios.get(`${baseUrl}${endPoint}`);
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  (newBook) => {
    const endPoint = `/apps/${key}/books`;
    return axios.post(`${baseUrl}${endPoint}`, { ...newBook });
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  (id) => {
    const endPoint = `/apps/${key}/books/${id}`;
    return axios.delete(`${baseUrl}${endPoint}`);
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(addBook.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(addBook.fulfilled, (state) => ({ ...state, isLoading: false }));
    builder.addCase(removeBook.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(removeBook.fulfilled, (state) => ({ ...state, isLoading: false }));
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      let newBooks = [];

      if (payload.data !== '') {
        newBooks = Object.entries(payload.data).map(
          (book) => ({ ...book[1][0], item_id: book[0] }),
        );
      }

      newBooks.sort((a, b) => {
        if (a.item_id > b.item_id) return 1;
        if (b.item_id > a.item_id) return -1;
        return 0;
      });
      return { ...state, books: newBooks };
    });
  },
});

export const { setNewTitle, setNewAuthor } = booksSlice.actions;
export default booksSlice.reducer;
