import React from 'react';
import Icon from '../ui/Icon';
import GreenButton from './AddBookButton.styled';

function RightIcon() {
  return <Icon name="plus" size="small" />;
}

function AddBookButton({ onClick, type = 'button', size = 'big' }) {
  return (
    <GreenButton RightIcon={RightIcon} onClick={onClick} type={type} className="add-book" size={size}>Добавить книгу</GreenButton>
  );
}

export default AddBookButton;
