import React from 'react';
import './styles/Contact.css';
import mage6 from '/assets/mage6.gif';
import bg5 from '/assets/bg6.gif';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <img src={bg5} alt="Magical Background" className="background-img" />
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="cursive">Contact Me</h1>
          <p>
            💌 <strong>Email:</strong> vrindakhandelwal2811@gmail.com <br />
            📞 <strong>Phone:</strong> +91 8619024161 <br />
            🌐 <strong>Portfolio:</strong> www.vrinda.dev <br />
            💼 <strong>LinkedIn:</strong> linkedin.com/in/vrinda-khandelwal2 <br />
            🐱 <strong>GitHub:</strong> github.com/vrindakhandelwal
          </p>
        </div>
        <div className="contact-right">
          <img src={mage6} alt="Mage" className="mage-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
