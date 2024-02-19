import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, SettingsIcon } from './Search.styled';
import Input from '../ui/Input';
import constants from '../../constants';
import { setShownList } from '../../slices/booksSlice';

export default function Search() {
  const [value, setValue] = useState('');
  const { list } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValue(e.target.value);
    if (e.target.value.length === 0) {
      dispatch(setShownList([]));
      return;
    }

    const newBooks = list.filter(({ title, author }) => (
      title.toLowerCase().includes(e.target.value.toLowerCase())
      || author.toLowerCase().includes(e.target.value.toLowerCase())
    ));

    const result = newBooks.length > 0 ? newBooks.map(({ id }) => id) : null;
    dispatch(setShownList(result));
  };

  return (
    <Wrapper>
      <Input height="50px" placeholder="Введите название или автора" onInput={handleInput} value={value} />
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
