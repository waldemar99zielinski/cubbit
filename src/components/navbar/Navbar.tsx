import React from "react";
import styled from "styled-components";

import { Switch } from "./Switch";

import logo from "../../assets/Logo.png";

interface Props {}

export const Navbar: React.FC = () => {
  const Nav = styled.nav`
    position: sticky;
    height: 72px;
    left: 0%;
    right: 0%;
    top: 0px;
    background: #292929;
  `;
  const Logo = styled.img`
    position: absolute;
    width: 119px;
    height: 46px;
    left: 23px;
    top: 13px;
  `;
  return (
    <Nav>
      <Logo src={logo} />
      {/* <Switch /> */}
    </Nav>
  );
};
