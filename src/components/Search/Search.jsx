import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, SettingsIcon } from './Search.styled';
import Input from '../ui/Input';
import { changeFilterObject } from '../../slices/booksSlice';
import Dropdown from '../ui/Dropdown';
import constants from '../../constants';

let timeoutId = null;

function Icon({ onClick }) {
  return (
    <SettingsIcon
      variant={constants.ICON_WITH_BACKGROUND}
      name="settings"
      size="big_1"
      bg="var(--gray-500)"
      color="var(--gray-300)"
      onClick={onClick}
    />
  );
}

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

  const handleDropdownClick = (genreText) => {
    dispatch(changeFilterObject({ genre: genreText }));
  };

  const dropdownOptions = [
    'Все жанры',
    'Роман',
    'Фэнтези',
    'Детектив',
    'Драма',
    'Проза',
  ];

  return (
    <Wrapper>
      <Input height="50px" placeholder="Введите название или автора" value={value} onInput={handleInput} />
      <Dropdown Icon={Icon} options={dropdownOptions} onClick={handleDropdownClick} />
    </Wrapper>
  );
}
