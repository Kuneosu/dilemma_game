import React from 'react';
import './GameProgress.css';

const GameProgress = ({ currentRound, maxRounds, totalScore, roundScores }) => {
  const progressPercentage = (currentRound / maxRounds) * 100;
  const averageScore = roundScores.length > 0 ? 
    Math.round(roundScores.reduce((sum, score) => sum + score, 0) / roundScores.length) : 0;

  return (
    <div className="game-progress">
      <div className="progress-header">
        <h3>게임 진행상황</h3>
      </div>

      <div className="progress-stats">
        <div className="stat-item">
          <span className="stat-label">라운드</span>
          <span className="stat-value">{currentRound} / {maxRounds}</span>
        </div>
        
        <div className="stat-item">
          <span className="stat-label">총 점수</span>
          <span className="stat-value">{totalScore}점</span>
        </div>
        
        {roundScores.length > 0 && (
          <div className="stat-item">
            <span className="stat-label">평균 점수</span>
            <span className="stat-value">{averageScore}점</span>
          </div>
        )}
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="progress-text">{Math.round(progressPercentage)}% 완료</span>
      </div>

      {roundScores.length > 0 && (
        <div className="round-history">
          <h4>라운드별 점수</h4>
          <div className="score-history">
            {roundScores.map((score, index) => (
              <div key={index} className="round-score">
                <span className="round-number">R{index + 1}</span>
                <span className="score-bar">
                  <div 
                    className="score-fill" 
                    style={{ width: `${score}%` }}
                  ></div>
                </span>
                <span className="score-number">{score}점</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="performance-indicator">
        <div className="performance-label">현재 성과</div>
        <div className={`performance-badge ${getPerformanceLevel(averageScore)}`}>
          {getPerformanceText(averageScore)}
        </div>
      </div>
    </div>
  );
};

const getPerformanceLevel = (averageScore) => {
  if (averageScore >= 85) return 'excellent';
  if (averageScore >= 70) return 'good';
  if (averageScore >= 55) return 'average';
  return 'needs-improvement';
};

const getPerformanceText = (averageScore) => {
  if (averageScore >= 85) return '🏆 윤리학자';
  if (averageScore >= 70) return '🎯 논리적 사고자';
  if (averageScore >= 55) return '📚 학습자';
  return '🌱 초보자';
};

export default GameProgress;