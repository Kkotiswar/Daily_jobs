import React from 'react';
import JobList from './JobList';
import './App.css'; // Import the updated CSS file

const App = () => {
  return (
    <div className="App">
      <h1>Job Listings</h1>
      <JobList />
      <h2>Made by <a href="https://kotiswar-portfolio.netlify.app/">Kotiswar</a> with ❤️</h2>
    </div>
  );
};

export default App;
