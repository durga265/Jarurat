
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import doctorImg from '../assets/doctor2.jpg';

const stats = [
  { title: 'Total Patients', value: 124, color: '#1E88E5' },
  { title: 'Active Cases', value: 32, color: '#F4511E' },
  { title: 'Recovered', value: 86, color: '#43A047' },
  { title: 'Pending Follow-ups', value: 6, color: '#FB8C00' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container home-page">
      <div className="hero-card">
        <div>
          <h2>Welcome to Jarurat Care</h2>
          <p className='muted'>Your interactive patient records dashboard for healthcare management.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={()=>navigate('/patients')}>View Patients</button>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
        <img src={doctorImg} alt="Healthcare Illustration" className="hero-image"/>
      </div>

      <section className="stats-section">
        {stats.map((s, i)=>(
          <div key={i} className="stat-card" style={{borderTop: `4px solid ${s.color}`}}>
            <h3>{s.value}</h3>
            <p>{s.title}</p>
          </div>
        ))}
      </section>

      <section className="how-to-use">
        <h3>How to use</h3>
        <ul className='muted'>
          <li>Go to <strong>Patients</strong> to view the list fetched from a demo API.</li>
          <li>Use the search bar to filter by patient name.</li>
          <li>Click <em>View Details</em> to open a modal. Add patient locally using the form.</li>
        </ul>
      </section>
    </div>
  )
}

export default Home;
