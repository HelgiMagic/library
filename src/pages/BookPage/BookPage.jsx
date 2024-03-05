import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../slices/modalSlice';
import { fetchOneBook } from '../../slices/booksSlice';
import constants from '../../constants';
import IconButton from '../../components/ui/IconButton';
import {
  Wrapper, ArtColumn, Art, StatsButton, Column, Group, JustifyRow,
  Title, ButtonsColumn, StatusRow, Status, ChangeAvailability,
} from './BookPage.styled';

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
    <Wrapper className="main">
      <ArtColumn>
        <Art src={data.pictureLink} alt="book art" />
        <StatsButton onClick={handleOpenStats}>Статистика</StatsButton>
      </ArtColumn>
      <Column>
        <Group>
          <JustifyRow>
            <Title>{data.title}</Title>
            <ButtonsColumn>
              <IconButton name="edit" size="medium" hoverColor="var(--blue)" onClick={handleEditBook} />
              <IconButton name="delete" size="medium" hoverColor="var(--danger)" onClick={handleDeleteBook} />
            </ButtonsColumn>
          </JustifyRow>
          <p>
            Автор:
            {' '}
            {data.author}
          </p>
          <p>{data.description}</p>
        </Group>

        <Group>
          <StatusRow>
            <Status className={statusClass}>{availableText}</Status>
            <ChangeAvailability type="button" size="small" onClick={handleChangeAvailability}>Изменить доступность</ChangeAvailability>
          </StatusRow>
          <p>{pText}</p>
          <p>{whoFavoritedText}</p>
        </Group>
      </Column>
    </Wrapper>
  );
}
