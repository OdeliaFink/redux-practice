import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/cakes" className="navbar-item">
          Cakes
        </Link>
        <Link to="/icecream" className="navbar-item">
          Ice Cream
        </Link>
        <Link to="/cart" className="navbar-item">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
