import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ handlePageChange, limit, productsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(productsData.total / limit);
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
            onClick={() => {
              handlePageChange(pageNumber);
              setCurrentPage(pageNumber);
            }}
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
          onClick={() => {
            handlePageChange(currentPage - 1);
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      <div className="pagination-number">{renderPaginationLink()}</div>
      <li>
        <button
          onClick={() => {
            handlePageChange(currentPage + 1);
            setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
