import { useSelector } from 'react-redux';
import React from 'react';
import ModalAddNewBook from './ModalAddNewBook';
import ModalEditAvailability from './ModalEditAvailability';

export default function Modal() {
  const { active, activeElemId } = useSelector((state) => state.modal);

  if (active === 'addBook') return <ModalAddNewBook />;
  if (active === 'editAvailability') return <ModalEditAvailability id={activeElemId} />;

  return null;
}
