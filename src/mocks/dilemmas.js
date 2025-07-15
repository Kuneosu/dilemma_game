export const mockDilemmas = [
  {
    id: 1,
    title: "자율주행차의 선택",
    scenario: `당신은 자율주행차를 개발하는 엔지니어입니다. 
    
차량이 피할 수 없는 사고 상황에 직면했을 때의 알고리즘을 설계해야 합니다. 

**상황**: 브레이크가 고장난 자율주행차가 두 가지 선택지에 직면했습니다.
- **선택지 A**: 직진하여 횡단보도를 건너는 5명의 행인을 충돌시킬 가능성
- **선택지 B**: 핸들을 꺾어 인도로 돌진하여 1명의 행인을 충돌시킬 가능성

어떤 알고리즘을 선택하시겠습니까?`,
    choices: [
      {
        id: 'A',
        text: '직진 (5명 위험)',
        description: '현재 진행 방향을 유지하여 5명의 행인이 위험에 처함'
      },
      {
        id: 'B', 
        text: '인도로 회피 (1명 위험)',
        description: '의도적으로 방향을 바꿔 1명의 행인이 위험에 처함'
      }
    ],
    ethicalTheories: ['utilitarianism', 'deontology', 'virtue_ethics'],
    difficulty: 'medium'
  },
  {
    id: 2,
    title: "의료진의 딜레마",
    scenario: `당신은 응급실 의사입니다. 

병원에 중요한 장기 이식용 장기가 부족한 상황에서 다음과 같은 상황이 발생했습니다.

**상황**: 
- 한 명의 건강한 환자가 경미한 수술을 위해 병원에 왔습니다.
- 동시에 5명의 환자가 각각 다른 장기 부전으로 생명이 위험한 상태입니다.
- 건강한 환자의 장기를 적출하면 5명의 생명을 구할 수 있습니다.

어떻게 하시겠습니까?`,
    choices: [
      {
        id: 'A',
        text: '건강한 환자를 그대로 두기',
        description: '1명은 안전하지만 5명이 사망할 가능성'
      },
      {
        id: 'B',
        text: '건강한 환자의 장기를 적출',
        description: '1명을 희생하여 5명의 생명을 구함'
      }
    ],
    ethicalTheories: ['utilitarianism', 'deontology', 'rights_theory'],
    difficulty: 'hard'
  },
  {
    id: 3,
    title: "거짓말의 윤리",
    scenario: `당신은 2차 대전 중 나치 독일에 살고 있는 시민입니다.

**상황**: 
- 당신의 집 지하실에 유대인 가족이 숨어있습니다.
- 나치 군인이 집에 와서 "이 집에 유대인이 숨어있느냐?"고 직접 물어봅니다.
- 진실을 말하면 숨어있는 가족이 체포되어 생명을 잃을 것입니다.

어떻게 대답하시겠습니까?`,
    choices: [
      {
        id: 'A',
        text: '진실을 말한다',
        description: '거짓말을 하지 않지만 무고한 생명이 위험해짐'
      },
      {
        id: 'B',
        text: '거짓말을 한다',
        description: '생명을 구하지만 거짓말이라는 도덕적 원칙을 위반함'
      }
    ],
    ethicalTheories: ['deontology', 'consequentialism', 'virtue_ethics'],
    difficulty: 'hard'
  }
];

export const getRandomDilemma = () => {
  const randomIndex = Math.floor(Math.random() * mockDilemmas.length);
  return mockDilemmas[randomIndex];
};

export const getDilemmaById = (id) => {
  return mockDilemmas.find(dilemma => dilemma.id === id);
};