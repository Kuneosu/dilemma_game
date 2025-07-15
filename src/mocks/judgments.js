export const ethicalTheories = {
  utilitarianism: {
    name: '공리주의',
    description: '최대 다수의 최대 행복을 추구하는 윤리 이론',
    philosopher: '제레미 벤담, 존 스튜어트 밀'
  },
  deontology: {
    name: '의무론적 윤리학',
    description: '행동의 결과가 아닌 행동 자체의 도덕적 가치를 중시하는 윤리 이론',
    philosopher: '임마누엘 칸트'
  },
  virtue_ethics: {
    name: '덕 윤리학',
    description: '인간의 덕성과 성품을 중시하는 윤리 이론',
    philosopher: '아리스토텔레스'
  },
  consequentialism: {
    name: '결과주의',
    description: '행동의 도덕적 가치를 그 결과로 판단하는 윤리 이론',
    philosopher: '다양한 철학자들'
  },
  rights_theory: {
    name: '권리 이론',
    description: '개인의 기본권과 인권을 최우선으로 하는 윤리 이론',
    philosopher: '존 로크, 로버트 노직'
  }
};

export const mockJudgments = {
  1: { // 자율주행차 딜레마
    utilitarianism: {
      theory: 'utilitarianism',
      choice: 'B',
      reasoning: `공리주의 관점에서 볼 때, 1명의 생명보다 5명의 생명이 더 큰 가치를 가집니다. 
      
      **분석**:
      - 선택지 A: 5명의 피해 = 높은 전체적 피해
      - 선택지 B: 1명의 피해 = 낮은 전체적 피해
      
      따라서 최대 다수의 최대 행복을 위해 인도로 회피하는 것이 윤리적으로 옳습니다.`,
      verdict: '선택지 B (인도로 회피)가 윤리적으로 올바른 선택입니다.',
      score: 85
    },
    deontology: {
      theory: 'deontology',
      choice: 'A',
      reasoning: `칸트의 의무론적 관점에서 볼 때, 의도적으로 한 사람을 해치는 것은 도덕적으로 허용될 수 없습니다.
      
      **분석**:
      - 선택지 A: 의도하지 않은 결과 (도덕적 허용)
      - 선택지 B: 의도적인 해악 (도덕적 금지)
      
      설령 더 많은 사람을 구할 수 있더라도, 의도적으로 무고한 한 사람을 해치는 것은 절대적으로 금지된 행위입니다.`,
      verdict: '선택지 A (직진)가 윤리적으로 올바른 선택입니다.',
      score: 90
    },
    virtue_ethics: {
      theory: 'virtue_ethics',
      choice: 'contextual',
      reasoning: `덕 윤리학 관점에서는 상황의 맥락과 행위자의 성품이 중요합니다.
      
      **분석**:
      엔지니어로서의 덕목을 고려해야 합니다:
      - 신중함: 모든 가능성을 고려했는가?
      - 정의: 공정한 기준을 적용했는가?
      - 용기: 어려운 결정을 내릴 수 있는가?
      
      가장 중요한 것은 충분한 고민과 전문가적 판단을 통해 결정하는 것입니다.`,
      verdict: '맥락을 고려한 신중한 판단이 필요합니다.',
      score: 75
    }
  },
  
  2: { // 의료진 딜레마
    utilitarianism: {
      theory: 'utilitarianism',
      choice: 'B',
      reasoning: `순수한 공리주의 계산으로는 5명의 생명이 1명보다 더 큰 가치를 가집니다.
      
      **분석**:
      - 1명 희생 → 5명 생존 = 순 +4명의 생명
      - 아무것도 하지 않음 → 5명 사망 = 순 -5명의 생명
      
      하지만 이는 의료 윤리와 사회적 신뢰에 대한 심각한 문제를 야기할 수 있습니다.`,
      verdict: '이론적으로는 선택지 B이지만, 실질적 고려사항이 많습니다.',
      score: 60
    },
    deontology: {
      theory: 'deontology',
      choice: 'A',
      reasoning: `칸트의 정언명령에 따르면, 인간을 수단으로 대하는 것은 절대 금지입니다.
      
      **분석**:
      - 건강한 환자를 다른 사람들을 위한 수단으로 사용하는 것은 도덕적으로 허용될 수 없습니다.
      - "살인하지 말라"는 절대적 도덕 법칙을 위반합니다.
      - 설령 더 많은 생명을 구할 수 있더라도, 무고한 사람을 의도적으로 해치는 것은 금지됩니다.
      
      의사로서의 의무는 "해를 끼치지 않는 것"(Do No Harm)입니다.`,
      verdict: '선택지 A (건강한 환자 보호)가 절대적으로 옳습니다.',
      score: 95
    },
    rights_theory: {
      theory: 'rights_theory',
      choice: 'A',
      reasoning: `개인의 기본권, 특히 생명권은 절대적이고 양도할 수 없는 권리입니다.
      
      **분석**:
      - 건강한 환자는 자신의 생명에 대한 절대적 권리를 가집니다.
      - 다른 사람들의 필요가 개인의 기본권을 침해할 수 없습니다.
      - 동의 없이 타인의 생명을 처분할 권한은 누구에게도 없습니다.
      
      권리 이론에서는 개인의 권리가 집단의 이익보다 우선합니다.`,
      verdict: '선택지 A가 개인의 기본권을 보장하는 유일한 선택입니다.',
      score: 95
    }
  },

  3: { // 거짓말 딜레마
    deontology: {
      theory: 'deontology',
      choice: 'A',
      reasoning: `칸트는 거짓말을 절대적으로 금지했습니다. 심지어 살인자가 피해자의 행방을 물어도 거짓말해서는 안 된다고 주장했습니다.
      
      **분석**:
      - 거짓말은 이성적 존재로서의 인간의 존엄성을 해칩니다.
      - 보편적 법칙이 되었을 때 모순이 발생합니다.
      - 도덕적 법칙은 결과와 무관하게 절대적입니다.
      
      설령 끔찍한 결과가 예상되더라도, 거짓말은 도덕적으로 금지된 행위입니다.`,
      verdict: '선택지 A (진실 말하기)가 도덕적 의무입니다.',
      score: 85
    },
    consequentialism: {
      theory: 'consequentialism',
      choice: 'B',
      reasoning: `결과주의 관점에서는 행동의 결과만이 도덕적 판단의 기준입니다.
      
      **분석**:
      - 진실을 말한 결과: 무고한 가족의 죽음
      - 거짓말을 한 결과: 무고한 생명 구원
      
      거짓말 자체는 일반적으로 나쁘지만, 이 상황에서는 더 좋은 결과를 가져옵니다. 생명을 구하는 것이 거짓말보다 더 중요한 가치입니다.`,
      verdict: '선택지 B (거짓말)가 더 좋은 결과를 가져옵니다.',
      score: 90
    },
    virtue_ethics: {
      theory: 'virtue_ethics',
      choice: 'B',
      reasoning: `덕 윤리학에서는 상황의 맥락과 덕성을 고려합니다.
      
      **분석**:
      이 상황에서 중요한 덕목들:
      - 용기: 위험을 무릅쓰고 옳은 일을 하는 것
      - 자비: 무고한 사람들을 보호하는 것
      - 정의: 불의한 권력에 맞서는 것
      
      진정한 덕성을 가진 사람이라면 무고한 생명을 구하기 위해 거짓말을 선택할 것입니다. 이는 더 큰 덕을 실현하는 행위입니다.`,
      verdict: '선택지 B가 덕성 있는 인간의 선택입니다.',
      score: 85
    }
  }
};

export const getJudgmentForDilemma = (dilemmaId, ethicalTheory) => {
  return mockJudgments[dilemmaId]?.[ethicalTheory] || null;
};

export const getRandomEthicalTheory = (availableTheories) => {
  const randomIndex = Math.floor(Math.random() * availableTheories.length);
  return availableTheories[randomIndex];
};