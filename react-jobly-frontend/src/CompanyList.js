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
  const [companies, setCompanies] = useState({isLoaded: false})

  console.log('companies: ', companies);

  useEffect(function fetchCompanies() {
    async function fetchCompaniesAPI() {
      const companiesInfo = await JoblyApi.getCompanies();
      setCompanies({companiesInfo: companiesInfo, isLoaded: true});
    }

    fetchCompaniesAPI();
  }, []);

  /**
   *  Calls api method getCompanies and sets state with results that returns
   *  a filtered list of companies based on input
   *
   *  Input: data - str
   *  Output: None
   */
  async function onSearch(str) {
    const data = {nameLike: str};
    const companiesInfo = await JoblyApi.getCompanies(data)
    setCompanies({companiesInfo: companiesInfo, isLoaded: true});
  }

  if (companies.isLoaded === false) {
    return <i>Loading...</i>
  }

  return (
    <div className="CompanyList">
      <SearchForm onSearch={onSearch}/>

      {companies.companiesInfo.map(c => (
        <CompanyCard key={`${c.handle}`} company={c} />
      ))}
    </div>
   );
}

export default CompanyList;
