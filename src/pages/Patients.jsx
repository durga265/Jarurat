import React, {useState, useEffect} from 'react';
import PatientTable from '../components/PatientTable';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';
import './Patients.css';

const mapUserToPatient = (u) => ({
  id: u.id,
  name: u.name,
  age: Math.floor(Math.random()*50)+18,
  contact: u.phone || '-',
  email: u.email || '-',
  address: u.address ? `${u.address.suite}, ${u.address.street}, ${u.address.city}` : '-',
  notes: 'No additional notes'
});

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(()=>{
    let cancelled = false;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {if(!res.ok) throw new Error('Network error'); return res.json()})
      .then(data => {if(cancelled) return; setPatients(data.map(mapUserToPatient)); setLoading(false)})
      .catch(err => {if(cancelled) return; setError(err.message); setLoading(false)});
    return () => {cancelled=true};
  }, []);

  const handleAdd = (newPatient) => setPatients(prev => [newPatient, ...prev]);

  return (
    <div className="patients-page">
      <div className="patients-header">
        <h2>Patients</h2>
        <button className="btn-add" onClick={()=>setShowAdd(s=>!s)}>
          {showAdd ? 'Close Form' : 'Add New Patient'}
        </button>
      </div>

      {showAdd && <div className="add-form-wrapper"><AddPatientForm onAdd={handleAdd}/></div>}
      {loading && <p className="muted">Loading patients...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <PatientTable patients={patients} onView={setSelected} />
      )}

      {selected && <PatientModal patient={selected} onClose={()=>setSelected(null)} />}
    </div>
  )
}

export default Patients;
