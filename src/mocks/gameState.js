export const initialGameState = {
  currentStep: 'start', // 'start', 'dilemma', 'choice', 'argument', 'judgment', 'result'
  currentDilemma: null,
  userChoice: null,
  userArgument: '',
  aiJudgment: null,
  selectedTheory: null,
  gameHistory: [],
  score: 0,
  round: 0,
  maxRounds: 3
};

export const gameSteps = {
  START: 'start',
  DILEMMA: 'dilemma', 
  CHOICE: 'choice',
  ARGUMENT: 'argument',
  JUDGMENT: 'judgment',
  RESULT: 'result'
};

export const mockGameSession = {
  sessionId: 'game_session_001',
  startTime: new Date().toISOString(),
  rounds: [
    {
      round: 1,
      dilemmaId: 1,
      userChoice: 'B',
      userArgument: '더 적은 수의 피해자를 선택하는 것이 합리적입니다.',
      aiTheory: 'utilitarianism',
      aiJudgment: 'agree',
      score: 85,
      completedAt: new Date().toISOString()
    }
  ],
  totalScore: 85,
  status: 'in_progress' // 'in_progress', 'completed'
};

export const createNewGameSession = () => ({
  sessionId: `game_session_${Date.now()}`,
  startTime: new Date().toISOString(),
  rounds: [],
  totalScore: 0,
  status: 'in_progress'
});