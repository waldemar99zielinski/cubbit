import React from "react";
import styled from "styled-components";

export const Switch: React.FC = () => {
  const SwitchContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 40px;
    left: calc(50% - 240px / 2 + 440px);
    top: 16px;
    border: 2px solid #009eff;
  `;
  return <SwitchContainer>ZXD</SwitchContainer>;
};
