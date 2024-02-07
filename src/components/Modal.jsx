import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { setActive } from '../slices/modalSlice';
import { addBook } from '../slices/booksSlice';
import AddBookButton from './AddBookButton';

export default function Modal() {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.modal);
  const [title, setTitle] = useState('');
  const [picLink, setPicLink] = useState('');

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handlePictureInput = (e) => setPicLink(e.target.value);

  if (active === null) return null;

  const handleClose = () => {
    dispatch(setActive(null));

    setTitle('');
    setPicLink('');
  };

  const handleSubmit = () => {
    dispatch(addBook({
      title,
      pictureLink: picLink,
      available: true,
      favorite: false,
    }));

    handleClose();
  };

  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="d-flex first-row">
          <h2>Добавить книгу</h2>
          <button className="svgButton" type="button" onClick={handleClose}>
            <img src="/closeModal.svg" alt="close modal button" />
          </button>
        </div>

        <form className="modalForm" onSubmit={handleSubmit}>
          <input placeholder="Название книги" className="modal-input" onInput={handleTitleInput} value={title} />

          <input placeholder="Ссылка на обложку" className="modal-input" onInput={handlePictureInput} value={picLink} />

          <AddBookButton />
        </form>
      </div>
    </>
  );
}
