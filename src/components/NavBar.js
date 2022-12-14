import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  const closeNav = () => {
    setClick(false);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeNav}>
            <span className="logo-name">Plant Doctor</span>
            <FaSeedling />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/chatbot" className="nav-links" onClick={handleClick}>
                Chatbot
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sensor" className="nav-links" onClick={handleClick}>
                Sensor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
