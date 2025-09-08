import React from 'react';
import './styles/Portfolio.css';
import bg3 from '/assets/bg4.gif';
import mage3 from '/assets/mage3.gif';

const Portfolio = () => {
  return (
    <div className="portfolio-section" id="portfolio">
      <img src={bg3} alt="Background" className="portfolio-bg" />
      <div className="portfolio-content">
        <div className="left-portfolio">
          <img src={mage3} alt="Animated Mage" className="mage3" />
        </div>
        <div className="right-portfolio">
          <h1 className="portfolio-title">My Projects</h1>
          <p>✨ Interactive web portals</p>
          <p>✨ 3D game demo with AI elements</p>
          <p>✨ Finance Tracker App</p>
          <p>✨ Smart Classroom App</p>

          <div className="chart-container">
            <h2 className="chart-title">Skills by Project</h2>
            <div className="bar-chart">
              <div><span>React</span><div className="bar react"></div></div>
              <div><span>Spring Boot</span><div className="bar spring"></div></div>
              <div><span>MongoDB</span><div className="bar mongo"></div></div>
              <div><span>Unity</span><div className="bar unity"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
