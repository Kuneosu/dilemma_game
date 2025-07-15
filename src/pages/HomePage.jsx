import React from 'react';
import { Link } from 'react-router-dom';
import GameLayout from '../components/GameLayout';
import './HomePage.css';

const HomePage = () => {
  return (
    <GameLayout currentStep="start">
      <div className="home-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">딜레마 게임</span>
              <span className="title-subtitle">AI와 함께하는 윤리적 사고 실험</span>
            </h1>
            
            <div className="hero-description">
              <p>
                복잡한 윤리적 딜레마 상황에서 당신만의 선택을 하고, 
                논리적 근거를 제시해보세요.
              </p>
              <p>
                AI 판사가 다양한 윤리 이론을 바탕으로 당신의 선택을 평가합니다.
              </p>
            </div>

            <div className="hero-actions">
              <Link to="/game" className="btn btn-primary btn-large">
                🎮 게임 시작하기
              </Link>
              <Link to="/how-to-play" className="btn btn-secondary btn-large">
                📖 게임 방법 보기
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="ethics-wheel">
              <div className="wheel-center">⚖️</div>
              <div className="wheel-item utilitarianism">공리주의</div>
              <div className="wheel-item deontology">의무론</div>
              <div className="wheel-item virtue">덕윤리</div>
              <div className="wheel-item rights">권리론</div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>게임 특징</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>윤리적 사고력 향상</h3>
              <p>복잡한 도덕적 딜레마를 통해 비판적 사고력을 기릅니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI 판사의 평가</h3>
              <p>다양한 윤리 이론에 기반한 객관적이고 전문적인 피드백을 받습니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>철학 이론 학습</h3>
              <p>칸트, 밀, 아리스토텔레스 등 위대한 철학자들의 이론을 실전에서 경험합니다.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💭</div>
              <h3>논리적 논증</h3>
              <p>자신의 선택에 대한 논리적 근거를 체계적으로 설명하는 능력을 기릅니다.</p>
            </div>
          </div>
        </div>

        <div className="sample-dilemma">
          <h2>예시 딜레마</h2>
          <div className="sample-card">
            <h3>🚗 자율주행차의 윤리</h3>
            <p>
              브레이크가 고장난 자율주행차가 5명의 행인과 1명의 행인 중 
              누구를 위험에 빠뜨릴지 선택해야 하는 상황에서...
            </p>
            <div className="sample-choices">
              <span className="choice-preview">A. 직진 (5명 위험)</span>
              <span className="vs">vs</span>
              <span className="choice-preview">B. 회피 (1명 위험)</span>
            </div>
            <p className="sample-question">당신의 선택은? 그리고 그 이유는?</p>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default HomePage;