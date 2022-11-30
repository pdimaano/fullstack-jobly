import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

/**
 *  Create routes for application
 *
 *  Props: None
 *
 *  State: None
 *
 *  Render App -> RoutesList
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
}

export default RoutesList;
