import React from "react";
import "./productCard.css";

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{data.title}</h3>
        <h4 className="product-price-rating">
          Price: ${data.price}{" "}
          <span style={{ marginLeft: "20px" }}>⭐{data.rating}</span>
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
