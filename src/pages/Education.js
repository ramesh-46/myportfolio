import React from 'react';
import './Education.css'; // Ensure this file is updated with the new styles

const cardData = [
  { text: 'MSC-Computers 2024 ' },
  { text: 'BSC-Computers-2022' },
  { text: 'INtermediate MPC 2019' },
  { text: 'Highschool10 2017' },
  { text: 'NxtWave  Full stack developer 2024' },
  { text: 'PHD Yet to be' },
];

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="cards-grid">
        {cardData.map((card, index) => (
          <div key={index} className="book">
            <p>{card.text}</p>
            <div className="cover">
              <p>First Devision</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
