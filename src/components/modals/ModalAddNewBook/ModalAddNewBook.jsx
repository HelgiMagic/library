import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { setActive } from '../../../slices/modalSlice';
import { createBook } from '../../../slices/booksSlice';
import AddBookButton from '../../AddBookButton';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';

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
      <ui.Overlay />
      <ui.Modal>
        <ui.TitleRow>
          <h2>Добавить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </ui.TitleRow>

        <ui.Form className="modalForm" onSubmit={handleSubmit}>
          <ui.Input placeholder="Название книги" onInput={handleTitleInput} value={title} required />

          <ui.Input placeholder="Описание книги" onInput={handleDescriptionInput} value={description} />

          <ui.Input placeholder="Ссылка на обложку" onInput={handlePictureInput} value={picLink} required />

          <AddBookButton type="submit" size="small" />
        </ui.Form>
      </ui.Modal>
    </>
  );
}
