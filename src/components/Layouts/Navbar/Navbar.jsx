import React, { useState } from "react";
import "./Navbar.css";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav>
        <div className="navbar-left">
          <Link to="/" className="shop-name">
            SmartShop
          </Link>
        </div>
        {/* //nav Items for desktop */}
        <div className="navbar-right">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faqs">Faqs</NavLink>
        </div>

        {/* mobile menu btn for mobile device */}
        <div className="mobile-navbar-right">
          <button onClick={toggleMenu} className="menu-button">
            {isMenuOpen ? (
              <FaXmark className="close-button-icon" />
            ) : (
              <FaBars className="menu-button-icon" />
            )}
          </button>
        </div>

        {/* menu Items for mobile device */}
        <div className={`${isMenuOpen ? 'menu-list-show':'menu-list-hidden'}`}>
          <NavLink onClick={toggleMenu} to="/">Products</NavLink>
          <NavLink onClick={toggleMenu} to="/about">About</NavLink>
          <NavLink onClick={toggleMenu} to="/faqs">Faqs</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
