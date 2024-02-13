import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import History from '../History';
import { setActive } from '../../slices/modalSlice';

export default function ModalStatistics({ id }) {
  const dispatch = useDispatch();
  const { statistics } = useSelector((state) => state.books.list).find((elem) => elem.id === id);

  const handleClose = () => {
    dispatch(setActive({ modal: null }));
  };

  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="d-flex first-row">
          <h2>История</h2>
          <button className="svgButton" type="button" onClick={handleClose}>
            <img src="/closeModal.svg" alt="close modal button" />
          </button>
        </div>

        {statistics.map((stat) => <History data={stat} />)}
      </div>
    </>
  );
}
