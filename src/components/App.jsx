import React, { useState } from 'react';
import Home from './Home';
import NavBar from './NavBar';
import SocialBar from './SocialBar';
import AboutMe from './AboutMe';
import './styles/App.css';
import Education from './Education';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';



function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app-container">
      <Home clicked={clicked} setClicked={setClicked} />
      {clicked && (
        <>
           <div className="blend-transition"></div>
          <AboutMe />    
          <NavBar />
          <SocialBar />
          <Education />
          <Portfolio />
          <Experience />
          <Contact />
          
        </>
      )}
    </div>
  );
}

export default App;