import React, { useState } from 'react';
import { Form } from './Search.styled';
import Input from '../ui/Input';

export default function Search() {
  const [value, setValue] = useState('');

  const handleInput = (e) => setValue(e.target.value);

  return (
    <Form>
      <Input height="50px" placeholder="Поиск" onInput={handleInput} value={value} />
    </Form>
  );
}
