import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../routes';
import { setActive, setActiveElemId } from '../slices/modalSlice';
import { addBook } from '../slices/booksSlice';

export default function BookPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.books.list).find((book) => book.id === id);
  useEffect(() => {
    if (data !== undefined) return;

    const fetchData = async () => {
      const response = await axios.get(routes.certain(id));

      dispatch(addBook(response.data));
    };

    fetchData();
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
    dispatch(setActive('editAvailability'));
    dispatch(setActiveElemId(id));
  };

  return (
    <div className="main bookpage">
      <img src={data.pictureLink} alt="book art" className="bookpage-img" />
      <div className="bookpage-column">
        <div className="gap-column">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>

        <div className="gap-column">
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
