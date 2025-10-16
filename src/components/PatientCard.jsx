import React from 'react';
import './PatientCard.css';

const PatientCard = ({ patient, onView }) => {
  return (
    <div className="patient-card">
      <h3>{patient.name}</h3>
      <p>Age: <strong>{patient.age}</strong></p>
      <p className="muted">Contact: {patient.contact}</p>
      <div className="card-footer">
        <small className="muted">{patient.email}</small>
        <button className="btn" onClick={() => onView(patient)}>View Details</button>
      </div>
    </div>
  );
};

export default PatientCard;
