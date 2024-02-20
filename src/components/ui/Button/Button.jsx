/* eslint-disable react/button-has-type */
import React from 'react';
import MyButton from './Button.styled';

const sizes = {
  small: '40px',
  medium: '45px',
  big: '50px',
};

export default function Button({
  LeftIcon = () => null, RightIcon = () => null,
  children, onClick, type = 'button',
  className, size = 'medium',
  color, hoverColor,
}) {
  return (
    <MyButton
      type={type}
      onClick={onClick}
      className={className}
      size={sizes[size]}
      color={color}
      hoverColor={hoverColor}
    >
      <LeftIcon />
      {children}
      <RightIcon />
    </MyButton>
  );
}
