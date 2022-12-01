import React, {useState} from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import JoblyApi from "./api";

import userInfoContext from "./userInfoContext";

/**
 *  Renders Navigation and Routes List
 *
 *  Props: None
 *
 *  State: userInfo object {username, token}
 *
 *  App -> Navigation & RoutesList
 *
 */

function App() {
  console.debug('App');
  const [userInfo, setUserInfo] = useState({username: null, token: null});

  console.log('userInfo: ', userInfo);

  async function userSignup(userInfo) {
    let res = await JoblyApi.userRegister(userInfo);
    console.log(res);
    setUserInfo({username: userInfo.username, token: res});
  }

  return (
    <div className="App">
      <userInfoContext.Provider value={userInfo}>
        <BrowserRouter>
          <Navigation />
          <RoutesList userSignup={userSignup}/>
        </BrowserRouter>
      </userInfoContext.Provider>
    </div>
  );
}

export default App;


// User Info
/*
  default

  username: null
  token: null

*/