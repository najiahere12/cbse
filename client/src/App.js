import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Crud from "./components/crud";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to MERN CBSE Project</h1>
      <Crud />
    </div>
  );
}

export default App;
