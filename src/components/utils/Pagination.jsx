import React from "react";
import "../../styles/Pagination.css"

const Pagination = ({ currentPage, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
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
    </div>
  );
};

export default Pagination;
