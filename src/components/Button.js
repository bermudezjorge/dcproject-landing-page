import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: #0476d0;
  padding: 15px 30px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-family: "Roboto-Regular";
  transition: 0.2s transform;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    transform: translateY(7px);
    filter: brightness(0.9);
  }

  ${({ section }) => {
    switch (section) {
      case "contact":
        return css`
          width: auto;
          margin: 2rem auto 0 auto;
          &:hover {
            transform: none;
            filter: brightness(0.9);
          }
        `;

      default:
        break;
    }
  }}
`;

export default function Button({ text, section }) {
  return <StyledButton section={section}>{text}</StyledButton>;
}
