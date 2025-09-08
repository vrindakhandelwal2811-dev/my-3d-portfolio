import React from 'react';
import './styles/NavBar.css';

export default function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About Me</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
      <div className="nav-right">
        <button
          className="resume-button"
          onClick={() => window.open('/assets/Resume.pdf', '_blank')}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
