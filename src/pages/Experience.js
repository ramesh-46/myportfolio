// Experience.js
import React from 'react';
import './Experience.css'; // Importing external CSS for styling

const Experience = () => {
  return (
    <div className="container">
      {/* Left part: 40% width */}
      <div className="left-container">
        <h2>Professional Experience</h2>
        <ul className="experience-list">
          <li>
            <p className="experience-text">
              ➤ I have hands-on experience developing projects using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Python</strong>.
            </p>
          </li>
          <li>
            <p className="experience-text">
              ➤ Successfully built a <strong>Wikipedia Application</strong>, integrating frontend and backend technologies to create an interactive user experience.
            </p>
          </li>
          <li>
            <p className="experience-text">
              ➤ Developed a <strong>NASA Data Fetcher</strong> application using NASA APIs to retrieve, display, and dynamically visualize space data.
            </p>
          </li>
          <li>
            <p className="experience-text">
              ➤ My skills include designing responsive web applications, implementing efficient backend solutions, and working with REST APIs for data-driven projects.
            </p>
          </li>
        </ul>
      </div>
      {/* Right part: 60% width with animation */}
      <div className="right-container">
        <div className="cube-container">
          <div className="cube">
            <div style={{ '--x': -1, '--y': 0 }}>
              <span style={{ '--i': 3 }}></span>
              <span style={{ '--i': 2 }}></span>
              <span style={{ '--i': 1 }}></span>
            </div>
            <div style={{ '--x': 0, '--y': 0 }}>
              <span style={{ '--i': 3 }}></span>
              <span style={{ '--i': 2 }}></span>
              <span style={{ '--i': 1 }}></span>
            </div>
            <div style={{ '--x': 1, '--y': 0 }}>
              <span style={{ '--i': 3 }}></span>
              <span style={{ '--i': 2 }}></span>
              <span style={{ '--i': 1 }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
