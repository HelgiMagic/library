import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActive } from '../../slices/modalSlice';
import { changeBook } from '../../slices/booksSlice';
import IconButton from '../ui/IconButton';

export default function ModalEditAvailability({ id }) {
  const dispatch = useDispatch();
  const [whoHas, setWhoHas] = useState('');

  const handleWhoHasInput = (e) => setWhoHas(e.target.value);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));

    setWhoHas('');
  };

  const handleSubmit = () => {
    const available = whoHas === '';

    dispatch(changeBook({ whoHas, available, id }));
    handleClose();
  };

  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="d-flex first-row">
          <h2>Добавить книгу</h2>
          <IconButton name="closeModal" width="20px" onClick={handleClose} />
        </div>

        <form className="modalForm" onSubmit={handleSubmit}>
          <input placeholder="У кого книга" className="modal-input" onInput={handleWhoHasInput} value={whoHas} />

          <button type="submit" className="bookpage-btn">Изменить доступность</button>
        </form>
      </div>
    </>
  );
}
