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
  const [userInfo, setUserInfo] = useState({ //TODO: sep token from userInfo use token to get user info
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    token: null
  });

  //TODO: USE EFFECT TO TRIGGER GETUSER ON TOKEN CHANGE
  // TODO: npm install jwt-decode (import decode from jwt-decode)

  console.log('userInfo: ', userInfo);

  async function userSignup(userInfo) {
    let res = await JoblyApi.userRegister(userInfo); //change res to user
    console.log('SIGNUP Token: ', res);
    setUserInfo({
      username: userInfo.username,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      token: res
    });
  }

  async function userLogin(userInfo) {
    let token = await JoblyApi.userLogin(userInfo);
    let user = await JoblyApi.getUser(userInfo.username); //TODO: look into token payload for username

    console.log('LOGIN Token: ', token);
    console.log('USERRRRRR', user);
    setUserInfo({
      username: userInfo.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: token
    });
  }

  async function userProfile(userInfo) {
    let res = await JoblyApi.userProfile(userInfo);
    console.log('LOGIN Token: ', res);
    setUserInfo({
      username: res.username,
      firstName: res.firstName,
      lastName: res.lastName,
      email: res.email,
      token: res
    });
  }
  return (
    <div className="App">
      <userInfoContext.Provider value={userInfo}>
        <BrowserRouter>
          <Navigation />
          <RoutesList
            userSignup={userSignup}
            userLogin={userLogin}
            userProfile={userProfile}
          />
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