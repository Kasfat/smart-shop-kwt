import React, { useEffect, useState } from "react";
import './Products.css'
import ApiData from "../../services/ProductApi";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const [productsData, setProductaData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
  }, []);

  return (
    <div className="product-section">
        <div className="product-head">
          <h1>Products List</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        {isLoading ? ( 
        <div style={{height:'100vh', textAlign:'center', marginTop:'30px'}}>Loading...</div>
      ) : isError ? ( 
        <div>Error: {isError}</div>
      ) : (
        <div className="product-list">
          <ProductCard productsData={productsData}/>
        </div>
      )}
    </div>
  );
};

export default Products;
