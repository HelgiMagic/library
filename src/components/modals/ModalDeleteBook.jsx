import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActive } from '../../slices/modalSlice';
import { deleteBook } from '../../slices/booksSlice';

export default function ModalDeleteBook({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(setActive({ modal: null }));
  };

  const handleDelete = () => {
    dispatch(deleteBook(id));
    navigate('/');
    handleClose();
  };

  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="d-flex first-row">
          <h2>Удалить книгу</h2>
          <button className="svgButton" type="button" onClick={handleClose}>
            <img src="/closeModal.svg" alt="close modal button" />
          </button>
        </div>

        <p>Вы уверены?</p>
        <div className="btn-row">
          <button type="button" className="bookpage-btn danger" onClick={handleDelete}>Да, удалить</button>
          <button type="button" className="bookpage-btn" onClick={handleClose}>Нет, вернуться</button>
        </div>
      </div>
    </>
  );
}
