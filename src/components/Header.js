// src/components/Header.js
import React, { useState } from 'react';
import './Header.css'; // Import your CSS file
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [isHovered, setIsHovered] = useState(false); // State to handle hover

  // Functions to handle hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="full-screen-container">
      <div
        className={`laptop-animation ${isHovered ? 'active' : ''}`} // Trigger animation on hover
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="laptop">
          <div className="screen">
            <h1
              className={`screen-header-title ${isHovered ? 'hover-effect' : ''}`} // Use hover-effect here
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              RAMESHH KUMAAR SURA
            </h1>
            <h2 className="screen-header-subtitle">Full Stack Developer</h2>
            <div className="screen-social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon-style" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon-style" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon-style" />
              </a>
              <a href="https://www.instagram.com/rameshh_kumaar_?igsh=bGF2a2phcTk3d3Yz" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon-style" />
              </a>
            </div>
            <div className="screen-contact-info">
              <span>📞 +91 9550354436</span>
              <span>✉️ suraramesh46@gmail.com</span>
            </div>
            <div className="screen-container">
  <a
    href="/resume.txt"
    download
    className={`screen-download-button ${isHovered ? 'button-active' : ''}`}
  >
    Download Resume
  </a>
</div>
          </div>
          <div className="keyboard"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
