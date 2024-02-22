import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../../slices/modalSlice';
import { changeBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import {
  Overlay, Modal, Form, TitleRow, SubmitButton,
} from '../Modal.styled';
import Input from '../../ui/Input';

export default function ModalEditBook({ id }) {
  const dispatch = useDispatch();

  const book = useSelector((state) => state.books.list).find((elem) => elem.id === id);

  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState(book.genre);
  const [pictureLink, setPictureLink] = useState(book.pictureLink);
  const [whoFavorited, setWhoFavorited] = useState(book.whoFavorited.join(', '));

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleAuthorInput = (e) => setAuthor(e.target.value);
  const handleGenreInput = (e) => setGenre(e.target.value);
  const handlePictureInput = (e) => setPictureLink(e.target.value);
  const handleWhoFavoritedInput = (e) => setWhoFavorited(e.target.value);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));
  };

  const handleSubmit = () => {
    const whoFavoritedArray = whoFavorited.split(', ');
    dispatch(changeBook({
      title, description, pictureLink, whoFavorited: whoFavoritedArray, id, author,
    }));
    handleClose();
  };

  return (
    <>
      <Overlay />
      <Modal className="modal">
        <TitleRow>
          <h2>Изменить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </TitleRow>

        <Form className="modalForm" onSubmit={handleSubmit}>
          <Input placeholder="Название книги" onInput={handleTitleInput} value={title} />

          <Input placeholder="Описание книги" onInput={handleDescriptionInput} value={description} />

          <Input placeholder="Автор книги" onInput={handleAuthorInput} value={author} required />

          <Input placeholder="Жанр книги" onInput={handleGenreInput} value={genre} required />

          <Input placeholder="Ссылка на обложку" onInput={handlePictureInput} value={pictureLink} />

          <Input placeholder="Желающие прочитать" onInput={handleWhoFavoritedInput} value={whoFavorited} />

          <SubmitButton type="submit" size="small">Изменить книгу</SubmitButton>
        </Form>
      </Modal>
    </>
  );
}
