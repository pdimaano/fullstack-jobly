import React from 'react'
import { Link } from 'react-router-dom'

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
    <div className="Navigation">
      <Link to='/'>
        Jobly
      </Link>
      <Link to='/companies'>
        Companies
      </Link>
      <Link to='/jobs'>
        Jobs
      </Link>
    </div>
   );
}

export default Navigation;