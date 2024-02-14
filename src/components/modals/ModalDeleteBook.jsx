import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActive } from '../../slices/modalSlice';
import { deleteBook } from '../../slices/booksSlice';
import IconButton from '../ui/IconButton';
import * as ui from './Modal.styled';
import Button from '../ui/Button';

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
      <ui.Overlay />
      <ui.Modal className="modal">
        <ui.TitleRow>
          <h2>Удалить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </ui.TitleRow>

        <p>Вы уверены?</p>
        <div className="btn-row">
          <Button type="button" className="bookpage-btn danger" onClick={handleDelete} size="small">Да, удалить</Button>
          <Button type="button" className="bookpage-btn" onClick={handleClose} size="small">Нет, вернуться</Button>
        </div>
      </ui.Modal>
    </>
  );
}
