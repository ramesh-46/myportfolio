import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = ({ onNavItemClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Ramesh Sura</h2>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        ☰
      </div>

      {/* Dropdown Menu */}
      <ul className={`navbar-links ${isDropdownOpen ? 'show' : ''}`}>
        <li><Link to="/about" onClick={onNavItemClick}>About</Link></li>
        <li><Link to="/education" onClick={onNavItemClick}>Education</Link></li>
        <li><Link to="/projects" onClick={onNavItemClick}>Projects</Link></li>
        <li><Link to="/experience" onClick={onNavItemClick}>Experience</Link></li>
        <li><Link to="/certification" onClick={onNavItemClick}>Certification</Link></li>
        <li><Link to="/contact" onClick={onNavItemClick}>Contact</Link></li>
        <li><Link to="/game" onClick={onNavItemClick}>Play Game</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
