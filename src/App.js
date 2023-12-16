// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import WelcomeScreen from "./WelcomeScreen";
import Employees from "./Employees";
import "./css/style.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
      </div>
      <div className="page_content">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/empleados" element={<Employees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
