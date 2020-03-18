// @desc       Homepage
// @access     Public

import React from "react";
import Saitama from "../../Assets/saitama.gif";
import "./Biography.scss";

const Biography = () => {
  return (
    <div className="bio__wrapper">
      <div className="img__wrapper">
        <img src={Saitama} alt="Avatar" className="animated-gif" />
      </div>

      <div className="bio_title__wrapper">
        <h1>Who am I?</h1>
      </div>
      <div className="content__wrapper">
        <p>
          A Full-Stack Engineer who codes for fun in his free time when not
          working as a Business Analyst.
        </p>
        <p>My favorite things to do:</p>
        <ul>
          <li>To explore new cities and to meet the locals.</li>
          <li>(Sometimes I get lucky and find awesome coffee places)</li>
          <li>Economics are awesome.</li>
          <li>Camping, going on hikes, and to appriciate nature</li>
        </ul>
        <p>Favorite quotes include:</p>
        <q>
          Someone's sitting in the share today because someone planted a tree a
          long time ago. - Warren Buffett
        </q>
      </div>
    </div>
  );
};

export default Biography;
