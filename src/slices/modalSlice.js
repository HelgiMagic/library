/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const {
  setActive,
} = modalSlice.actions;
export default modalSlice.reducer;
