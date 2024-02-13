import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../slices/modalSlice';
import { changeBook } from '../../slices/booksSlice';
import IconButton from '../ui/IconButton';

export default function ModalEditBook({ id }) {
  const dispatch = useDispatch();

  const book = useSelector((state) => state.books.list).find((elem) => elem.id === id);

  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [pictureLink, setPictureLink] = useState(book.pictureLink);
  const [whoFavorited, setWhoFavorited] = useState(book.whoFavorited.join(', '));

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
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
      <div className="overlay" />
      <div className="modal">
        <div className="d-flex first-row">
          <h2>Изменить книгу</h2>
          <IconButton name="closeModal" width="20px" onClick={handleClose} />
        </div>

        <form className="modalForm" onSubmit={handleSubmit}>
          <input placeholder="Название книги" className="modal-input" onInput={handleTitleInput} value={title} />

          <input placeholder="Описание книги" className="modal-input" onInput={handleDescriptionInput} value={description} />

          <input placeholder="Ссылка на обложку" className="modal-input" onInput={handlePictureInput} value={pictureLink} />

          <input placeholder="Желающие прочитать" className="modal-input" onInput={handleWhoFavoritedInput} value={whoFavorited} />

          <button type="submit" className="bookpage-btn">Изменить книгу</button>
        </form>
      </div>
    </>
  );
}
