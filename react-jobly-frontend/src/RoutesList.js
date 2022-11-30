import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import Jobs from "./Jobs";

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
      <Route path="/companies/:name" element={<CompanyDetail />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}

export default RoutesList;
