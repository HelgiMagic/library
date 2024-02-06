/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const book = {
  title: 'Harry Potter',
  picture: 'https://i.pinimg.com/originals/f3/10/4e/f3104ee11c298da850ded8c3df5220b8.jpg',
  available: true,
  id: 0,
};

const initialState = {
  list: [book],
  active: 0,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.list = action.payload;
    },
    addBook(state, action) {
      state.list.push(action.payload);
    },
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const {
  setBooks,
} = channelsSlice.actions;
export default channelsSlice.reducer;
