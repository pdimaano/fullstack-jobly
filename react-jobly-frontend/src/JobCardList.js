import React from 'react'
import JobCard from './JobCard';

/**
 *  Renders job cards
 *
 *  Props: jobs: [{ id, title, salary, equity }, ...]
 *
 *  State: None
 *
 *  App -> CompanyDetail -> JobCardList -> JobCard
 */

function JobCardList({jobs}) {
  console.debug('JobCardList');
  console.log('jobs: ', jobs);

  return (
    <div className="JobCardList">
      {jobs.map(j => (
        <JobCard key={`${j.id}`} job={j} />
      ))}
    </div>
   );
}

export default JobCardList;
