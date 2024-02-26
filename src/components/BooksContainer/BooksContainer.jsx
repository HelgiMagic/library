import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from './BooksContainer.styled';
import Book from '../Book';
import { fetchBooks } from '../../slices/booksSlice';

export default function BooksContainer() {
  const dispatch = useDispatch();
  const { list, shownList } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(shownList);
  let actualList;
  if (shownList === 'none') actualList = [];
  else if (shownList === 'all') actualList = list;
  else actualList = list.filter(({ id }) => shownList.includes(id));

  const books = actualList.map((data) => <Book key={data.id} data={data} />);

  return (
    <Wrapper>
      {books}
    </Wrapper>
  );
}
