import React from "react";

const Projects = () => {
  const projectStyle = {
    backgroundColor: "grey"
  };

  // Need to have these in seperate components
  // Every project is going to have a:
  // Title:
  // Description:
  // Summary:
  // Technologies:
  //   For this if I can make it so it automatically adds the project, would be nice
  //   If I can log into my own website to update projects, that would be nice as well
  // Date of completion:
  // Date edited:
  
  return (
    <div style={projectStyle}>
      <h1>Portfolio</h1>
      <p>Goal Tracker</p>
      <p>Whodis</p>
      <p>Cloudy Days</p>
      <p>Portfolio Project (This one)</p>
    </div>
  );
};

export default Projects;
