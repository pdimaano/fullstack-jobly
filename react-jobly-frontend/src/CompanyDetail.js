import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobCardList from './JobCardList';

/**
 *  Renders company information
 *
 *  Props: None
 *
 *  State: company is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 *  App -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const { handle } = useParams();
  console.log(handle)
  const [company, setCompany] = useState({});

  useEffect(function fetchCompany() {
    async function fetchCompanyAPI() {
      const companyInfo = await JoblyApi.getCompany(handle.toLowerCase());
      console.log(companyInfo)
      setCompany(companyInfo);
    }

    fetchCompanyAPI();
  }, []);

  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-Info">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </div>
      <JobCardList jobs={company.jobs}/>
    </div>
   );
}

export default CompanyDetail;