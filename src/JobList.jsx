import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getJobs')
      .then(response => {
        setJobs(response.data.jobs);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div class="job-list">
      {jobs.map(job => (
        <JobCard key={job.position} job={job} />
      ))}
    </div>
  );
};

export default App;
