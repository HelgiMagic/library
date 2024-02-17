import React, { useState } from 'react';
import { Form, SearchIcon } from './Search.styled';
import Input from '../ui/Input';
import constants from '../../constants';

export default function Search() {
  const [value, setValue] = useState('');

  const handleInput = (e) => setValue(e.target.value);

  return (
    <Form>
      <Input height="50px" placeholder="Поиск" onInput={handleInput} value={value} />
      <SearchIcon variant={constants.ICON_WITH_BACKGROUND} name="search" size="big_1" bg="var(--gray-500)" />
    </Form>
  );
}
