import React from "react";
import styled, { css } from "styled-components";

const MarginBetweenSection = css`
  margin-top: 7rem;
`;

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
          @media (max-width: 640px) {
            padding: 0 2rem;
          }
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
        return MarginBetweenSection;

      case "about-us":
        return css`
          ${MarginBetweenSection};
          background: #f1f1f1;
          padding: 5rem 0;
        `;

      case "most-used-programs":
        return MarginBetweenSection;

      case "gallery":
        return css`
          ${MarginBetweenSection};
          background: #f1f1f1;
          padding: 5rem 0;
        `;

      case "contact":
        return MarginBetweenSection;

      case "footer":
        return css`
          margin-top: 7rem;
          padding: 2rem 0;
          justify-content: center;
          align-items: center;
          background: #000;
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
          max-width: 100%;
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
