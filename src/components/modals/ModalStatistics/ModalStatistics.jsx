import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import History from './History';
import { setActive } from '../../../slices/modalSlice';
import {
  Overlay, Modal, TitleRow,
} from '../Modal.styled';
import IconButton from '../../ui/IconButton';

export default function ModalStatistics({ id }) {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state.books.list).find((elem) => elem.id === id);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));
  };

  return (
    <>
      <Overlay />
      <Modal>
        <TitleRow>
          <h2>Изменить книгу</h2>
          <IconButton name="closeModal" size="big" onClick={handleClose} />
        </TitleRow>

        {statistics.map((stat) => <History data={stat} />)}
      </Modal>
    </>
  );
}
