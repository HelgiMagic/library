import React from 'react';
import BooksContainer from '../components/BooksContainer';
import AddBookButton from '../components/AddBookButton';

export default function MainPage() {
  return (
    <div className="main">
      <AddBookButton />
      <BooksContainer />
    </div>
  );
}
