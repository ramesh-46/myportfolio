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

  // Common Icon Styles
  const iconStyle = {
    fontSize: '40px',
    margin: '0 20px',
    transition: 'transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
    display: 'inline-block',
  };

  // Social Icon Styles with Animations
  const socialIconBase = {
    ...iconStyle,
    color: '#ddd', // Neutral color for unhovered state
  };

  const linkedinStyle = {
    ...socialIconBase,
    color: '#0A66C2', // LinkedIn Blue
    textShadow: '0px 0px 12px rgba(10, 102, 194, 0.9)',
  };
  const linkedinHoverStyle = {
    ...linkedinStyle,
    transform: 'scale(1.2)', // Increase scale on hover
    color: '#0077b5',
    boxShadow: '0px 0px 20px rgba(0, 119, 181, 0.9)',
  };

  const twitterStyle = {
    ...socialIconBase,
    color: '#1DA1F2', // Twitter Blue
    textShadow: '0px 0px 12px rgba(29, 161, 242, 0.9)',
  };
  const twitterHoverStyle = {
    ...twitterStyle,
    transform: 'scale(1.2)',
    color: '#1991e6',
    boxShadow: '0px 0px 20px rgba(25, 145, 230, 0.9)',
  };

  const githubStyle = {
    ...socialIconBase,
    color: '#333', // GitHub Dark Gray
    textShadow: '0px 0px 12px rgba(51, 51, 51, 0.9)',
  };
  const githubHoverStyle = {
    ...githubStyle,
    transform: 'scale(1.2)',
    color: '#6e5494', // GitHub Purple
    boxShadow: '0px 0px 20px rgba(110, 84, 148, 0.9)',
  };

  const instagramStyle = {
    ...socialIconBase,
    color: '#E4405F', // Instagram Pink
    textShadow: '0px 0px 12px rgba(228, 64, 95, 0.9)',
  };
  const instagramHoverStyle = {
    ...instagramStyle,
    transform: 'scale(1.2)',
    color: '#d2306c', // Instagram Red-Pink
    boxShadow: '0px 0px 20px rgba(210, 48, 108, 0.9)',
  };

  // Contact Link Styles with Animations
  const contactLinkStyle = {
    color: '#fff', // White for readability
    fontWeight: 'bold',
    transition: 'color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease',
    fontSize: '18px',
    textDecoration: 'none', // Remove underline
  };
  const contactLinkHoverStyle = {
    ...contactLinkStyle,
    color: '#FF9800', // Orange on hover
    transform: 'scale(1.1)',
    textShadow: '0px 0px 10px rgba(255, 152, 0, 0.9)',
  };

  // Button Style with Animations
  const buttonStyle = {
    padding: '12px 25px',
    backgroundColor: '#4CAF50', // Green color
    // ... (previous code)

    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    border: 'none', // Remove default button border
    cursor: 'pointer', // Indicate it's clickable
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#45a049', // Darker green on hover
    transform: 'scale(1.05)', // Subtle scale on hover
    boxShadow: '0px 0px 10px rgba(76, 175, 80, 0.5)',
  };

  return (
    <div className="full-screen-container">
      <div className={`laptop-animation ${isHovered ? 'active' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="laptop">
          <div className="screen">
            <div className="screen-content"> {/* Added a container for better layout */}
              <h1 className="screen-header-title" style={{ fontSize: '3em', fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 4px #000' }}>
                RAMESH SURA
              </h1>
              <h2 className="screen-header-subtitle" style={{ fontSize: '1.5em', color: '#eee', marginBottom: '20px' }}>
                Full Stack Developer
              </h2>

              <div className="screen-social-links" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={linkedinStyle} onMouseEnter={(e) => (e.target.style = linkedinHoverStyle)} onMouseLeave={(e) => (e.target.style = linkedinStyle)}>
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={twitterStyle} onMouseEnter={(e) => (e.target.style = twitterHoverStyle)} onMouseLeave={(e) => (e.target.style = twitterStyle)}>
                  <FaTwitter />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={githubStyle} onMouseEnter={(e) => (e.target.style = githubHoverStyle)} onMouseLeave={(e) => (e.target.style = githubStyle)}>
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/ramesh_sura46?igsh=bGF2a2phcTk3d3Yz" target="_blank" rel="noopener noreferrer" style={instagramStyle} onMouseEnter={(e) => (e.target.style = instagramHoverStyle)} onMouseLeave={(e) => (e.target.style = instagramStyle)}>
                  <FaInstagram />
                </a>
              </div>

              <div className="screen-contact-info" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a href="tel:+919550354436" className="contact-link" style={contactLinkStyle} onMouseEnter={(e) => (e.target.style = contactLinkHoverStyle)} onMouseLeave={(e) => (e.target.style = contactLinkStyle)}>
                  📞 +91 9550354436
                </a><br />
                <a href="mailto:suraramesh46@gmail.com" className="contact-link" style={contactLinkStyle} onMouseEnter={(e) => (e.target.style = contactLinkHoverStyle)} onMouseLeave={(e) => (e.target.style = contactLinkStyle)}>
                  ✉️ suraramesh46@gmail.com
                </a>
              </div>

              <div className="screen-download-button-container" style={{ textAlign: 'center' }}>
                <a href="/Rameshresume2025latest.pdf" download="Ramesh_Resume.pdf" className="screen-download-button" style={buttonStyle} onMouseEnter={(e) => (e.target.style = buttonHoverStyle)} onMouseLeave={(e) => (e.target.style = buttonStyle)}>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="keyboard"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;