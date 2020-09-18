import React from "react";
import styled, { css } from "styled-components";

const StyledLinkList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  ${({ section }) => {
    switch (section) {
      case "footer":
        return css`
          justify-content: center;
        `;

      default:
        break;
    }
  }}
`;

export default function LinkList({ children, section }) {
  return <StyledLinkList section={section}>{children}</StyledLinkList>;
}
