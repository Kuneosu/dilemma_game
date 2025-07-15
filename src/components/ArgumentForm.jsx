import React, { useState } from 'react';
import './ArgumentForm.css';

const ArgumentForm = ({ 
  selectedChoice, 
  choiceText, 
  argument, 
  onArgumentChange, 
  onSubmit,
  isSubmitting = false 
}) => {
  const [charCount, setCharCount] = useState(argument.length);
  const minChars = 100;
  const maxChars = 1000;

  const handleArgumentChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      onArgumentChange(value);
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (argument.trim().length >= minChars) {
      onSubmit();
    }
  };

  const isValidLength = argument.trim().length >= minChars;
  const progressPercentage = Math.min((charCount / minChars) * 100, 100);

  return (
    <div className="argument-form">
      <div className="argument-header">
        <h3>당신의 논리적 근거를 설명해주세요</h3>
        <div className="selected-choice-reminder">
          <span className="choice-label">선택한 답: </span>
          <span className="choice-text">{choiceText}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="argument-form-container">
        <div className="textarea-container">
          <textarea
            value={argument}
            onChange={handleArgumentChange}
            placeholder={`왜 이 선택을 했는지 논리적 근거를 설명해주세요. 

예시:
- 어떤 윤리적 원칙에 기반했나요?
- 어떤 가치를 가장 중요하게 여겼나요?
- 대안적 선택지의 문제점은 무엇인가요?
- 예상되는 결과와 그 정당성은?

최소 ${minChars}자 이상 작성해주세요.`}
            className={`argument-textarea ${!isValidLength && charCount > 0 ? 'invalid' : ''}`}
            disabled={isSubmitting}
          />
          
          <div className="character-info">
            <div className="char-count">
              <span className={charCount < minChars ? 'insufficient' : 'sufficient'}>
                {charCount}
              </span>
              <span className="char-limit"> / {maxChars}자</span>
            </div>
            
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="min-requirement">
                최소 {minChars}자 필요
              </span>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className={`btn btn-primary btn-large ${!isValidLength ? 'disabled' : ''}`}
            disabled={!isValidLength || isSubmitting}
          >
            {isSubmitting ? 'AI 판사가 판결 중...' : 'AI 판사에게 제출하기'}
          </button>
          
          {!isValidLength && charCount > 0 && (
            <p className="validation-message">
              최소 {minChars - charCount}자 더 작성해주세요.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ArgumentForm;