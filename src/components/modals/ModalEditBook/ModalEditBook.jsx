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
          <Input placeholder="Название книги" value={title} onInput={handleTitleInput} />

          <Input placeholder="Описание книги" value={description} onInput={handleDescriptionInput} />

          <Input required placeholder="Автор книги" value={author} onInput={handleAuthorInput} />

          <Input required placeholder="Жанр книги" value={genre} onInput={handleGenreInput} />

          <Input placeholder="Ссылка на обложку" value={pictureLink} onInput={handlePictureInput} />

          <Input placeholder="Желающие прочитать" value={whoFavorited} onInput={handleWhoFavoritedInput} />

          <SubmitButton type="submit" size="small">Изменить книгу</SubmitButton>
        </Form>
      </Modal>
    </>
  );
}
