/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: null, // addBook | editAvailability
  activeElemId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
    setActiveElemId(state, action) {
      state.activeElemId = action.payload;
    },
  },
});

export const {
  setActive, setActiveElemId,
} = modalSlice.actions;
export default modalSlice.reducer;
