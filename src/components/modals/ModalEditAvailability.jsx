import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../slices/modalSlice';
import { changeBook } from '../../slices/booksSlice';
import getNewStats from '../../functions/getNewStats';

export default function ModalEditAvailability({ id }) {
  const dispatch = useDispatch();
  const [whoHas, setWhoHas] = useState('');

  const handleWhoHasInput = (e) => setWhoHas(e.target.value);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));

    setWhoHas('');
  };

  const book = useSelector((state) => state.books.list).find((elem) => elem.id === id);

  const handleSubmit = () => {
    const statistics = getNewStats(book, whoHas);
    const available = whoHas === '';

    dispatch(changeBook({
      whoHas, available, id, statistics,
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
          <input placeholder="У кого книга" className="modal-input" onInput={handleWhoHasInput} value={whoHas} />

          <button type="submit" className="bookpage-btn">Изменить доступность</button>
        </form>
      </div>
    </>
  );
}
