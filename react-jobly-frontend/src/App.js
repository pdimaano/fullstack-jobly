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
 *  State: userInfo object {
 *                          user: {username, firstName, lastName, email},
 *                          loggedIn: true
 *                          },
 *         token
 *
 *  App -> Navigation & RoutesList
 *
 */

function App() {
  console.debug("App");

  const [userInfo, setUserInfo] = useState({
    user: {
      username: null,
      firstName: null,
      lastName: null,
      email: null
    },
    loggedIn: false
  });
  const [token, setToken] = useState(null);

  useEffect(
    function getUserInfo() {
      async function getUserApi() {
        if (!token) {
          setUserInfo({
            user: {
              username: null,
              firstName: null,
              lastName: null,
              email: null
            },
            loggedIn: false
          });
        } else {
          const decoded = jwt_decode(token);
          console.log(decoded);
          try {
            userInfo.user = await JoblyApi.getUser(decoded.username);
            setUserInfo({
              user: {
                username: userInfo.user.username,
                firstName: userInfo.user.firstName,
                lastName: userInfo.user.lastName,
                email: userInfo.user.email
              },
              loggedIn: true
            });
          } catch (err) {
            setToken(null)
            setUserInfo({
              user: {
                username: null,
                firstName: null,
                lastName: null,
                email: null
              },
              loggedIn: false
            });
          }
        }
      }
      getUserApi();
    },
    [token]
  );

  console.log("userInfo: ", userInfo);

  /** Signs user up and sets token
   *  Input: userInfo - Object
   *  {username, password, firstName, lastName, email}
   */
  async function userSignup(userInfo) {
    let token = await JoblyApi.userRegister(userInfo);
    console.log("SIGNUP Token: ", token);
    setToken(token);
  }

  /** Logs user in and sets token
   *  Input: userInfo - Object
   *  {username, password}
   */
  async function userLogin(userInfo) {
    let token = await JoblyApi.userLogin(userInfo);
    setToken(token);
  }

  /** Updates current user information and sets userInfo
   *
   *  Input: userInfo - Object
   *  {username, firstName, lastName, email}
   */
  async function userUpdate(userInfo) {
    let updatedUser = await JoblyApi.userUpdate(userInfo);
    console.log("Updated User: ", updatedUser);
    setUserInfo(u => (
      {
        ...u,
        user: {
          username: updatedUser.username,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          email: updatedUser.email
        }})
    );
  }

  /** Logs current user out
   * sets token and userinfo to null
   */
  function userLogout() {
    setToken(null);
    setUserInfo({
      user: {
        username: null,
        firstName: null,
        lastName: null,
        email: null
      },
      loggedIn: false
    });
    console.log("LOGOUT")
  }

  // if (userInfo.loggedIn === false) return (<i>...Loading</i>)

  return (
    <div className="App">
      <userInfoContext.Provider value={userInfo}>
        <BrowserRouter>
          <Navigation userLogout={userLogout}/>
          <RoutesList
            userSignup={userSignup}
            userLogin={userLogin}
            userUpdate={userUpdate}
          />
        </BrowserRouter>
      </userInfoContext.Provider>
    </div>
  );
}

export default App;
