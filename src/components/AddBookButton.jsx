import React from 'react';
import Icon from './ui/Icon';
import Button from './ui/Button';

function RightIcon() {
  return <Icon name="plus" size="small" />;
}

function AddBookButton({ onClick, type = 'button', size = 'big' }) {
  return (
    <Button RightIcon={RightIcon} onClick={onClick} type={type} className="add-book" size={size}>Добавить книгу</Button>
  );
}

export default AddBookButton;
