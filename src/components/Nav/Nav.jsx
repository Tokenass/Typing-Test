import React from "react";

import logo from "./../../assets/K.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="keyed-logo" src={logo} alt="logo" />
        <p className="keyed-logo-text">Keyed</p>
      </div>
    </div>
  );
};

export default Nav;
