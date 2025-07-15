import React, { useState, useEffect } from 'react';
import { ethicalTheories } from '../mocks/judgments';
import './JudgePanel.css';

const JudgePanel = ({ 
  judgment, 
  userChoice, 
  userArgument, 
  onNext,
  isLoading = false 
}) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    if (!isLoading && judgment) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, judgment]);

  if (isLoading) {
    return (
      <div className="judge-panel loading">
        <div className="loading-content">
          <div className="ai-judge-avatar">
            <div className="avatar-image">⚖️</div>
            <div className="thinking-animation">
              <span>.</span><span>.</span><span>.</span>
            </div>
          </div>
          <h3>AI 판사가 판결을 내리고 있습니다...</h3>
          <p>당신의 논리와 윤리 이론을 비교 분석 중입니다.</p>
        </div>
      </div>
    );
  }

  if (!judgment) return null;

  const theory = ethicalTheories[judgment.theory];
  const isAgreement = judgment.choice === userChoice;

  return (
    <div className={`judge-panel ${showAnimation ? 'animate-in' : ''}`}>
      <div className="judge-header">
        <div className="ai-judge-info">
          <div className="judge-avatar">⚖️</div>
          <div className="judge-details">
            <h2>AI 판사의 판결</h2>
            <div className="theory-badge">
              <span className="theory-name">{theory.name}</span>
              <span className="philosopher">({theory.philosopher})</span>
            </div>
          </div>
        </div>
        
        <div className={`agreement-indicator ${isAgreement ? 'agree' : 'disagree'}`}>
          {isAgreement ? '✓ 동의' : '✗ 불일치'}
        </div>
      </div>

      <div className="judgment-content">
        <div className="theory-explanation">
          <h4>적용된 윤리 이론</h4>
          <p className="theory-description">{theory.description}</p>
        </div>

        <div className="verdict-section">
          <h4>판결</h4>
          <div className="verdict-text">
            {judgment.verdict}
          </div>
        </div>

        <div className="reasoning-section">
          <h4>판결 근거</h4>
          <div className="reasoning-content">
            {judgment.reasoning.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="comparison-section">
          <h4>당신의 선택과 비교</h4>
          <div className="comparison-grid">
            <div className="user-position">
              <h5>당신의 선택</h5>
              <p className="choice-text">선택지 {userChoice}</p>
              <div className="argument-preview">
                <p>"{userArgument.substring(0, 150)}..."</p>
              </div>
            </div>
            
            <div className="ai-position">
              <h5>AI 판사의 선택</h5>
              <p className="choice-text">선택지 {judgment.choice}</p>
              <div className={`agreement-status ${isAgreement ? 'agree' : 'disagree'}`}>
                {isAgreement ? 
                  '👏 AI 판사와 같은 선택을 했습니다!' : 
                  '🤔 AI 판사와 다른 선택을 했습니다.'
                }
              </div>
            </div>
          </div>
        </div>

        <div className="score-section">
          <div className="score-display">
            <span className="score-label">이번 라운드 점수</span>
            <span className="score-value">{judgment.score}점</span>
          </div>
          <p className="score-explanation">
            {getScoreExplanation(judgment.score, isAgreement)}
          </p>
        </div>
      </div>

      <div className="judge-actions">
        <button 
          className="btn btn-primary btn-large"
          onClick={onNext}
        >
          다음 라운드로
        </button>
      </div>
    </div>
  );
};

const getScoreExplanation = (score, isAgreement) => {
  if (score >= 90) {
    return isAgreement ? 
      '완벽한 논리! AI 판사와 같은 결론에 도달했습니다.' :
      '훌륭한 논리적 사고! 다른 선택이지만 논리가 탄탄합니다.';
  } else if (score >= 75) {
    return isAgreement ?
      '좋은 선택! AI 판사와 의견이 일치합니다.' :
      '괜찮은 논리입니다. 다른 관점도 고려해보세요.';
  } else if (score >= 60) {
    return '논리에 일부 개선의 여지가 있습니다.';
  } else {
    return '더 깊이 있는 윤리적 사고가 필요합니다.';
  }
};

export default JudgePanel;