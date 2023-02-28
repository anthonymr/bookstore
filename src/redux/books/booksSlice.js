import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import key from '../../key';

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

      return { ...state, books: newBooks };
    });
  },
});

export const { setNewTitle, setNewAuthor } = booksSlice.actions;
export default booksSlice.reducer;
