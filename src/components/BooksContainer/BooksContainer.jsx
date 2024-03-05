import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from './BooksContainer.styled';
import Book from '../Book';
import { fetchBooks } from '../../slices/booksSlice';
import filterBooks from '../../functions/filterBooks';

export default function BooksContainer() {
  const dispatch = useDispatch();
  const { list, filterObject } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const actualList = filterBooks(list, filterObject);
  const books = actualList.map((data) => <Book key={data.id} data={data} />);

  return (
    <Wrapper>
      {books}
    </Wrapper>
  );
}
