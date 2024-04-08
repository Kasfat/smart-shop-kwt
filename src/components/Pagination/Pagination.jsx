import React from "react";
import './Pagination.css'

const Pagination = ({
  handlePageChange,
  currentPage,
  productsData,
  productShowPerPage,
}) => {
  const totalPage = Math.ceil(productsData.length / productShowPerPage);
  console.log(totalPage);
  const renderPaginationLink = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a
            className="button"
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      <div className="pagination-number">{renderPaginationLink()}</div>
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
