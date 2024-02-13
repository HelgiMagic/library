import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { changeBook } from '../slices/booksSlice';
import constants from '../constants';

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 250px;
  padding: 20px;

  background-color: #262626;

  border-radius: var(--book-radius);
`;

const Title = styled.h3`
  padding: 2px 0;
  color: white;

  font-size: 18px;
  font-weight: normal;

  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 60px;
`;

const Art = styled.img`
  border-radius: var(--book-radius);
  object-fit: cover;
  max-height: 315px;
`;

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
    <BookWrapper>
      <Art src={pictureLink} alt="обложка книги" className="book-art" />
      <Title>{title}</Title>
      <div className="book-row">
        <div className={statusClass}>{availableText}</div>
        <button type="button" onClick={handleFavoriteClick} className={favoriteClass}><img src="/favorite.svg" alt="favorites" /></button>
      </div>
      <Link to={link} className="book-link">Подробнее</Link>
    </BookWrapper>
  );
}
