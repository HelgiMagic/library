import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, SettingsIcon } from './Search.styled';
import Input from '../ui/Input';
import constants from '../../constants';
import { filterByTitleAndAuthor } from '../../slices/booksSlice';

export default function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValue(e.target.value);

    dispatch(filterByTitleAndAuthor(e.target.value));
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
