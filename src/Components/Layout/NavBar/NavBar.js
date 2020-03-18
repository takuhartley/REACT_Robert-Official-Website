// @desc       Navigation
// @access     Public

import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  const style = {
    padding: "20px"
  };
  return (
    <div className="nav__container" style={style}>
      <Link to="/home" className="btn" style={{ textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/bio" className="btn" style={{ textDecoration: "none" }}>
        About
      </Link>
      <Link to="/projs" className="btn" style={{ textDecoration: "none" }}>
        Work
      </Link>

      <Link to="/tech" className="btn" style={{ textDecoration: "none" }}>
        Tech
      </Link>

      <Link to="/skill" className="btn" style={{ textDecoration: "none" }}>
        Skills
      </Link>

      <Link to="/contact" className="btn" style={{ textDecoration: "none" }}>
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
