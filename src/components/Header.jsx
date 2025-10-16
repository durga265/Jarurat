import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHeartbeat } from "react-icons/fa";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-section">
        <FaHeartbeat className="logo-icon" />
        <div className="logo-text">
          <div className="brand-name">Jarurat Care</div>
          <div className="tagline">Patient Records Dashboard</div>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
