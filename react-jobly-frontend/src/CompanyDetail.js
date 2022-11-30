import React from 'react'

/**
 *  Renders company information
 *
 *  Props: None
 *
 *  State: companyInfo is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 *  App -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  return (
    <div className="CompanyDetail">
      <p>CompanyDetail</p>
    </div>
   );
}

export default CompanyDetail;