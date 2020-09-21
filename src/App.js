import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Social from "./Components/Social";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Social />
      <Main />
    </div>
  );
}

export default App;
