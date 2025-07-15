import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ gameState }) => {
  const location = useLocation();
  
  const navigationItems = [
    { path: '/', label: '홈', icon: '🏠' },
    { path: '/game', label: '게임', icon: '🎮' },
    { path: '/how-to-play', label: '게임 방법', icon: '❓' },
    { path: '/about', label: '게임 소개', icon: 'ℹ️' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">⚖️</span>
            <span className="brand-text">딜레마 게임</span>
          </Link>
        </div>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </div>

        {gameState && gameState.status === 'in_progress' && (
          <div className="game-status">
            <span className="status-indicator">게임 진행 중</span>
            <span className="round-info">라운드 {gameState.currentRound}/{gameState.maxRounds}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;