import React from "react";
import './Banner.css'

const Banner = (props) => {
  const { className, title, desc } = props;
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Banner;
