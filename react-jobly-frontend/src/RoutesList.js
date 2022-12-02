import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/**
 *  Create routes for application
 *
 *  Props: userLogin (func), userSignup (func), userProfile (func)
 *
 *  State: None
 *
 *  Render App -> RoutesList
 */

//TODO: Should add ternary to say which routes to render based on if signed in or not

function RoutesList({userLogin, userSignup, userProfile}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm onSubmission={userLogin} />}/>
      <Route path="/signup" element={<SignupForm onSubmission={userSignup}/>} />
      <Route path="/profile" element={<ProfileForm onSubmission={userProfile}/>} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
}

export default RoutesList;
