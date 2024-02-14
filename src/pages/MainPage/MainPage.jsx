import React from 'react';
import { useDispatch } from 'react-redux';
import BooksContainer from '../../components/BooksContainer';
import AddBookButton from '../../components/AddBookButton';
import { setActive } from '../../slices/modalSlice';
import constants from '../../constants';
import Search from '../../components/Search';

export default function MainPage() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setActive({ modal: constants.MODAL_ADD_BOOK }));
  };

  return (
    <div className="main">
      <Search />
      <AddBookButton onClick={handleOpenModal} />
      <BooksContainer />
    </div>
  );
}
