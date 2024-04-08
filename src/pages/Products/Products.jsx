import React, { useEffect, useState } from "react";
import "./Products.css";
import ApiData from "../../services/ProductApi";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import Banner from "../../components/Banner/Banner";

const Products = () => {
  const [productsData, setProductaData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productShowPerPage = 10;

  const getProductsData = async () => {
    try {
      const res = await ApiData.get("/products");
      setProductaData(res.data.products);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, [currentPage, productShowPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-section">
      <Banner
        className="product-head"
        title="Products List"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s"
      />
      {isLoading ? (
        <div
          style={{ height: "100vh", textAlign: "center", marginTop: "30px" }}
        >
          Loading...
        </div>
      ) : isError ? (
        <div>Error: {isError}</div>
      ) : (
        <div className="product-list">
          <ProductCard
            productsData={productsData}
            currentPage={currentPage}
            productShowPerPage={productShowPerPage}
          />
          <Pagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            productsData={productsData}
            productShowPerPage={productShowPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
