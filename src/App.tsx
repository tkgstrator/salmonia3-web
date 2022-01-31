import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";
import EULA from "./EULA";

function App() {
  return (
    <div className="App">
      <h1>Salmonia3</h1>
      <Routes>
        <Route path="privacy" element={<Privacy />} />
        <Route path="agreement" element={<EULA />} />
      </Routes>
    </div>
  );
}

export default App;
