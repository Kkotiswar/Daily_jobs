import React from 'react';
import './JobCard.css'; // Import the CSS file for styling

const JobCard = ({ job }) => {
  const { position, location, applicationPeriod, notes, link } = job;
  return (
    <div className="job-card">
      <h3 className="job-name">
        <span className="left-side">Company Name : </span>
        <span className="right-side">{position}</span>
      </h3>
      <p className="job-location">
        <span className="left-side">Location : </span>
        <span className="right-side">{location}</span>
      </p>
      <p className="job-application">
        <span className="left-side">Application Period : </span>
        <span className="right-side job-application-span">{applicationPeriod}</span>
      </p>
      <p className="job-notes">
        <span className="left-side">{notes}</span>
      </p>
      <a href={link} target='_blank'>
        <button className="apply-button">Apply Now</button>
      </a>
    </div>
  );
};

export default JobCard;
