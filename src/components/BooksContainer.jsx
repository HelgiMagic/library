import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../slices/booksSlice';

export default function BooksContainer() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = list.map((data) => <Book key={data.id} data={data} />);

  return (
    <div className="books-container">
      {books}
    </div>
  );
}
