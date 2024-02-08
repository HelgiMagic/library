/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import React from 'react';
import ModalAddNewBook from './ModalAddNewBook';
import ModalEditAvailability from './ModalEditAvailability';
import constants from '../../constants';

export default function Modal() {
  const { active, activeElemId } = useSelector((state) => state.modal);

  if (active === constants.modal.addBook) return <ModalAddNewBook />;
  if (active === constants.modal.editAvailability) return <ModalEditAvailability id={activeElemId} />;

  return null;
}
