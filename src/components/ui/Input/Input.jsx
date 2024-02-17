import React from 'react';
import InputWrapper from './Input.styled';

export default function Input({ height = '38px', placeholder }) {
  return (
    <InputWrapper height={height} placeholder={placeholder} />
  );
}
