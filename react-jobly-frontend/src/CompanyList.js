import React, { useState, useEffect } from 'react'
import JoblyApi from './api';
import CompanyCard from './CompanyCard';

/**
 *  Renders company cards
 *
 *  Props: None
 *
 *  State: companies: [ { handle, name, description, numEmployees, logoUrl }, ...]
 *
 *  App -> CompanyList -> CompanyCard & SearchForm
 */

function CompanyList() {
  console.debug('CompanyList');
  const [companies, setCompanies] = useState([])

  console.log('companies: ', companies);

  useEffect(function fetchCompanies() {
    async function fetchCompaniesAPI() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }

    fetchCompaniesAPI();
  }, []);

  return (
    <div className="CompanyList">
      {companies.map(c => (
        <CompanyCard key={`${c.handle}`} company={c} />
      ))}
    </div>
   );
}

export default CompanyList;