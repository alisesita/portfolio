import React from 'react';

function JobList({ jobs, onDelete }) {
  return (
    <div>
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <strong>{job.company}</strong> – {job.role} – <em>{job.status}</em>
          <button onClick={() => onDelete(job.id)} style={{ float: 'right' }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobList;