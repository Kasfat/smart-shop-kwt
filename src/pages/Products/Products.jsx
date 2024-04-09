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
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

  const getProductsData = async () => {
    try {
      const res = await ApiData.get(`/products?limit=${limit}&skip=${skip}`);
      setProductaData(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, [limit, skip]);

  const handlePageChange = (pageNumber) => {
    setSkip(pageNumber * limit - 20);
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
          <div className="products-card">
            {productsData.products.map((data) => (
              <ProductCard data={data} key={data.id} />
            ))}
          </div>

          <Pagination
            handlePageChange={handlePageChange}
            productsData={productsData}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
