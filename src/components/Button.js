import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0476d0;
  padding: 1.3rem 2.5rem;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 500;
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
