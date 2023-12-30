import * as React from 'react';
import './WinModal.scss';

export function WinModal() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='modal'>
      <div className="modal__text">
        Перемога!
      </div>
      <div className="modal__button" onClick={handleReload}>
        Нова гра
      </div>
    </div>
  );
}