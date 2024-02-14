import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActive } from '../../../slices/modalSlice';
import { changeBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';
import Button from '../../ui/Button/Button';

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
      <ui.Overlay />
      <ui.Modal className="modal">
        <ui.TitleRow>
          <h2>Изменить доступность</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </ui.TitleRow>

        <ui.Form className="modalForm" onSubmit={handleSubmit}>
          <ui.Input placeholder="У кого книга" onInput={handleWhoHasInput} value={whoHas} />

          <Button type="submit" className="bookpage-btn" size="small">Изменить доступность</Button>
        </ui.Form>
      </ui.Modal>
    </>
  );
}
