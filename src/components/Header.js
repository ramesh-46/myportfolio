import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="full-screen-container">
      <div
        className={`laptop-animation ${isHovered ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="laptop">
          <div className="screen">
            <h1
              className={`screen-header-title ${isHovered ? 'hover-effect' : ''}`}
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
              <span>
                📞 <a href="tel:+919553544436" className="contact-link">+91 9550354436</a>
              </span>
              <span>
                ✉️ <a href="mailto:suraramesh46@gmail.com" className="contact-link">suraramesh46@gmail.com</a>
              </span>
            </div>
            <div className="screen-container">
              <a
                href="/rkluckyresume.pdf"
                download="Ramesh_Resume.pdf"
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
