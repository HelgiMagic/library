import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { setActive } from '../../../slices/modalSlice';
import { createBook } from '../../../slices/booksSlice';
import AddBookButton from '../../AddBookButton';
import IconButton from '../../ui/IconButton';
import {
  Overlay, Modal, Form, TitleRow,
} from '../Modal.styled';
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
      <Overlay />
      <Modal>
        <TitleRow>
          <h2>Добавить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </TitleRow>

        <Form className="modalForm" onSubmit={handleSubmit}>
          <Input required placeholder="Название книги" value={title} onInput={handleTitleInput} />

          <Input placeholder="Описание книги" value={description} onInput={handleDescriptionInput} />

          <Input required placeholder="Автор книги" value={author} onInput={handleAuthorInput} />

          <Input required placeholder="Жанр книги" value={genre} onInput={handleGenreInput} />

          <Input required placeholder="Ссылка на обложку" value={picLink} onInput={handlePictureInput} />

          <AddBookButton type="submit" size="small" />
        </Form>
      </Modal>
    </>
  );
}
