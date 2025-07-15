import React from 'react';
import { Link } from 'react-router-dom';
import GameLayout from '../components/GameLayout';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <GameLayout currentStep="about">
      <div className="about-page">
        <div className="about-header">
          <h1>딜레마 게임 소개</h1>
          <p className="about-subtitle">AI와 함께 탐구하는 윤리적 사고의 세계</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>🎨 게임의 탄생 배경</h2>
            <div className="content-box">
              <p>
                현대 사회는 기술 발전과 함께 더욱 복잡한 윤리적 딜레마에 직면하고 있습니다. 
                자율주행차의 윤리, 인공지능의 판단, 의료 자원 배분 등 과거에는 상상할 수 없었던 
                새로운 도덕적 문제들이 우리 앞에 놓여 있습니다.
              </p>
              <p>
                딜레마 게임은 이러한 복잡한 윤리적 상황에서 논리적이고 일관된 사고를 할 수 있는 
                능력을 기르기 위해 만들어졌습니다. 게임을 통해 다양한 윤리 이론을 실제 상황에 
                적용해보고, AI와의 대화를 통해 자신의 도덕적 사고를 점검해볼 수 있습니다.
              </p>
            </div>
          </section>

          <section className="about-section">
            <h2>🎯 교육적 목표</h2>
            <div className="goals-grid">
              <div className="goal-card">
                <div className="goal-icon">🧠</div>
                <h3>비판적 사고력</h3>
                <p>복잡한 상황을 다각도로 분석하고 논리적으로 판단하는 능력을 기릅니다.</p>
              </div>
              
              <div className="goal-card">
                <div className="goal-icon">📚</div>
                <h3>윤리 이론 이해</h3>
                <p>고전 철학자들의 윤리 이론을 실제 상황에 적용하며 이해를 깊게 합니다.</p>
              </div>
              
              <div className="goal-card">
                <div className="goal-icon">💬</div>
                <h3>논증 능력</h3>
                <p>자신의 입장을 논리적으로 설명하고 근거를 제시하는 능력을 향상시킵니다.</p>
              </div>
              
              <div className="goal-card">
                <div className="goal-icon">🤝</div>
                <h3>관점의 다양성</h3>
                <p>같은 문제에 대해서도 다양한 윤리적 접근이 가능함을 이해합니다.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🤖 AI 판사 시스템</h2>
            <div className="ai-info">
              <div className="ai-features">
                <h3>AI 판사의 특징</h3>
                <ul>
                  <li><strong>객관적 평가:</strong> 개인적 편견 없이 윤리 이론에 기반한 일관된 판단</li>
                  <li><strong>다양한 관점:</strong> 공리주의, 의무론, 덕윤리학 등 여러 이론적 접근</li>
                  <li><strong>교육적 피드백:</strong> 단순한 정답이 아닌 사고 과정에 대한 분석 제공</li>
                  <li><strong>학습 지원:</strong> 부족한 부분을 구체적으로 지적하고 개선 방향 제시</li>
                </ul>
              </div>

              <div className="ai-disclaimer">
                <h4>⚠️ 중요한 안내</h4>
                <p>
                  AI 판사의 판정은 특정 윤리 이론에 기반한 하나의 관점일 뿐입니다. 
                  윤리적 문제에는 절대적인 정답이 없으며, 다양한 관점과 해석이 가능합니다. 
                  게임의 목적은 정답을 맞히는 것이 아니라, 윤리적 사고 과정을 경험하는 것입니다.
                </p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🏛️ 참고한 철학자들</h2>
            <div className="philosophers-grid">
              <div className="philosopher-card">
                <div className="philosopher-info">
                  <h3>임마누엘 칸트 (1724-1804)</h3>
                  <div className="philosopher-theory">의무론적 윤리학</div>
                  <p>도덕적 행위는 결과가 아닌 의무와 원칙에서 나와야 한다고 주장했습니다.</p>
                </div>
              </div>

              <div className="philosopher-card">
                <div className="philosopher-info">
                  <h3>존 스튜어트 밀 (1806-1873)</h3>
                  <div className="philosopher-theory">공리주의</div>
                  <p>최대 다수의 최대 행복을 추구하는 것이 도덕적으로 옳다고 보았습니다.</p>
                </div>
              </div>

              <div className="philosopher-card">
                <div className="philosopher-info">
                  <h3>아리스토텔레스 (384-322 BC)</h3>
                  <div className="philosopher-theory">덕 윤리학</div>
                  <p>인간의 덕성과 성품이 윤리적 행동의 기초라고 생각했습니다.</p>
                </div>
              </div>

              <div className="philosopher-card">
                <div className="philosopher-info">
                  <h3>존 로크 (1632-1704)</h3>
                  <div className="philosopher-theory">자연권 이론</div>
                  <p>개인의 자연권과 기본권은 누구도 침해할 수 없다고 주장했습니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>🎮 게임 활용 방안</h2>
            <div className="usage-scenarios">
              <div className="scenario">
                <h3>📖 개인 학습</h3>
                <p>윤리학에 관심 있는 개인이 재미있게 철학적 사고를 경험할 수 있습니다.</p>
              </div>
              
              <div className="scenario">
                <h3>🏫 교육 현장</h3>
                <p>철학, 윤리학, 사회 수업에서 토론의 출발점으로 활용할 수 있습니다.</p>
              </div>
              
              <div className="scenario">
                <h3>👥 그룹 토론</h3>
                <p>친구나 동료와 함께 플레이하며 서로의 생각을 나누는 도구로 사용할 수 있습니다.</p>
              </div>
              
              <div className="scenario">
                <h3>🧠 사고 훈련</h3>
                <p>논리적 사고와 논증 능력을 기르는 훈련 도구로 활용할 수 있습니다.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="about-actions">
          <Link to="/game" className="btn btn-primary btn-large">
            지금 바로 게임해보기! 🎮
          </Link>
          <Link to="/how-to-play" className="btn btn-secondary">
            게임 방법 먼저 보기
          </Link>
        </div>
      </div>
    </GameLayout>
  );
};

export default AboutPage;