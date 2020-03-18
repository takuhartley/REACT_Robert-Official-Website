// Dependancies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Layout Components
import Biography from "../../Components/Biography/Biography";
import Homepage from "../../Components/Homepage/Homepage";
import Projects from "../../Components/Projects/Projects";
import Technologies from "../../Components/Technologies/Technologies";
import Skills from "../../Components/Skills/Skills";

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/biography" component={Biography} />
        <Route exact path="/tech" component={Technologies} />
        <Route exact path="/skills" component={Skills} />
      </Router>
      
    </Fragment>
  );
}

export default App;
