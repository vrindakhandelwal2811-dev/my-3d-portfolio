import React from 'react';
import './styles/Experience.css';
import bg4 from '/assets/bg5.gif';
import mage4 from '/assets/mage4.gif';

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <img src={bg4} alt="Background" className="experience-bg" />

      <div className="experience-wrapper">
        <div className="experience-left">
          <h1>My Experience</h1>
          <p>
           
            ✨ Worked on full-stack web development <br />
            🛠 Tools: React, Spring Boot, MongoDB <br />
            <br />
            💼 Club Role: Vice President, Developer’s Club <br />
            🔮 Organized 10+ coding events <br />
            🎤 Toastmasters: Speech Contest Winner 🥇
          </p>

          <div className="graphs">
            <div className="bar-chart">
              <span>Web Dev</span>
              <div className="bar fill-90"></div>
              <span>Java</span>
              <div className="bar fill-85"></div>
              <span>React</span>
              <div className="bar fill-80"></div>
              <span>Leadership</span>
              <div className="bar fill-95"></div>
            </div>
          </div>
        </div>

        <div className="experience-right">
          <img src={mage4} alt="Mage" className="mage-img" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
