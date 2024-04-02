import React, { useContext } from "react";
import { message } from "antd";
import "../styles/Pagination.css";
import { usePokemonContext } from "../context/PokemonContext";

const Pagination = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToPreviousPage,
    goToNextPage
  } = usePokemonContext();

  const handlePageChange = (event) => {
    if (event.keyCode === 13 && event.target.value.trim() !== "") {
      const newPage = parseInt(event.target.value, 10);
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        event.target.value = "";
      } else {
        message.error("Invalid page number. Please try a valid number.");
      }
    }
  };

  return (
    <div className="pagination-container">
      <button className="pagination-button" onClick={goToFirstPage}>
        {"<<"}
      </button>
      <button className="pagination-button" onClick={goToPreviousPage}>
        {"<"}
      </button>
      <input
        type="text"
        className="pagination-page-input"
        placeholder={currentPage}
        onKeyDown={handlePageChange}
        
      />
      <span className="pagination-text">
        {` / ${totalPages}`}
      </span>
      <button className="pagination-button" onClick={goToNextPage}>
        {">"}
      </button>
      <button className="pagination-button" onClick={goToLastPage}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
