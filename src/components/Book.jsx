import React from 'react';
import classNames from 'classnames';

export default function Book({ data }) {
  const { title, picture, available } = data;

  const statusClass = classNames('book-status', {
    unavailable: !available,
    available,
  });

  const availableText = available ? 'Доступна' : 'На руках';

  return (
    <div className="book">
      <img src={picture} alt="обложка книги" className="book-art" />
      <h3 className="book-title">{title}</h3>
      <div className={statusClass}>{availableText}</div>
      <button type="button" className="book-button">Подробнее</button>
    </div>
  );
}
