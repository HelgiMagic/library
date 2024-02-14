import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeBook } from '../../slices/booksSlice';
import constants from '../../constants';
import Icon from '../ui/Icon';
import * as ui from './Book.styled';

export default function Book({ data }) {
  const dispatch = useDispatch();
  const {
    title, pictureLink, available, id, favorite,
  } = data;

  const statusClass = classNames('book-status', {
    available,
  });

  const favoriteClass = classNames({ favorite });
  const availableText = available ? 'Доступна' : 'На руках';
  const link = `${constants.LINK_BOOKS}/${id}`;

  const handleFavoriteClick = () => {
    dispatch(changeBook({ favorite: !favorite, id }));
  };

  return (
    <ui.BookWrapper>
      <ui.Art src={pictureLink} alt="обложка книги" className="book-art" />
      <ui.Title>{title}</ui.Title>
      <div className="book-row">
        <div className={statusClass}>{availableText}</div>
        <button type="button" onClick={handleFavoriteClick} className={favoriteClass}><Icon name="favorite" width="20px" /></button>
      </div>
      <Link to={link} className="book-link">Подробнее</Link>
    </ui.BookWrapper>
  );
}