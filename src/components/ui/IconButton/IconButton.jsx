import React from 'react';
import Icon from '../Icon';
import Button from './IconButton.styled';
import constants from '../../../constants';

const sizes = {
  small: '16px',
  medium: '18px',
  big: '20px',
};

export default function IconButton({
  name, size = 'small', onClick, id, variant, background = 'transparent',
}) {
  const finalSize = variant === constants.ICON_WITH_BACKGROUND
    ? size
    : sizes[size];

  return (
    <Button type="button" onClick={onClick} id={id} size={finalSize} background={background} >
      <Icon name={name} size={sizes[size]} />
    </Button>
  );
}
