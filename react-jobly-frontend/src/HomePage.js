import React from 'react'
import './HomePage.css';
/**
 *  Renders home page
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> HomePage
 */

function HomePage() {
  console.debug('HomePage');

  return (
    <div className="HomePage">
      <div>
        <h1>Jobly</h1>
        <p>Find your dream job on a Korean beach!</p>
      </div>
    </div>
   );
}

export default HomePage;