import React from "react";

import logo from "./../../assets/K_light.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="keyed-logo" src={logo} alt="logo" />
        <p className="keyed-logo-text">Keyed</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="nav-key-link"
          href="https://github.com/Tokenass"
          rel="noreferrer"
        >TOKEN</a>
      </div>
    </div>
  );
};

export default Nav;
