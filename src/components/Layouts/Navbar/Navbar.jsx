import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-left">
          <Link to="/" className="shop-name">SmartShop</Link>
        </div>
        <div className="navbar-right">
        <NavLink to="/" >
          Products
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/faqs">
          Faqs
        </NavLink>
        </div>
      
      </nav>
    </>
  );
};

export default Navbar;
