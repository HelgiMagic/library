import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    modal: modalReducer,
  },
});
