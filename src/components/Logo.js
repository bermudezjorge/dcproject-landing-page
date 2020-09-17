import React from "react";
import styled from "styled-components";

const LogoStyled = styled.h1`
  color: #fff;
  font-size: calc(2rem * 10px);
  margin: 0;
  font-weight: bolder;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 400;
`;

export default function Logo() {
  return <LogoStyled>DCproject</LogoStyled>;
}
