// src/pages/PlayGame.js
import React from 'react';
import './PlayGame.css'; // Import the CSS file

const PlayGame = () => {
  const handleRedirect = () => {
    window.location.href = 'https://ev.io'; // Redirect to the specified website
  };

  return (
    <div className="play-game-container">
      <h1>Play Game</h1>
      <button className="play-game-button" onClick={handleRedirect}>
        Play Game
      </button>
    </div>
  );
};

export default PlayGame;
