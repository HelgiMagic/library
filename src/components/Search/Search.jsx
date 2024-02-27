import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, SettingsIcon } from './Search.styled';
import Input from '../ui/Input';
import constants from '../../constants';
import { filterByTitleAndAuthor } from '../../slices/booksSlice';

let timeoutId = null; // To store the timeout ID

export default function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      dispatch(filterByTitleAndAuthor(inputValue));
    }, 300);
  };

  return (
    <Wrapper>
      <Input height="50px" placeholder="Введите название или автора" value={value} onInput={handleInput} />
      <SettingsIcon
        variant={constants.ICON_WITH_BACKGROUND}
        name="settings"
        size="big_1"
        bg="var(--gray-500)"
        color="var(--gray-300)"
      />
    </Wrapper>
  );
}
