import React from 'react';
import Icon from './Icon';

function AddBookButton({ onClick }) {
  return (
    <button type="submit" className="add-book" onClick={onClick}>
      Добавить книгу
      <Icon name="plus" width="16px" />
    </button>
  );
}

export default AddBookButton;
