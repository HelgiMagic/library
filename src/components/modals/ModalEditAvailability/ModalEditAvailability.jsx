import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../../slices/modalSlice';
import { changeBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import {
  Overlay, Modal, Form, TitleRow, SubmitButton,
} from '../Modal.styled';
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
      <Overlay />
      <Modal className="modal">
        <TitleRow>
          <h2>Изменить доступность</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </TitleRow>

        <Form className="modalForm" onSubmit={handleSubmit}>
          <Input placeholder="У кого книга" value={whoHas} onInput={handleWhoHasInput} />

          <SubmitButton type="submit" size="small">Изменить доступность</SubmitButton>
        </Form>
      </Modal>
    </>
  );
}
