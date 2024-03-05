import React from 'react';
import Icon from '../ui/Icon';
import GreenButton from './AddBookButton.styled';

function RightIcon() {
  return <Icon name="plus" size="16px" />;
}

function AddBookButton({ onClick, type = 'button', size = 'big' }) {
  return (
    <GreenButton RightIcon={RightIcon} type={type} className="add-book" size={size} onClick={onClick}>Добавить книгу</GreenButton>
  );
}

export default AddBookButton;
