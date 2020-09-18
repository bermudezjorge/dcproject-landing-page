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
  cursor: pointer;
`;

export default function Link({ text }) {
  return <LinkStyled>{text}</LinkStyled>;
}
