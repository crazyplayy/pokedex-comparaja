import React from "react";
import "../styles/Pagination.css"

const Pagination = ({ currentPage, totalPages, onLeftClick, onRightClick, onClickToFirst, onClickToLast }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-left-button"
        onClick={onClickToFirst}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      <button
        className="pagination-left-button"
        onClick={onLeftClick}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <span className="pagination-text">{`${currentPage} / ${totalPages}`}</span>
      <button
        className="pagination-right-button"
        onClick={onRightClick}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
      <button
        className="pagination-right-button"
        onClick={onClickToLast}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
