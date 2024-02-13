import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Book from './Book';
import { fetchBooks } from '../slices/booksSlice';

const Wrapper = styled.div`
  display: flex;
  gap: 50px;

  flex-wrap: wrap;
`;

export default function BooksContainer() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = list.map((data) => <Book key={data.id} data={data} />);

  return (
    <Wrapper>
      {books}
    </Wrapper>
  );
}
