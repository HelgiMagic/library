import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../slices/modalSlice';
import { fetchOneBook } from '../../slices/booksSlice';
import constants from '../../constants';
import IconButton from '../../components/ui/IconButton';
import * as ui from './BookPage.styled';
import Button from '../../components/ui/Button';

export default function BookPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.books.list).find((book) => book.id === id);

  useEffect(() => {
    if (data !== undefined) return;
    dispatch(fetchOneBook(id));
  }, []);

  if (data === undefined) return null;

  const statusClass = classNames('book-status', {
    unavailable: !data.available,
    available: data.available,
  });

  const availableText = data.available ? 'Доступна' : 'На руках';
  const pText = !data.available ? `У кого: ${data.whoHas}` : '';
  const whoFavorited = data.whoFavorited.join(', ');
  const whoFavoritedText = whoFavorited.length > 0 ? `Желающие прочитать: ${whoFavorited}` : '';

  const handleChangeAvailability = () => {
    dispatch(setActive({
      modal: constants.MODAL_EDIT_AVAILABILITY,
      elementId: id,
    }));
  };

  const handleEditBook = () => {
    dispatch(setActive({
      modal: constants.MODAL_EDIT_BOOK,
      elementId: id,
    }));
  };

  const handleDeleteBook = () => {
    dispatch(setActive({
      modal: constants.MODAL_DELETE_BOOK,
      elementId: id,
    }));
  };

  const handleOpenStats = () => {
    dispatch(setActive({
      modal: constants.MODAL_STATISTICS,
      elementId: id,
    }));
  };

  return (
    <ui.Wrapper className="main">
      <ui.ArtColumn>
        <ui.Art src={data.pictureLink} alt="book art" />
        <Button color="#56b9f6" onClick={handleOpenStats}>Статистика</Button>
      </ui.ArtColumn>
      <ui.Column>
        <ui.Group>
          <ui.JustifyRow>
            <ui.Title>{data.title}</ui.Title>
            <ui.ButtonsColumn>
              <IconButton name="edit" size="medium" onClick={handleEditBook} id="edit" />
              <IconButton name="delete" size="medium" onClick={handleDeleteBook} id="delete" />
            </ui.ButtonsColumn>
          </ui.JustifyRow>
          <p>{data.description}</p>
        </ui.Group>

        <ui.Group>
          <ui.StatusRow>
            <ui.Status className={statusClass}>{availableText}</ui.Status>
            <ui.ChangeAvailability color="var(--purple)" onClick={handleChangeAvailability} size="small">Изменить доступность</ui.ChangeAvailability>
          </ui.StatusRow>
          <p>{pText}</p>
          <p>{whoFavoritedText}</p>
        </ui.Group>
      </ui.Column>
    </ui.Wrapper>
  );
}
