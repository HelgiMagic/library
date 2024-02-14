import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../../slices/modalSlice';
import { changeBook } from '../../../slices/booksSlice';
import IconButton from '../../ui/IconButton';
import * as ui from '../Modal.styled';
import Button from '../../ui/Button';

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
      <ui.Overlay />
      <ui.Modal className="modal">
        <ui.TitleRow>
          <h2>Изменить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </ui.TitleRow>

        <ui.Form className="modalForm" onSubmit={handleSubmit}>
          <ui.Input placeholder="Название книги" className="modal-input" onInput={handleTitleInput} value={title} />

          <ui.Input placeholder="Описание книги" className="modal-input" onInput={handleDescriptionInput} value={description} />

          <ui.Input placeholder="Ссылка на обложку" className="modal-input" onInput={handlePictureInput} value={pictureLink} />

          <ui.Input placeholder="Желающие прочитать" className="modal-input" onInput={handleWhoFavoritedInput} value={whoFavorited} />

          <Button type="submit" className="bookpage-btn">Изменить книгу</Button>
        </ui.Form>
      </ui.Modal>
    </>
  );
}
