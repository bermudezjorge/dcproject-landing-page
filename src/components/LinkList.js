import React from "react";
import styled, { css } from "styled-components";

const StyledLinkList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  & > close {
    display: none;
  }

  ${({ section }) => {
    switch (section) {
      case "header":
        return css`
          @media (max-width: 640px) {
            width: 100vw;
            height: 100vh;
            background: #000;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            & > li {
              width: 80%;
              margin-left: 0;
              font-size: 25px;
              margin-top: 3rem;
            }
            & > #close {
              display: block;
              position: absolute;
              top: 5px;
              right: 15px;
              fill: #fff;
              font-family: "Roboto-Bold";
              font-size: 33px;
            }
          }
        `;

      case "footer":
        return css`
          justify-content: center;

          @media (max-width: 640px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px 0;
            padding: 0 2rem;
            & > li {
              margin-left: 0;
              align-self: center;
            }
          }
        `;

      default:
        break;
    }
  }}
`;

export default function LinkList({ children, section }) {
  return <StyledLinkList section={section}>{children}</StyledLinkList>;
}
