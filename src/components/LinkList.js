import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { LinksDataContext } from "context/linkcontext";

import Link from "components/Link";

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
              font-size: 22px;
              margin-top: 3rem;
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

const CloseMenu = styled.div`
  display: none;
  position: absolute;
  top: 5px;
  right: 15px;
  fill: #fff;
  font-family: "Roboto-Bold";
  font-size: 40px;
  @media (max-width: 640px) {
    display: block;
  }
`;

export default function LinkList({ section, handleMenu }) {
  const LINKS = useContext(LinksDataContext);

  return (
    <StyledLinkList section={section}>
      <CloseMenu role="button" onClick={() => handleMenu(false)}>
        &times;
      </CloseMenu>
      {LINKS.map((text) => (
        <Link key={text} text={text} />
      ))}
    </StyledLinkList>
  );
}
