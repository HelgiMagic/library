import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../../slices/modalSlice';
import { changeBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';
import getNewStats from './getNewStats';
import Input from '../../ui/Input';

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
      <ui.Overlay />
      <ui.Modal className="modal">
        <ui.TitleRow>
          <h2>Изменить доступность</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </ui.TitleRow>

        <ui.Form className="modalForm" onSubmit={handleSubmit}>
          <Input placeholder="У кого книга" onInput={handleWhoHasInput} value={whoHas} />

          <ui.SubmitButton type="submit" size="small">Изменить доступность</ui.SubmitButton>
        </ui.Form>
      </ui.Modal>
    </>
  );
}
