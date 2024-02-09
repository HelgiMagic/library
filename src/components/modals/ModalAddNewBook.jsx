import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { setActive } from '../../slices/modalSlice';
import { createBook } from '../../slices/booksSlice';
import AddBookButton from '../AddBookButton';

export default function ModalAddNewBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [picLink, setPicLink] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handlePictureInput = (e) => setPicLink(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));

    setTitle('');
    setPicLink('');
  };

  const handleSubmit = () => {
    dispatch(createBook({
      title,
      description,
      pictureLink: picLink,
      available: true,
      favorite: false,
      whoFavorited: ['Alan', 'Jason', 'Кирилл', 'Борис'],
      whoHas: '',
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

          <input placeholder="Описание книги" className="modal-input" onInput={handleDescriptionInput} value={description} />

          <input placeholder="Ссылка на обложку" className="modal-input" onInput={handlePictureInput} value={picLink} />

          <AddBookButton />
        </form>
      </div>
    </>
  );
}
