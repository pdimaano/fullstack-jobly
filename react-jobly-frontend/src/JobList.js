import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import JobCardList from './JobCardList'
import JoblyApi from "./api";

/**
 *  Renders jobs
 *
 *  Props: None
 *
 *  State: jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...]
 *
 *  App -> JobList -> JobCardList & SearchForm
 */

function JobList() {
  console.debug('JobList');
  const [jobs, setJobs] = useState({isLoaded: false})

  console.log('jobs: ', jobs);

  useEffect(function fetchJobs() {
    async function fetchJobsAPI() {
      const jobInfo = await JoblyApi.getJobs();
      setJobs({jobInfo: jobInfo, isLoaded: true});
    }

    fetchJobsAPI();
  }, []);

  if (jobs.isLoaded === false) {
    return <i>Loading...</i>
  }

  /**
   *  Calls api method getJobs and sets state with results that returns
   *  a filtered list of jobs based on input
   *
   *  Input: data - str
   *  Output: None
   */
   async function onSearch(str) {
    const data = {title: str};
    const jobs = await JoblyApi.getJobs(data)
    setJobs(jobs);
  }

  return (
    <div className="JobList">
      <SearchForm onSearch={onSearch}/>
      <JobCardList jobs={jobs.jobInfo}/>
    </div>
  );
}

export default JobList;
