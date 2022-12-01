import React, {useState} from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

import userInfoContext from "./userInfoContext";

/**
 *  Renders Navigation and Routes List
 *
 *  Props: None
 *
 *  State: None
 *
 *  App -> Navigation & RoutesList
 *
 */

function App() {
  console.debug('App');
  const [userInfo, setUserInfo] = useState({username: null, token: null});

  console.log('userInfo: ', userInfo);

  return (
    <div className="App">
      <userInfoContext.Provider value={userInfo}>
        <BrowserRouter>
          <Navigation />
          <RoutesList />
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