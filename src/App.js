import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  // Filter jobs based on filterStatus
  const filteredJobs =
    filterStatus === 'All'
      ? jobs
      : jobs.filter((job) => job.status === filterStatus);

  return (
    <div>
      <h1>My Job Tracker</h1>

      {/* Filter buttons */}
      <div style={{ marginLeft: '20px', marginRight: '20px' }}>
  <button style={{ marginRight: '10px' }} onClick={() => setFilterStatus('All')}>
    All
  </button>
  <button style={{ marginRight: '10px' }} onClick={() => setFilterStatus('Applied')}>
    Applied
  </button>
  <button onClick={() => setFilterStatus('Interview')}>
    Interview
  </button>
</div>
      <JobForm onAdd={addJob} />
      <JobList jobs={filteredJobs} onDelete={deleteJob} />
    </div>
  );
}

export default App;