// @desc       Homepage
// @access     Public

// Dependancies
import React from "react";
import { Link } from "react-router-dom";

// Styling
import "./Homepage.scss";

// Assests
import location from "../../Assets/location_icon.png";
const Homepage = () => {
  return (
    <div className="home__container">
      <div className="home__image-container">
        <div className="home__title">
          <p>Robert T. Hartley</p>
        </div>

        <div className="home__sub-title">
          <p>Full-Stack Engineer</p>
        </div>

        <div className="home__location">
          <p>Based in Seattle, WA</p>
          <img src={location} alt="Location icon" className="location__icon" />
        </div>

        <div className="home__current-location">
          <p>*Currently in Toyko*</p>
        </div>

        <div className="home__container">
          <button className="btn social">
            <div className="icon-container">
              <Link
                className="home__btn"
                to="/proj"
                style={{ textDecoration: "none" }}
              >
                <div className="icon">Projects</div>
              </Link>
            </div>
          </button>

          <button className="btn social">
            <div className="icon-container">
              <Link
                className="home__btn"
                to="/bio"
                style={{ textDecoration: "none" }}
              >
                <div className="icon">Bio</div>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
