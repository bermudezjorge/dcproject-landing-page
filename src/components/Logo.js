import React from "react";
import styled from "styled-components";

const LogoStyled = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
  font-family: "Roboto-Bold";
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    top: -3px;
    left: 0;
  }
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export default function Logo() {
  return <LogoStyled>DCProject</LogoStyled>;
}
