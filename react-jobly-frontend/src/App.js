import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

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
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
