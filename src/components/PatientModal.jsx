import React from 'react';
import './PatientModal.css';

const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-title">
            <img src={patient.avatar || `https://i.pravatar.cc/150?u=${patient.id}`} alt="avatar" className="avatar"/>
            <div>
              <h3>{patient.name}</h3>
              <div className="badge">Patient</div>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <div className="modal-row"><strong>Age:</strong> {patient.age}</div>
          <div className="modal-row"><strong>Contact:</strong> {patient.contact}</div>
          <div className="modal-row"><strong>Email:</strong> {patient.email}</div>
          <div className="modal-row"><strong>Address:</strong> {patient.address || '-'}</div>
          <div className="modal-row"><strong>Notes:</strong> {patient.notes || '-'}</div>
        </div>

        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
