# 딜레마 게임 (Dilemma Game)

AI가 출제한 윤리적 딜레마에 대해 유저가 자신의 선택과 논리를 주장하면, AI 판사가 특정 윤리 이론에 입각해 판결을 내리는 텍스트 기반 시뮬레이션 게임입니다.

## 🎯 핵심 컨셉

- **AI 딜레마 출제**: AI가 다양한 윤리적 딜레마 상황을 제시
- **사용자 선택 및 논리**: 플레이어가 자신만의 선택과 그에 대한 논리적 근거를 제시
- **AI 판사 판결**: 다양한 윤리 이론(공리주의, 의무론, 덕 윤리학 등)을 바탕으로 AI가 판결

## 🛠 기술 스택

- **Frontend**: React, JavaScript
- **상태 관리**: Redux Toolkit (RTK)
- **빌드 도구**: Vite
- **API 연동**: RTK Query

## 📁 프로젝트 구조

```
src/
├── components/     # React 컴포넌트
├── store/         # Redux store 및 slices
├── utils/         # 유틸리티 함수
├── mocks/         # 목업 데이터
└── styles/        # 스타일 파일
```

## 🚀 실행 방법

1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npm run dev
```

3. 빌드
```bash
npm run build
```

## 📝 개발 단계

1. **프로젝트 초기 설정** ✅
2. **핵심 UI 레이아웃 구현**
3. **Redux Toolkit 상태 관리 설정**
4. **UI와 Redux 상태 연동**
5. **API 연동 (RTK Query)**
6. **스타일링 및 최종 다듬기**
