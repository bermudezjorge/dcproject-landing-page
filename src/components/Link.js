import React from "react";
import styled from "styled-components";

const LinkStyled = styled.li`
  color: #fff;
  font-size: 13px;
  margin-left: 2rem;
  font-weight: 500;
  letter-spacing: 2px;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 400;
  text-transform: uppercase;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
`;

export default function Link({ text }) {
  return <LinkStyled>{text}</LinkStyled>;
}
