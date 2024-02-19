import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { setActive } from '../../../slices/modalSlice';
import { createBook } from '../../../slices/booksSlice';
import AddBookButton from '../../AddBookButton';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';
import Input from '../../ui/Input';

export default function ModalAddNewBook() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [picLink, setPicLink] = useState('');

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleAuthorInput = (e) => setAuthor(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleGenreInput = (e) => setGenre(e.target.value);
  const handlePictureInput = (e) => setPicLink(e.target.value);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));

    setTitle('');
    setPicLink('');
  };

  const handleSubmit = () => {
    dispatch(createBook({
      title,
      description,
      genre,
      pictureLink: picLink,
      available: true,
      favorite: false,
      whoFavorited: [],
      whoHas: '',
      author,
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
          <Input placeholder="Название книги" onInput={handleTitleInput} value={title} required />

          <Input placeholder="Описание книги" onInput={handleDescriptionInput} value={description} />

          <Input placeholder="Автор книги" onInput={handleAuthorInput} value={author} required />

          <Input placeholder="Жанр книги" onInput={handleGenreInput} value={genre} required />

          <Input placeholder="Ссылка на обложку" onInput={handlePictureInput} value={picLink} required />

          <AddBookButton type="submit" size="small" />
        </ui.Form>
      </ui.Modal>
    </>
  );
}
