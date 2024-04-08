import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>
            &copy; Copyright {new Date().getFullYear()} SmartShop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
