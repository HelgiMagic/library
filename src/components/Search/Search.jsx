import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from './Search.styled';
import Input from '../ui/Input';
import { changeFilterObject } from '../../slices/booksSlice';
import Dropdown from '../Dropdown';

let timeoutId = null;

export default function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      dispatch(changeFilterObject({ titleAndAuthor: inputValue }));
    }, 300);
  };

  return (
    <Wrapper>
      <Input height="50px" placeholder="Введите название или автора" value={value} onInput={handleInput} />
      <Dropdown />
    </Wrapper>
  );
}
