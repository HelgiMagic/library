/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import React from 'react';
import ModalAddNewBook from './ModalAddNewBook';
import ModalEditAvailability from './ModalEditAvailability';
import ModalEditBook from './ModalEditBook';
import ModalDeleteBook from './ModalDeleteBook';
import ModalStatistics from './ModalStatistics';
import constants from '../../constants';
import './modal.css';

export default function Modal() {
  const { active, activeElementId } = useSelector((state) => state.modal);

  switch (active) {
    case constants.MODAL_ADD_BOOK:
      return <ModalAddNewBook />;

    case constants.MODAL_EDIT_AVAILABILITY:
      return <ModalEditAvailability id={activeElementId} />;

    case constants.MODAL_EDIT_BOOK:
      return <ModalEditBook id={activeElementId} />;

    case constants.MODAL_DELETE_BOOK:
      return <ModalDeleteBook id={activeElementId} />;

    case constants.MODAL_STATISTICS:
      return <ModalStatistics id={activeElementId} />;

    default:
      return null;
  }
}
