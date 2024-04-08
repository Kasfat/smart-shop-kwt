import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ productsData, currentPage, productShowPerPage }) => {
  const products = productsData.slice(
    (currentPage - 1) * productShowPerPage,
    currentPage * productShowPerPage
  );
  return (
    <div className="products-card">
      {products.map((value, index) => (
        <Link key={index} className="card">
          <div>
            <img src={value.images[0]} alt="" style={{ width: "100%" }} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{value.title}</h3>
            <h4 className="product-price-rating">
              Price: ${value.price}{" "}
              <span style={{ marginLeft: "20px" }}>⭐{value.rating}</span>
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
