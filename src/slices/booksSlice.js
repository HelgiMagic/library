/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

// const book = {
//   title: 'Harry Potter and philosopher stone',
//   pictureLink: 'https://i.pinimg.com/originals/f3/10/4e/f3104ee11c298da850ded8c3df5220b8.jpg',
//   available: false,
//   favorite: false,
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

export const changeBook = createAsyncThunk(
  'books/change',
  async (updatedBody) => {
    const oldBody = await axios.get(routes.certain(updatedBody.id));
    console.log(updatedBody);
    console.log({ ...updatedBody, ...oldBody.data });
    await axios.put(routes.certain(updatedBody.id), { ...oldBody.data, ...updatedBody });
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
    swapFavorite(state, action) {
      const id = action.payload;

      const elem = state.list.find((el) => el.id === id);
      elem.favorite = !elem.favorite;
      console.log(elem.favorite);
    },
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

export const {
  swapFavorite,
} = booksSlice.actions;
export default booksSlice.reducer;
