import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeBook } from '../slices/booksSlice';
import constants from '../constants';

export default function Book({ data }) {
  const dispatch = useDispatch();
  const {
    title, pictureLink, available, id, favorite,
  } = data;

  const statusClass = classNames('book-status', {
    unavailable: !available,
    available,
  });

  const favoriteClass = classNames({ favorite });

  const availableText = available ? 'Доступна' : 'На руках';

  const handleFavoriteClick = () => {
    dispatch(changeBook({ favorite: !favorite, id }));
  };

  const link = `${constants.LINK_BOOKS}/${id}`;

  return (
    <div className="book">
      <img src={pictureLink} alt="обложка книги" className="book-art" />
      <h3 className="book-title">{title}</h3>
      <div className="book-row">
        <div className={statusClass}>{availableText}</div>
        <button type="button" onClick={handleFavoriteClick} className={favoriteClass}><img src="/favorite.svg" alt="favorites" /></button>
      </div>
      <Link to={link} className="book-link">Подробнее</Link>
    </div>
  );
}
