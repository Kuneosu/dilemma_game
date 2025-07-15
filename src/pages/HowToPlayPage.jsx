import React from 'react';
import { Link } from 'react-router-dom';
import GameLayout from '../components/GameLayout';
import './HowToPlayPage.css';

const HowToPlayPage = () => {
  return (
    <GameLayout currentStep="guide">
      <div className="how-to-play-page">
        <div className="guide-header">
          <h1>게임 방법</h1>
          <p className="guide-subtitle">딜레마 게임을 플레이하는 방법을 안내해드립니다.</p>
        </div>

        <div className="guide-content">
          <section className="guide-section">
            <h2>🎯 게임 목표</h2>
            <div className="content-box">
              <p>
                윤리적 딜레마 상황에서 논리적이고 일관된 선택을 하며, 
                다양한 윤리 이론을 통해 도덕적 사고력을 기르는 것이 목표입니다.
              </p>
            </div>
          </section>

          <section className="guide-section">
            <h2>📋 게임 진행 단계</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>딜레마 제시</h3>
                  <p>복잡한 윤리적 상황이 제시됩니다. 상황을 신중히 읽어보세요.</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>선택하기</h3>
                  <p>제시된 선택지 중 하나를 선택합니다. 각 선택지의 결과를 고려해보세요.</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>논증하기</h3>
                  <p>선택한 이유를 논리적으로 설명합니다. 최소 100자 이상 작성해주세요.</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>AI 판결</h3>
                  <p>AI 판사가 윤리 이론에 따라 당신의 선택을 평가하고 점수를 부여합니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <h2>🧠 윤리 이론들</h2>
            <div className="theories-grid">
              <div className="theory-card">
                <h3>공리주의 (Utilitarianism)</h3>
                <div className="theory-author">제레미 벤담, 존 스튜어트 밀</div>
                <p>최대 다수의 최대 행복을 추구합니다. 결과적으로 가장 많은 사람에게 도움이 되는 선택을 옳다고 봅니다.</p>
              </div>

              <div className="theory-card">
                <h3>의무론 (Deontology)</h3>
                <div className="theory-author">임마누엘 칸트</div>
                <p>행동 자체의 도덕적 가치를 중시합니다. 결과와 무관하게 도덕적 의무와 원칙을 따라야 한다고 봅니다.</p>
              </div>

              <div className="theory-card">
                <h3>덕 윤리학 (Virtue Ethics)</h3>
                <div className="theory-author">아리스토텔레스</div>
                <p>인간의 덕성과 성품을 중시합니다. 덕스러운 사람이 할 법한 행동이 무엇인지 고려합니다.</p>
              </div>

              <div className="theory-card">
                <h3>권리 이론 (Rights Theory)</h3>
                <div className="theory-author">존 로크, 로버트 노직</div>
                <p>개인의 기본권과 인권을 최우선으로 합니다. 개인의 권리는 침해될 수 없다고 봅니다.</p>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <h2>💡 좋은 논증을 위한 팁</h2>
            <div className="tips-container">
              <div className="tip-item">
                <span className="tip-icon">🎯</span>
                <div className="tip-content">
                  <h4>명확한 근거 제시</h4>
                  <p>왜 그 선택을 했는지 구체적인 이유를 설명하세요.</p>
                </div>
              </div>

              <div className="tip-item">
                <span className="tip-icon">⚖️</span>
                <div className="tip-content">
                  <h4>윤리적 원칙 언급</h4>
                  <p>어떤 윤리적 가치나 원칙에 기반했는지 밝혀주세요.</p>
                </div>
              </div>

              <div className="tip-item">
                <span className="tip-icon">🔄</span>
                <div className="tip-content">
                  <h4>대안 고려</h4>
                  <p>다른 선택지의 문제점이나 한계를 언급해주세요.</p>
                </div>
              </div>

              <div className="tip-item">
                <span className="tip-icon">🌍</span>
                <div className="tip-content">
                  <h4>결과 예측</h4>
                  <p>선택의 결과와 그것이 왜 더 나은지 설명해주세요.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="guide-section">
            <h2>📊 점수 시스템</h2>
            <div className="scoring-info">
              <div className="score-range">
                <span className="score-badge excellent">90-100점</span>
                <span className="score-description">논리가 매우 탄탄하고 윤리적 사고가 깊습니다.</span>
              </div>
              <div className="score-range">
                <span className="score-badge good">75-89점</span>
                <span className="score-description">좋은 논리적 근거를 제시했습니다.</span>
              </div>
              <div className="score-range">
                <span className="score-badge average">60-74점</span>
                <span className="score-description">기본적인 논리는 있지만 개선이 필요합니다.</span>
              </div>
              <div className="score-range">
                <span className="score-badge needs-improvement">59점 이하</span>
                <span className="score-description">더 깊이 있는 윤리적 사고가 필요합니다.</span>
              </div>
            </div>
          </section>
        </div>

        <div className="guide-actions">
          <Link to="/game" className="btn btn-primary btn-large">
            이제 게임 시작하기! 🚀
          </Link>
          <Link to="/" className="btn btn-secondary">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </GameLayout>
  );
};

export default HowToPlayPage;