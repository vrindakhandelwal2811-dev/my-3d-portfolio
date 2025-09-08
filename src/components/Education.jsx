// Education.jsx
import React from 'react';
import './styles/Education.css';
import bg3 from '/assets/bg3.gif';
import mage2 from '/assets/mage2.gif';

const Education = () => {
  return (
    <div className="education-section" id="education">
      <img src={bg3} alt="Background" className="background-img" />
      <div className="education-wrapper">
        <div className="education-left">
          <img src={mage2} alt="Animated Character" className="mage2" />
        </div>
        <div className="education-right">
          <h1>My Education</h1>
          <p>
            📚 <b>10th:</b> 90% <br />
            📘 <b>12th:</b> 75% <br /><br />
            🎓 <b>B.Tech in Computer Science</b><br />
            📍 JECRC Foundation, 2023 – 2027<br />
            📈 <b>CGPA:</b> 8.5 / 10<br />
            ✨ <b>Courses:</b> DSA, Web Dev, AI, DBMS, OS, CN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

