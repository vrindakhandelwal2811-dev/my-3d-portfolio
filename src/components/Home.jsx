import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import vrinda from '/assets/vrinda.jpg'; // adjust path

const Home = ({ clicked, setClicked }) => {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    if (clicked) {
      // Wait until the background animation finishes (e.g., 2s)
      const timer = setTimeout(() => setShowPhoto(true), 2000); 
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div
      className={`home-container ${clicked ? 'clicked' : ''}`}
      onClick={() => setClicked(true)}
      id="home"
    >
      <div className={`name ${clicked ? 'shrink' : ''}`}>
        Vrinda Khandelwal
      </div>

      {/* Show photo after animation */}
      {showPhoto && (
        <img src={vrinda} alt="Vrinda" className="profile-photo fade-in" />
      )}
    </div>
  );
};

export default Home;
