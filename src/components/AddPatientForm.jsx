import React, { useState } from 'react';
import './AddPatientForm.css';

const AddPatientForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name.trim()) return alert('Please enter a name');

    const newPatient = {
      id: Date.now(),
      name: name.trim(),
      age: age ? Number(age) : Math.floor(Math.random() * 60) + 18,
      contact: contact || '-',
      email: email || '-',
      address: '-',
      notes: notes || 'Added locally',
      avatar: `https://i.pravatar.cc/150?u=${Date.now()}` // placeholder avatar
    };

    onAdd(newPatient);
    setName(''); setAge(''); setContact(''); setEmail(''); setNotes('');
  };

  return (
    <form className="add-patient-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Sita Reddy"/>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="e.g. 32"/>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Contact</label>
          <input type="text" value={contact} onChange={e=>setContact(e.target.value)} placeholder="e.g. 9876543210"/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="e.g. sita@example.com"/>
        </div>
      </div>
      <div className="form-group">
        <label>Notes</label>
        <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Optional notes..."></textarea>
      </div>
      <button type="submit" className="btn-submit">Add Patient</button>
    </form>
  )
};

export default AddPatientForm;
