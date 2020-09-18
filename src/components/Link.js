import React from "react";
import styled from "styled-components";

const LinkStyled = styled.li`
  color: #fff;
  font-size: 12px;
  margin-left: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  text-transform: uppercase;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
`;

export default function Link({ text }) {
  return <LinkStyled>{text}</LinkStyled>;
}
