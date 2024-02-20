import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  DropDown, SettingsIcon, List, Li,
} from './Dropdown.styled';
import constants from '../../constants';
import { setShownList } from '../../slices/booksSlice';

export default function Dropdown() {
  const [active, setActive] = useState('Все жанры');
  const [isOpen, setIsOpen] = useState(false);
  const { list } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    setActive(e.target.textContent);

    if (e.target.textContent === 'Все жанры') {
      dispatch(setShownList([]));
      return;
    }

    const newList = list.filter((book) => book.genre === e.target.textContent);
    const result = newList.length > 0 ? newList.map((book) => book.id) : null;

    dispatch(setShownList(result));
  };

  const handleChangeOpen = () => setIsOpen(!isOpen);

  return (
    <DropDown>
      <SettingsIcon
        onClick={handleChangeOpen}
        variant={constants.ICON_WITH_BACKGROUND}
        name="settings"
        size="big_1"
        bg="var(--gray-500)"
        color="var(--gray-300)"
      />
      <List isOpen={isOpen}>
        <Li onClick={handleClick} isactive={active === 'Все жанры'}>Все жанры</Li>
        <Li onClick={handleClick} isactive={active === 'Роман'}>Роман</Li>
        <Li onClick={handleClick} isactive={active === 'Фэнтези'}>Фэнтези</Li>
        <Li onClick={handleClick} isactive={active === 'Детектив'}>Детектив</Li>
        <Li onClick={handleClick} isactive={active === 'Драма'}>Драма</Li>
        <Li onClick={handleClick} isactive={active === 'Проза'}>Проза</Li>
      </List>
    </DropDown>
  );
}
