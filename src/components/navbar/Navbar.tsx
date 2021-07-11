import React from "react";
import styled from "styled-components";

import "./Navbar.css";

import Switch from "./Switch";

import logo from "../../assets/Logo.png";

interface Props {}

export const Navbar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt={"logo"} className="logo" />

      <Switch />
    </nav>
  );
};
