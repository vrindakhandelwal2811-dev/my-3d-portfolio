import React from 'react';
import './styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-section" id="about">
      <div className="about-left fade-in">
        <h1 className="glow-title">About Me</h1>
        <p>
          I’m <b>Vrinda</b>, a passionate software developer who blends design with logic to create magical digital experiences. From interactive UIs to dreamy 3D worlds, I love turning ideas into immersive code-powered stories.
        </p>
      </div>

      <div className="about-right">
        
          <img src="/assets/mage.gif" alt="Animated Vrinda" />
        </div>
      </div>
    
  );
};

export default AboutMe;
