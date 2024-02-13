import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setActive } from '../slices/modalSlice';
import { fetchOneBook } from '../slices/booksSlice';
import constants from '../constants';
import Icon from '../components/Icon';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  color: white;

  text-align: start;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  justify-content: space-between;
  padding-top: 10px;

  min-height: 600px;
`;

const Art = styled.img`
  height: max-content;
  width: 300px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const JustifyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
`;

const Title = styled.h2`
  font-weight: normal;
`;

const StatusRow = styled.div`
  display: flex;
  gap: 5px;
`;

const Status = styled.div`
  width: 135px;

  text-align: center;
`;

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

  return (
    <Wrapper className="main">
      <Art src={data.pictureLink} alt="book art" />
      <Column>
        <Group>
          <JustifyRow>
            <Title>{data.title}</Title>
            <div>
              <button type="button" className="svgButton" onClick={handleEditBook} id="edit"><Icon name="edit" width="18px" /></button>
              <button type="button" className="svgButton" onClick={handleDeleteBook} id="delete"><Icon name="delete" width="18px" /></button>
            </div>
          </JustifyRow>
          <p>{data.description}</p>
        </Group>

        <Group>
          <StatusRow>
            <Status className={statusClass}>{availableText}</Status>
            <button type="button" className="bookpage-btn" onClick={handleChangeAvailability}>Изменить доступность</button>
          </StatusRow>
          <p>{pText}</p>
          <p>{whoFavoritedText}</p>
        </Group>
      </Column>
    </Wrapper>
  );
}
