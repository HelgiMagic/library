/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

// const book = {
//   title: 'Harry Potter and philosopher stone',
//   description: 'Sujet bla bla bla',
//   pictureLink: 'https://i.pinimg.com/originals/f3/10/4e/f3104ee11c298da850ded8c3df5220b8.jpg',
//   available: false,
//   favorite: false,
//   whoFavorited: [],
//   whoHas: 'name of user',
//   id: 0,
//   statistics: [{ name: Денис, action: took | returned, date: 13.02.2024 }];
// };

const initialState = {
  list: [],
};

export const createBook = createAsyncThunk('books/create', async (body) => {
  const response = await axios.post(routes.main(), body);
  return response.data;
});

export const changeBook = createAsyncThunk('books/change', async (updatedBody, { getState }) => {
  const state = getState();
  const oldBody = state.books.list.find((book) => book.id === updatedBody.id);

  await axios.put(routes.certain(updatedBody.id), {
    ...oldBody,
    ...updatedBody,
  });
});

export const deleteBook = createAsyncThunk('books/delete', async (id) => {
  const response = await axios.delete(routes.certain(id));
  return response.data;
});

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const response = await axios.get(routes.main());
  return response.data;
});

export const fetchOneBook = createAsyncThunk('books/fetch-one', async (id) => {
  const response = await axios.get(routes.certain(id));
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchOneBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(changeBook.pending, (state, action) => {
        const data = action.meta.arg;

        const elemIndex = state.list.findIndex((book) => book.id === data.id);
        state.list[elemIndex] = { ...state.list[elemIndex], ...data };
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const { id } = action.payload;

        state.list = state.list.filter((book) => book.id !== id);
      });
  },
});

export default booksSlice.reducer;
