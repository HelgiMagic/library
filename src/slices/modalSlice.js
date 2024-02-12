/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: null, // addBook | editAvailability | editBook
  activeElementId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload.modal;
      state.activeElementId = action.payload.elementId ?? null;
    },
  },
});

export const { setActive } = modalSlice.actions;
export default modalSlice.reducer;
