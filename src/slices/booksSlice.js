/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

// const book = {
//   title: 'Harry Potter and philosopher stone',
//   pictureLink: 'https://i.pinimg.com/originals/f3/10/4e/f3104ee11c298da850ded8c3df5220b8.jpg',
//   available: false,
//   id: 0,
// };

const initialState = {
  list: [],
  active: 0,
};

export const addBook = createAsyncThunk(
  'books/create',
  async (body) => {
    const response = await axios.post(routes.main(), body);
    return response.data;
  },
);

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async () => {
    const response = await axios.get(routes.main());
    return response.data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

// export const {
//   setBooks, addBook,
// } = booksSlice.actions;
export default booksSlice.reducer;
