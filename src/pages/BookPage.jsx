import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../slices/modalSlice';
import { fetchOneBook } from '../slices/booksSlice';
import constants from '../constants';

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

  return (
    <div className="main bookpage">
      <img src={data.pictureLink} alt="book art" className="bookpage-img" />
      <div className="bookpage-column">
        <div className="gap-column">
          <div className="justify-row">
            <h2>{data.title}</h2>
            <button type="button" className="svgButton edit-btn"><img src="/edit.svg" alt="edit" /></button>
          </div>
          <p>{data.description}</p>
        </div>

        <div className="gap-column">
          <button type="button" className="bookpage-btn">Редактировать</button>
          <div className="bookpage-row">
            <div className={statusClass}>{availableText}</div>
            <button type="button" className="bookpage-btn" onClick={handleChangeAvailability}>Изменить доступность</button>
          </div>
          <p>{pText}</p>
          <p>{whoFavoritedText}</p>
        </div>
      </div>
    </div>
  );
}
