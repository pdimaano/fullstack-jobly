import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

/**
 *  Renders navigation bar
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> Navigation -> Link
 */

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation-left">
        <Link className="Navigation-Link-Jobly" to='/'>
          Jobly
        </Link>
      </div>
      <div className="Navigation-right">
        <Link className="Navigation-Link-Companies" to='/companies'>
          Companies
        </Link>
        <Link className="Navigation-Link-Jobs" to='/jobs'>
          Jobs
        </Link>
      </div>
    </nav>
   );
}

export default Navigation;