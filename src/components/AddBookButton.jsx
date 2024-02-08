import React from 'react';

function AddBookButton({ onClick }) {
  return (
    <button type="submit" className="add-book" onClick={onClick}>
      Добавить книгу
      <img src="/plus.svg" alt="" />
    </button>
  );
}

export default AddBookButton;
