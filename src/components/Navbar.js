// Navbar.js

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'; 
import logo from './assets/1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <p className="text-xl font-semibold">SAMAWATI SOUNDS</p>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="analytics" smooth={true} duration={500}>
              Analytics
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
