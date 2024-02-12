/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import React from 'react';
import ModalAddNewBook from './ModalAddNewBook';
import ModalEditAvailability from './ModalEditAvailability';
import ModalEditBook from './ModalEditBook';
import ModalDeleteBook from './ModalDeleteBook';
import constants from '../../constants';

export default function Modal() {
  const { active, activeElementId } = useSelector((state) => state.modal);

  if (active === constants.MODAL_ADD_BOOK) return <ModalAddNewBook />;
  if (active === constants.MODAL_EDIT_AVAILABILITY) return <ModalEditAvailability id={activeElementId} />;
  if (active === constants.MODAL_EDIT_BOOK) return <ModalEditBook id={activeElementId} />;
  if (active === constants.MODAL_DELETE_BOOK) return <ModalDeleteBook id={activeElementId} />;

  return null;
}
