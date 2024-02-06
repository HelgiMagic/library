/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
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
