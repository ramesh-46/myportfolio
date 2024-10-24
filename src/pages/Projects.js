import React, { useState } from 'react';
import './Projects.css';

const cardData = [
  { 
    title: 'NASA Data Fetcher', 
    primaryColor: 'rgb(0, 183, 255)', 
    secondaryColor: 'rgb(255, 48, 255)',
    description: 'Accessing real-time data by filtering year and month. Use incognito or other browsers.',
    link: 'https://ramesh-46.github.io/nasadata/', // Link to the project
  },
  { 
    title: 'To-do List', 
    primaryColor: 'rgb(255, 0, 0)', 
    secondaryColor: 'rgb(255, 165, 0)',
    description: 'A task management solution designed to make life easier. Streamlined task management through HTML, CSS, and Bootstrap.',
    link: 'https://todolist46.ccbp.tech', // Corrected link format
  },
  { 
    title: 'Wikipedia Search Application', 
    primaryColor: 'rgb(0, 255, 0)', 
    secondaryColor: 'rgb(0, 0, 255)',
    description: 'Developed a custom Wikipedia search application where users can search and view curated results.',
    link: 'https://mysearchenginee.ccbp.tech', // Corrected link format
  },
  { 
    title: 'Task Manager', 
    primaryColor: 'rgb(255, 255, 0)', 
    secondaryColor: 'rgb(128, 0, 128)',
    description: 'A blockchain-based solution for secure and transparent supply chain management.',
    link: 'https://github.com/ramesh-46/app.git', // Corrected link format
  },
  { 
    title: 'Telegram Bot Backend', 
    primaryColor: 'rgb(0, 255, 255)', 
    secondaryColor: 'rgb(255, 0, 0)',
    description: 'An e-learning platform that adapts to individual learning styles for optimal educational outcomes.',
    link: 'https://example.com/telegram-bot-backend', // Link to the project
  },
  { 
    title: 'Face Analyser', 
    primaryColor: 'rgb(255, 192, 203)', 
    secondaryColor: 'rgb(75, 0, 130)',
    description: 'A virtual reality experience that revolutionizes remote collaboration and team building.',
    link: 'https://example.com/face-analyser', // Link to the project
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <main className="projects-container">
      <h1>Projects</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              '--primary-color': card.primaryColor,
              '--secondary-color': card.secondaryColor,
            }}
            onClick={() => openPopup(card)}
          >
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-button" onClick={closePopup}>&times;</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-project-button"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;
