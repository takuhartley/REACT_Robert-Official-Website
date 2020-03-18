// Dependancies
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Layout Components
import Biography from "../Components/Biography/Biography";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Layout/Footer/Footer";
import Homepage from "../Components/Homepage/Homepage";
import NavBar from "../Components/Layout/NavBar/NavBar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Technologies from "../Components/Technologies/Technologies";
// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
      </Fragment>

      <Switch>
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/bio" component={Biography} />
        <Route exact path="/tech" component={Technologies} />
        <Route exact path="/skill" component={Skills} />
        <Route exact path="/projs" component={Projects} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
