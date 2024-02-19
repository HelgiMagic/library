import React from 'react';
import InputWrapper from './Input.styled';

export default function Input({
  height = '38px', placeholder, onInput, value,
}) {
  return (
    <InputWrapper height={height} placeholder={placeholder} onInput={onInput} value={value} />
  );
}
