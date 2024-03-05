import React from 'react';
import Icon from '../Icon';
import Button from './IconButton.styled';
import constants from '../../../constants';

const sizesWithBg = {
  small: '30px',
  medium: '35px',
  big: '40px',
  big_1: '50px',
};

const sizes = {
  small: '16px',
  medium: '18px',
  big: '20px',
  big_1: '22px',
};

export default function IconButton({
  name, size = 'small', onClick, id, variant, bg = 'transparent', type = 'button', color, hoverColor,
}) {
  const finalSize = variant === constants.ICON_WITH_BACKGROUND
    ? sizesWithBg[size]
    : sizes[size];

  return (
    <Button type={type} id={id} size={finalSize} bg={bg} onClick={onClick}>
      <Icon name={name} size={sizes[size]} color={color} hoverColor={hoverColor} />
    </Button>
  );
}
