import React from 'react';
import './About.css';
import { FaHospitalUser, FaUserMd, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container about-page" id="about">
      
      {/* Hero Section */}
      <section className="about-hero">
        <h2>About Jarurat Care</h2>
        <p>
          Durga Care is a healthcare dashboard designed to manage patient records efficiently. 
          Our mission is to provide healthcare professionals with a clean, interactive platform for patient management.
        </p>
      </section>

      {/* Features / Mission */}
      <section className="about-features">
        <div className="feature-card">
          <FaHospitalUser className="feature-icon" />
          <h3>Patient Management</h3>
          <p>Maintain accurate and organized patient records with easy access and search.</p>
        </div>
        <div className="feature-card">
          <FaUserMd className="feature-icon" />
          <h3>Healthcare Staff Support</h3>
          <p>Provide doctors, nurses, and caregivers with real-time data and insights.</p>
        </div>
        <div className="feature-card">
          <FaHandsHelping className="feature-icon" />
          <h3>Community & Care</h3>
          <p>Build a support network for patients and caregivers, enhancing treatment outcomes.</p>
        </div>
      </section>

      {/* Team / Footer Info */}
      <section className="about-team">
        <h3>Our Core Values</h3>
        <p className="muted">Reliability, Efficiency, Compassion – at the heart of our platform.</p>
      </section>

    </div>
  );
};

export default About;
