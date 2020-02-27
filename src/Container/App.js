import React from "react";

// Component imports
import Homepage from "../Components/Homepage/Homepage";
import Biography from "../Components/Biography/Biography";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Technologies from "../Components/Technologies/Technologies";

// CSS
import "./App.css";

function App() {
  return (
    <div className="Container">
      <Homepage />
      <Projects />
      <Biography />
      <Technologies />
      <Skills />
    </div>
  );
}

export default App;
