import React from 'react';

const Pagination = ({ currentPage, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div>
      <button onClick={onLeftClick} disabled={currentPage === 1}>{'<'}</button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button onClick={onRightClick} disabled={currentPage === totalPages}>{'>'}</button>
    </div>
  );
};

export default Pagination;
