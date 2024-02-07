import React from 'react';
import { useDispatch } from 'react-redux';
import BooksContainer from '../components/BooksContainer';
import AddBookButton from '../components/AddBookButton';
import { setActive } from '../slices/modalSlice';

export default function MainPage() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setActive('addBook'));
  };

  return (
    <div className="main">
      <AddBookButton onClick={handleOpenModal} />
      <BooksContainer />
    </div>
  );
}
