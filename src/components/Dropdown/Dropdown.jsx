import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  DropDown, SettingsIcon, List, Li,
} from './Dropdown.styled';
import constants from '../../constants';
import { changeFilterObject } from '../../slices/booksSlice';

export default function Dropdown() {
  const [active, setActive] = useState('Все жанры');
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    setActive(e.target.textContent);

    dispatch(changeFilterObject({ genre: e.target.textContent }));
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
