import React from 'react';

export default function Book({ data }) {
  const { title, picture, available } = data;
  console.log(title);

  console.log(available);
  const bookClass = available ? 'book-status available' : 'book-status unavailable';
  const titleClass = available ? 'book-title available' : 'book-title unavailable';
  const availableText = available ? 'Доступна' : 'На руках';

  return (
    <div className="book">
      <h3 className={titleClass}>{title}</h3>
      <img src={picture} alt="обложка книги" className="book-art" />
      <div className={bookClass}>{availableText}</div>
    </div>
  );
}

//      <button type="button" className="book-button">Подробности</button>
