import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0476d0;
  padding: 1rem 3rem;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  box-shadow: 0px 7px 16px -7px #1590e9a3;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 500;
  transition: 0.2s transform;
  &:hover {
    cursor: pointer;
    transform: translateY(7px);
    filter: brightness(0.9);
    box-shadow: none;
  }
`;

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}
