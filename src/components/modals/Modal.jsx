/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import React from 'react';
import ModalAddNewBook from './ModalAddNewBook';
import ModalEditAvailability from './ModalEditAvailability';
import constants from '../../constants';

export default function Modal() {
  const { active, activeElementId } = useSelector((state) => state.modal);

  if (active === constants.MODAL_ADD_BOOK) return <ModalAddNewBook />;
  if (active === constants.MODAL_EDIT_AVAILABILITY) return <ModalEditAvailability id={activeElementId} />;

  return null;
}
