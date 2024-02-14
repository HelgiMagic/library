import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActive } from '../../../slices/modalSlice';
import { deleteBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';
import { BtnRow, DangerButton } from './ModalDeleteBook.styled';

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
        <BtnRow>
          <DangerButton type="button" onClick={handleDelete} size="small">Да, удалить</DangerButton>
          <ui.SubmitButton type="button" onClick={handleClose} size="small">Нет, вернуться</ui.SubmitButton>
        </BtnRow>
      </ui.Modal>
    </>
  );
}
