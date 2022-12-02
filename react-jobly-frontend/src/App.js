import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

import userInfoContext from "./userInfoContext";

/**
 *  Renders Navigation and Routes List
 *
 *  Props: None
 *
 *  State: userInfo object {username, firstName, lastName, email},
 *         token
 *
 *  App -> Navigation & RoutesList
 *
 */

function App() {
  console.debug("App");
  const [userInfo, setUserInfo] = useState({
    username: null,
    firstName: null,
    lastName: null,
    email: null,
  });
  const [token, setToken] = useState(null);

  useEffect(
    function getUserInfo() {
      async function getUserApi() {
        if (token === null) {
          setUserInfo({
            username: null,
            firstName: null,
            lastName: null,
            email: null,
          });
        } else {
          const decoded = jwt_decode(token);
          console.log(decoded);
          let userInfo = await JoblyApi.getUser(decoded.username);
          setUserInfo({
            username: userInfo.username,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
          });
        }
      }
      getUserApi();
    },
    [token]
  );

  console.log("userInfo: ", userInfo);

  async function userSignup(userInfo) {
    let token = await JoblyApi.userRegister(userInfo);
    console.log("SIGNUP Token: ", token);
    setToken(token);
  }

  async function userLogin(userInfo) {
    let token = await JoblyApi.userLogin(userInfo);
    setToken(token);
  }

  async function userProfile(userInfo) {
    let updatedUser = await JoblyApi.userProfile(userInfo);
    console.log("LOGIN Token: ", updatedUser);
    setUserInfo({
      username: updatedUser.username,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    });
  }

  function userLogout() {
    setToken(null);
    console.log("LOGOUT")
  }

  return (
    <div className="App">
      <userInfoContext.Provider value={userInfo}>
        <BrowserRouter>
          <Navigation userLogout={userLogout}/>
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
