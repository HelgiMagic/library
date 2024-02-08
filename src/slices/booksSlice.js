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
// };

const initialState = {
  list: [],
  active: 0,
};

export const createBook = createAsyncThunk(
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
    addBook(state, action) {
      state.list.push(action.payload);
    },
    swapFavorite(state, action) {
      const id = action.payload;

      const elem = state.list.find((el) => el.id === id);
      elem.favorite = !elem.favorite;
      console.log(elem.favorite);
    },
    changeAvailability(state, action) {
      const { id, whoHas, available } = action.payload;

      console.log(id, whoHas);

      const elem = state.list.find((el) => el.id === id);
      console.log(elem);
      elem.whoHas = whoHas;
      elem.available = available;

      console.log(id, whoHas);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export const {
  addBook, swapFavorite, changeAvailability,
} = booksSlice.actions;
export default booksSlice.reducer;
