import React from "react";
import "./Homepage.css";

const Homepage = () => {
  const homepagestyle = {
    backgroundColor: "lightblue"
  };

  return (
    <div id="Homepage" className = "Homepage" style={homepagestyle}>
      <h1>Hi, my name is Robert</h1>
      <p>I'm a Full-Stack Dev</p>
      <p>Currently based in Seattle, WA</p>
    </div>
  );
};

export default Homepage;
