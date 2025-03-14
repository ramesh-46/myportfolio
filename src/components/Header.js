import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaPhone, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Start laptop animation after loading
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 2500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${isLoading ? 'active' : 'inactive'}`}>
        <div className="loader"></div>
        <h2 className="loading-text">Loading Portfolio</h2>
      </div>


      {/* Main Content with Laptop Animation */}
      <div className="full-screen-container">
        <div className={`laptop-container ${isAnimated ? 'animated' : ''}`}>
          <div className="laptop">
            <div className="screen">
              <div className="screen-content">
                <div className="gradient-background"></div>
                
                <h1 className="name animate-fade-in" style={{ fontSize: "49px" }}>RAMESH SURA</h1>

                <h2 className="title animate-fade-in-delay">FULL STACK DEVELOPER</h2>
                
                <div className="social-icons animate-zoom-in">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
                    <FaGithub />
                  </a>
                  <a href="https://www.instagram.com/rameshzylo?igsh=bGF2a2phcTk3d3Yz" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    <FaInstagram />
                  </a>
                </div><div className="contact-details">
  <a href="tel:+919550354436" className="contact-item animate-slide-in-left">
    <FaPhone style={{ marginRight: "10px" }} />
    <span>+91 9550354436</span>
  </a>
  <a href="mailto:suraramesh46@gmail.com" className="contact-item animate-slide-in-right">
    <FaEnvelope  style={{ marginRight: "10px" }} />
    <span>suraramesh46@gmail.com</span>
  </a>
</div>
<a href={`${process.env.PUBLIC_URL}/Ramesh2025-mar-updated-final-resume.pdf`} 
   download="Ramesh2025-mar-updated-final-resume.pdf"
   className="download-btn animate-pulse">
   <span>Download Resume</span>
   <FaDownload className="download-icon" />
</a>

                
                <div className="skills-showcase">
                  <div className="skill-bubble html">HTML5</div>
                  <div className="skill-bubble css">CSS3</div>
                  <div className="skill-bubble js">JavaScript</div>
                  <div className="skill-bubble react">React</div>
                  <div className="skill-bubble node">Node.js</div>
                  <div className="skill-bubble mongo">MongoDB</div>
                </div>
              </div>
            </div>
            <div className="keyboard">
              <div className="keyboard-lights"></div>
            </div>
            <div className="base"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;