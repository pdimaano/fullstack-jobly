import React, { useContext } from "react";
import "./HomePage.css";
import userInfoContext from "./userInfoContext";

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
  const userInfo = useContext(userInfoContext);
  console.debug("HomePage");

  //TODO: Fix companies link from home page

  return (
    <div className="HomePage">
      <div>
        <h1>Jobly</h1>
        {userInfo.firstName && <p>Welcome {userInfo.firstName}! </p>}
        <p>Find your dream job on a Korean beach!</p>
      </div>
    </div>
  );
}

export default HomePage;
