import React, { useState, useEffect } from 'react';
import GameLayout from '../components/GameLayout';
import DilemmaCard from '../components/DilemmaCard';
import ChoicePanel from '../components/ChoicePanel';
import ArgumentForm from '../components/ArgumentForm';
import JudgePanel from '../components/JudgePanel';
import GameProgress from '../components/GameProgress';
import { mockDilemmas, getRandomDilemma } from '../mocks/dilemmas';
import { getJudgmentForDilemma, getRandomEthicalTheory } from '../mocks/judgments';
import { gameSteps } from '../mocks/gameState';
import './GamePage.css';

const GamePage = () => {
  const [gameState, setGameState] = useState({
    currentStep: gameSteps.START,
    round: 0,
    maxRounds: 3,
    currentDilemma: null,
    userChoice: null,
    userArgument: '',
    aiJudgment: null,
    selectedTheory: null,
    roundScores: [],
    totalScore: 0,
    gameHistory: []
  });

  const [isJudging, setIsJudging] = useState(false);

  const startNewGame = () => {
    const dilemma = getRandomDilemma();
    setGameState(prev => ({
      ...prev,
      currentStep: gameSteps.DILEMMA,
      round: 1,
      currentDilemma: dilemma,
      userChoice: null,
      userArgument: '',
      aiJudgment: null,
      selectedTheory: null
    }));
  };

  const proceedToChoice = () => {
    setGameState(prev => ({
      ...prev,
      currentStep: gameSteps.CHOICE
    }));
  };

  const selectChoice = (choiceId) => {
    setGameState(prev => ({
      ...prev,
      userChoice: choiceId,
      currentStep: gameSteps.ARGUMENT
    }));
  };

  const updateArgument = (argument) => {
    setGameState(prev => ({
      ...prev,
      userArgument: argument
    }));
  };

  const submitToJudge = async () => {
    setIsJudging(true);
    setGameState(prev => ({
      ...prev,
      currentStep: gameSteps.JUDGMENT
    }));

    // AI 판결 시뮬레이션 (2-3초 지연)
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const selectedTheory = getRandomEthicalTheory(gameState.currentDilemma.ethicalTheories);
    const judgment = getJudgmentForDilemma(gameState.currentDilemma.id, selectedTheory);
    
    if (judgment) {
      const newScore = judgment.score;
      setGameState(prev => ({
        ...prev,
        aiJudgment: judgment,
        selectedTheory,
        roundScores: [...prev.roundScores, newScore],
        totalScore: prev.totalScore + newScore,
        gameHistory: [...prev.gameHistory, {
          round: prev.round,
          dilemma: prev.currentDilemma,
          userChoice: prev.userChoice,
          userArgument: prev.userArgument,
          aiJudgment: judgment,
          score: newScore
        }]
      }));
    }
    
    setIsJudging(false);
  };

  const proceedToNextRound = () => {
    if (gameState.round >= gameState.maxRounds) {
      setGameState(prev => ({
        ...prev,
        currentStep: gameSteps.RESULT
      }));
    } else {
      const newDilemma = getRandomDilemma();
      setGameState(prev => ({
        ...prev,
        currentStep: gameSteps.DILEMMA,
        round: prev.round + 1,
        currentDilemma: newDilemma,
        userChoice: null,
        userArgument: '',
        aiJudgment: null,
        selectedTheory: null
      }));
    }
  };

  const restartGame = () => {
    setGameState({
      currentStep: gameSteps.START,
      round: 0,
      maxRounds: 3,
      currentDilemma: null,
      userChoice: null,
      userArgument: '',
      aiJudgment: null,
      selectedTheory: null,
      roundScores: [],
      totalScore: 0,
      gameHistory: []
    });
  };

  const renderCurrentStep = () => {
    switch (gameState.currentStep) {
      case gameSteps.START:
        return (
          <div className="game-start">
            <div className="start-content">
              <h2>딜레마 게임에 오신 것을 환영합니다!</h2>
              <div className="game-info">
                <h3>게임 방식</h3>
                <ol>
                  <li>윤리적 딜레마 상황이 제시됩니다</li>
                  <li>제시된 선택지 중 하나를 선택합니다</li>
                  <li>선택한 이유를 논리적으로 설명합니다</li>
                  <li>AI 판사가 윤리 이론에 따라 평가합니다</li>
                  <li>총 {gameState.maxRounds}라운드를 진행합니다</li>
                </ol>
              </div>
              <button 
                className="btn btn-primary btn-large"
                onClick={startNewGame}
              >
                첫 번째 딜레마 시작하기
              </button>
            </div>
          </div>
        );

      case gameSteps.DILEMMA:
        return (
          <DilemmaCard 
            dilemma={gameState.currentDilemma}
            onNext={proceedToChoice}
          />
        );

      case gameSteps.CHOICE:
        return (
          <ChoicePanel
            dilemma={gameState.currentDilemma}
            selectedChoice={gameState.userChoice}
            onChoiceSelect={selectChoice}
          />
        );

      case gameSteps.ARGUMENT:
        return (
          <ArgumentForm
            selectedChoice={gameState.userChoice}
            choiceText={gameState.currentDilemma?.choices.find(c => c.id === gameState.userChoice)?.text}
            argument={gameState.userArgument}
            onArgumentChange={updateArgument}
            onSubmit={submitToJudge}
            isSubmitting={isJudging}
          />
        );

      case gameSteps.JUDGMENT:
        return (
          <JudgePanel
            judgment={gameState.aiJudgment}
            userChoice={gameState.userChoice}
            userArgument={gameState.userArgument}
            onNext={proceedToNextRound}
            isLoading={isJudging}
          />
        );

      case gameSteps.RESULT:
        return (
          <div className="game-result">
            <div className="result-header">
              <h2>🎉 게임 완료!</h2>
              <div className="final-score">
                <span className="score-label">최종 점수</span>
                <span className="score-value">{gameState.totalScore}점</span>
                <span className="score-average">
                  (평균 {Math.round(gameState.totalScore / gameState.maxRounds)}점)
                </span>
              </div>
            </div>

            <div className="result-summary">
              <h3>라운드별 결과</h3>
              <div className="round-results">
                {gameState.gameHistory.map((round, index) => (
                  <div key={index} className="round-result">
                    <div className="round-header">
                      <span className="round-number">라운드 {round.round}</span>
                      <span className="round-score">{round.score}점</span>
                    </div>
                    <div className="round-details">
                      <h4>{round.dilemma.title}</h4>
                      <p>선택: {round.userChoice} | 판정: {round.aiJudgment.theory}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="result-actions">
              <button 
                className="btn btn-primary btn-large"
                onClick={restartGame}
              >
                다시 게임하기
              </button>
            </div>
          </div>
        );

      default:
        return <div>알 수 없는 게임 상태</div>;
    }
  };

  return (
    <GameLayout 
      currentStep={gameState.currentStep}
      round={gameState.round}
      maxRounds={gameState.maxRounds}
    >
      <div className="game-page">
        {gameState.round > 0 && gameState.currentStep !== gameSteps.RESULT && (
          <div className="game-sidebar">
            <GameProgress
              currentRound={gameState.round}
              maxRounds={gameState.maxRounds}
              totalScore={gameState.totalScore}
              roundScores={gameState.roundScores}
            />
          </div>
        )}
        
        <div className="game-main">
          {renderCurrentStep()}
        </div>
      </div>
    </GameLayout>
  );
};

export default GamePage;