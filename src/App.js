// src/App.js
import React from 'react';
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
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginTop: '70px' }}> {/* Adjust margin based on navbar height */}
          <Header /> {/* Header will appear on every page */}
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
