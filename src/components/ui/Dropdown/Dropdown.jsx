/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  DropDown, List, Li,
} from './Dropdown.styled';

export default function Dropdown({ Icon, options, onClick }) {
  const [active, setActive] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setActive(e.target.textContent);

    onClick(e.target.textContent);
  };

  const handleChangeOpen = () => setIsOpen(!isOpen);

  return (
    <DropDown>
      <Icon
        onClick={handleChangeOpen}
      />
      <List isOpen={isOpen}>
        {options.map((option) => (
          <Li onClick={handleClick} isactive={active === option}>{option}</Li>
        ))}
      </List>
    </DropDown>
  );
}
