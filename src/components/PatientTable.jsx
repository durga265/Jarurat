import React from 'react';
import './PatientTable.css';

const PatientTable = ({patients, onView}) => {
  return (
    <div className="table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 && (
            <tr>
              <td colSpan="6" style={{textAlign:'center', padding:'20px'}}>No patients found</td>
            </tr>
          )}
          {patients.map((p, idx) => (
            <tr key={p.id}>
              <td>{idx + 1}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.contact}</td>
              <td>{p.email}</td>
              <td>
                <button className="btn-view" onClick={() => onView(p)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
