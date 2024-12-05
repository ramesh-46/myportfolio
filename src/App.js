// src/App.js
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certification from './pages/Certification';
import Contact from './pages/Contact';
import PlayGame from './pages/PlayGame';
import './App.css'; // Import your global styles if needed

function App() {
  const contentRef = useRef(null); // Reference for the content section

  const handleNavItemClick = () => {
    // Scroll down to the content section
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <Navbar onNavItemClick={handleNavItemClick} /> {/* Pass handler to Navbar */}
        <Header />
        <div ref={contentRef} style={{ marginTop: '70px' }}> {/* Content starts here */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/game" element={<PlayGame />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
