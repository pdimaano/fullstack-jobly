import React, { useState, useEffect } from 'react'
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

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

  async function onSearch(str) {
    const data = {nameLike: str};
    const companies = await JoblyApi.getCompanies(data)
    console.log('FILTERED COMPANIES', companies);
    setCompanies(companies);
  }

  return (
    <div className="CompanyList">
      <SearchForm onSearch={onSearch}/>

      {companies.map(c => (
        <CompanyCard key={`${c.handle}`} company={c} />
      ))}
    </div>
   );
}

export default CompanyList;
