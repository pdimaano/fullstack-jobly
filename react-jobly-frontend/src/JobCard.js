import React from 'react'
import './JobCard.css'

/**
 *  Renders job card
 *
 *  Props: jobs: [{ id, title, salary, equity,
 *                  companyHandle(optional), companyName(optional) }, ...]
 *
 *  State: None
 *
 *  App -> CompanyDetail -> JobCardList -> JobCard
 */

function JobCard({job}) {
  console.debug('JobCard');
  console.log('job: ', job);

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      {job.companyName && <h4>{job.companyName}</h4>}
      {job.salary && <p>Salary: {job.salary}</p>}
      <p>Equity: {job.equity}</p>
    </div>
   );
}

export default JobCard;
