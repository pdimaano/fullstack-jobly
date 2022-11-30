import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';
/**
 * Renders a company card with company information
 *
 *  Props: company: { handle, name, description, numEmployees, logoUrl }
 *
 *  State: None
 *
 *  Render:
 *    CompanyList -> CompanyCard
 */
function CompanyCard({company}) {
  console.debug('CompanyCard');

  return (
    <Link to={`/companies/${company.handle}`}>
      <div className="CompanyCard">
        <div className="CompanyCard-Info">
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </div>
        <div className="CompanyCard-Img">
          {company.logoUrl && <img src={`${company.logoUrl}`} alt={`${company.name} logo`}></img>}
        </div>
      </div>
    </Link>
  )
}

export default CompanyCard;

// show name, logo, description
