import React from 'react';
import './DilemmaCard.css';

const DilemmaCard = ({ dilemma, onNext }) => {
  if (!dilemma) return null;

  return (
    <div className="dilemma-card">
      <div className="dilemma-header">
        <h2 className="dilemma-title">{dilemma.title}</h2>
        <span className="difficulty-badge difficulty-{dilemma.difficulty}">
          {getDifficultyLabel(dilemma.difficulty)}
        </span>
      </div>
      
      <div className="dilemma-content">
        <div className="scenario-section">
          <h3>상황</h3>
          <div className="scenario-text">
            {dilemma.scenario.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="dilemma-actions">
        <button 
          className="btn btn-primary btn-large"
          onClick={onNext}
        >
          선택지 확인하기
        </button>
      </div>
    </div>
  );
};

const getDifficultyLabel = (difficulty) => {
  const labels = {
    easy: '쉬움',
    medium: '보통', 
    hard: '어려움'
  };
  return labels[difficulty] || difficulty;
};

export default DilemmaCard;