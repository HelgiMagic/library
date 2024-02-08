import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

export default function BooksContainer() {
  const { list } = useSelector((state) => state.books);

  const books = list.map((data) => <Book key={data.id} data={data} />);

  return (
    <div className="books-container">
      {books}
    </div>
  );
}
