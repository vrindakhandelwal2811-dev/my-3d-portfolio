import React from 'react';
import './styles/SocialBar.css';

export default function SocialBar() {
  return (
    <div className="social-bar">
      <div className="follow-text">
        {['I','I','F','O','L','L','O','W'].map((ch, i) => <span key={i}>{ch}</span>)}
      </div>
      <div className="icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
        <a href="mailto:khandelwalvrinda031@gmail.com">✉️</a>
        <a href="https://www.linkedin.com/in/vrinda-khandelwal28/" target="_blank" rel="noreferrer">💼</a>
      </div>
    </div>
  );
}
