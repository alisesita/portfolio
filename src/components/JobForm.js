import React, { useState } from 'react';

function JobForm({ onAdd }) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Applied'); // You need this state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !role) return;

    const newJob = {
      id: Date.now(),
      company,
      role,
      status, 
    };

    onAdd(newJob);

    // Reset form fields
    setCompany('');
    setRole('');
    setStatus('Applied'); // Reset to default
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select style={{marginRight: '20px' }}value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
      </select>
      <button style={{ marginLeft: '230px' }} type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;