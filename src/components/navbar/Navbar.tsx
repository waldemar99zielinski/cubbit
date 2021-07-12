import React from "react";

import "./Navbar.css";

import Switch from "./Switch";

import logo from "../../assets/Logo.png";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt={"logo"} className="logo" />

      <Switch />
    </nav>
  );
};
