import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;

  ${({ section }) => {
    switch (section) {
      case "header":
        return css`
          height: 90px;
          justify-content: space-between;
          align-items: center;
          padding: 0 4rem;
          background: #000;
          position: relative;
        `;

      case "home":
        return css`
          height: 70vh;
          position: relative;
          justify-content: center;
          align-items: center;
        `;

      case "services":
        return css`
          margin-top: 7rem;
        `;

      default:
        break;
    }
  }}
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  color: #fff;

  ${({ section }) => {
    switch (section) {
      case "header":
        return css`
          display: flex;
          justify-content: space-between;
        `;

      default:
        break;
    }
  }}
`;

export default function Layout({ section, background, children }) {
  return (
    <Container section={section}>
      {background && <background.type />}
      <InnerContainer section={section}>{children}</InnerContainer>
    </Container>
  );
}
