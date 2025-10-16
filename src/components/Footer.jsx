import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Durga Care</h3>
        <p>Empowering healthcare with technology — built for Jarurat Care Internship assignment.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/patients">Patients</a>
          <a href="/about">About</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Durga Care | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
