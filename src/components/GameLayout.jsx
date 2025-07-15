import React from 'react';
import './GameLayout.css';

const GameLayout = ({ children, currentStep, round, maxRounds }) => {
  return (
    <div className="game-layout">
      <header className="game-header">
        <h1 className="game-title">딜레마 게임</h1>
        {round > 0 && (
          <div className="game-progress">
            <span className="round-indicator">
              라운드 {round} / {maxRounds}
            </span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(round / maxRounds) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </header>

      <main className="game-content">
        <div className="content-container">
          {children}
        </div>
      </main>

      <footer className="game-footer">
        <div className="step-indicator">
          <span className="current-step">{getStepDisplay(currentStep)}</span>
        </div>
      </footer>
    </div>
  );
};

const getStepDisplay = (step) => {
  const stepLabels = {
    start: '게임 시작',
    dilemma: '딜레마 제시',
    choice: '선택하기',
    argument: '논증하기', 
    judgment: 'AI 판결',
    result: '결과 확인'
  };
  return stepLabels[step] || step;
};

export default GameLayout;