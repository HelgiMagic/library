import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../../slices/modalSlice';
import { changeBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';

export default function ModalEditBook({ id }) {
  const dispatch = useDispatch();

  const book = useSelector((state) => state.books.list).find((elem) => elem.id === id);

  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [genre, setGenre] = useState(book.genre);
  const [pictureLink, setPictureLink] = useState(book.pictureLink);
  const [whoFavorited, setWhoFavorited] = useState(book.whoFavorited.join(', '));

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleGenreInput = (e) => setGenre(e.target.value);
  const handlePictureInput = (e) => setPictureLink(e.target.value);
  const handleWhoFavoritedInput = (e) => setWhoFavorited(e.target.value);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));
  };

  const handleSubmit = () => {
    const whoFavoritedArray = whoFavorited.split(', ');
    dispatch(changeBook({
      title, description, pictureLink, whoFavorited: whoFavoritedArray, id,
    }));
    handleClose();
  };

  return (
    <>
      <ui.Overlay />
      <ui.Modal className="modal">
        <ui.TitleRow>
          <h2>Изменить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </ui.TitleRow>

        <ui.Form className="modalForm" onSubmit={handleSubmit}>
          <ui.Input placeholder="Название книги" onInput={handleTitleInput} value={title} />

          <ui.Input placeholder="Описание книги" onInput={handleDescriptionInput} value={description} />

          <ui.Input placeholder="Жанр книги" onInput={handleGenreInput} value={genre} required />

          <ui.Input placeholder="Ссылка на обложку" onInput={handlePictureInput} value={pictureLink} />

          <ui.Input placeholder="Желающие прочитать" onInput={handleWhoFavoritedInput} value={whoFavorited} />

          <ui.SubmitButton type="submit" size="small">Изменить книгу</ui.SubmitButton>
        </ui.Form>
      </ui.Modal>
    </>
  );
}
