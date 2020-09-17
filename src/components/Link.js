import React from "react";
import styled from "styled-components";

const LinkStyled = styled.li`
  color: #fff;
  font-size: 0.8rem;
  margin-left: 2rem;
  font-weight: 500;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 600;
  cursor: pointer;
`;

export default function Link({ text }) {
  return <LinkStyled>{text}</LinkStyled>;
}
