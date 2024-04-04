import { message } from "antd";
import { usePokemonContext } from "../context/PokemonContext";
import "../styles/components/Pagination.css";


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

  // handles page change and validates the input (only numbers between 1 and the total page count are allowed)
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
        {"<<"} {/* Button for first page */}
      </button>
      <button className="pagination-button" onClick={goToPreviousPage}>
        {"<"} {/* Button for previous page */}
      </button>
      <input
        type="text"
        className="pagination-page-input"
        placeholder={currentPage}
        onKeyDown={handlePageChange} //handle page change when Enter key is pressed
        
      />
      <span className="pagination-text">
        {` / ${totalPages}`} {/* Display total number of pages */}
      </span>
      <button className="pagination-button" onClick={goToNextPage}>
        {">"} {/* Button for next page */}
      </button>
      <button className="pagination-button" onClick={goToLastPage}>
        {">>"} {/* Button for last page */}
      </button>
    </div>
  );
};

export default Pagination;
