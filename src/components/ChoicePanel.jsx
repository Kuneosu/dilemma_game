import React, { useState } from 'react';
import './ChoicePanel.css';

const ChoicePanel = ({ dilemma, onChoiceSelect, selectedChoice }) => {
  const [hoveredChoice, setHoveredChoice] = useState(null);

  if (!dilemma || !dilemma.choices) return null;

  return (
    <div className="choice-panel">
      <div className="choice-header">
        <h3>당신의 선택은?</h3>
        <p className="choice-instruction">
          아래 선택지 중 하나를 선택해주세요. 선택 후 당신의 논리적 근거를 설명할 기회가 주어집니다.
        </p>
      </div>

      <div className="choices-container">
        {dilemma.choices.map((choice) => (
          <div
            key={choice.id}
            className={`choice-option ${selectedChoice === choice.id ? 'selected' : ''} ${hoveredChoice === choice.id ? 'hovered' : ''}`}
            onClick={() => onChoiceSelect(choice.id)}
            onMouseEnter={() => setHoveredChoice(choice.id)}
            onMouseLeave={() => setHoveredChoice(null)}
          >
            <div className="choice-header-section">
              <div className="choice-label">선택지 {choice.id}</div>
              <div className="choice-text">{choice.text}</div>
            </div>
            
            <div className="choice-description">
              {choice.description}
            </div>

            {selectedChoice === choice.id && (
              <div className="selected-indicator">
                ✓ 선택됨
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedChoice && (
        <div className="choice-confirmation">
          <p className="confirmation-text">
            <strong>선택지 {selectedChoice}</strong>를 선택하셨습니다.
          </p>
          <p className="next-step-hint">
            이제 당신의 선택에 대한 논리적 근거를 설명해주세요.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChoicePanel;