import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { swapFavorite, changeBook } from '../slices/booksSlice';

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
    dispatch(swapFavorite(id));
    dispatch(changeBook({ favorite: !favorite, id }));
  };

  return (
    <div className="book">
      <img src={pictureLink} alt="обложка книги" className="book-art" />
      <h3 className="book-title">{title}</h3>
      <div className="book-row">
        <div className={statusClass}>{availableText}</div>
        <button type="button" onClick={handleFavoriteClick} className={favoriteClass}><img src="/favorite.svg" alt="favorites" /></button>
      </div>
      <button type="button" className="book-button">Подробнее</button>
    </div>
  );
}
