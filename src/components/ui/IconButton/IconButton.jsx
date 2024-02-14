import React from 'react';
import Icon from '../Icon';
import Button from './IconButton.styled';

const sizes = {
  small: '16px',
  medium: '18px',
  big: '20px',
};

export default function IconButton({
  name, size = 'small', onClick, id,
}) {
  const styles = {
    width: sizes[size], height: sizes[size],
  };

  return <Button type="button" onClick={onClick} id={id} style={styles}><Icon name={name} width={sizes[size]} /></Button>;
}
