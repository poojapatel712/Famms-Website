import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass, FaCartShopping, FaBars, FaXmark, FaCaretDown } from "react-icons/fa6";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="header-main">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo-image">
            <img src="assets/image/logo.jpg" alt="Famms Logo" />
          </div>

          {/* Mobile Toggle Icon */}
          <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </div>

          {/* Navigation Menu */}
          <nav className={`menu ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              
              <li className="has-submenu">
                <Link to="#" onClick={(e) => { e.preventDefault(); setIsSubMenuOpen(!isSubMenuOpen); }}>
                  Pages <FaCaretDown className="caret" />
                </Link>
                <ul className={`submenu ${isSubMenuOpen ? "submenu-active" : ""}`}>
                  <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                  <li><Link to="/testimonial" onClick={() => setIsMobileMenuOpen(false)}>Testimonial</Link></li>
                </ul>
              </li>

              <li><Link to="/product" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
              <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
              
              {/* Icons inside mobile menu for 330px layout */}
              <li className="mobile-icons">
                 <FaCartShopping className="icon" />
                 <FaMagnifyingGlass className="icon" />
              </li>
            </ul>
          </nav>

          {/* Desktop Icons */}
          <div className="header-icon desktop-only">
            <FaCartShopping className="cart" />
            <FaMagnifyingGlass className="cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;