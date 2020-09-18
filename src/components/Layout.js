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
          width: 100%;
          height: 90px;
          justify-content: space-between;
          align-items: center;
          padding: 0 4rem;
          background: #000;
          position: relative;
          position: fixed;
          top: 0;
          z-index: 100;
        `;

      case "home":
        return css`
          height: calc(75vh - 90px);
          position: relative;
          justify-content: center;
          align-items: center;
          margin-top: 90px;
        `;

      case "services":
        return css`
          margin-top: 7rem;
        `;

      case "about-us":
        return css`
          margin-top: 7rem;
          background: #f8f7f9;
          padding: 5rem 0;
        `;

      case "most-used-programs":
        return css`
          margin-top: 7rem;
        `;

      case "gallery":
        return css`
          margin-top: 7rem;
          background: #f8f7f9;
          padding: 5rem 0;
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
          align-items: center;
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
