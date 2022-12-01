import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import userInfoContext from './userInfoContext';

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
  const userInfo = useContext(userInfoContext);
  
  return (
    <nav className="Navigation">
      <div className="Navigation-left">
        <NavLink className="Navigation-Link-Jobly" to='/' reloadDocument>
          Jobly
        </NavLink>
      </div>
      <div className="Navigation-right">

        <NavLink className="Navigation-Link-Companies" to='/companies' reloadDocument>
          Companies
        </NavLink>
        <NavLink className="Navigation-Link-Jobs" to='/jobs' reloadDocument>
          Jobs
        </NavLink>
      </div>
    </nav>
   );
}

export default Navigation;