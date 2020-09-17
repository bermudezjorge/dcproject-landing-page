import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0476d0;
  padding: 1rem 2rem;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 500;
  transition: 0.2s transform;
  &:hover {
    cursor: pointer;
    transform: translateY(3px);
  }
`;

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}
