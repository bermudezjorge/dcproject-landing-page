import React from "react";
import styled from "styled-components";

const BurguerMenuStyles = styled.div`
  width: 40px;
  height: 3px;
  display: none;
  background: #fff;
  position: relative;
  &::before {
    content: "";
    width: 40px;
    height: 3px;
    position: absolute;
    top: -10px;
    left: 0;
    background: #fff;
  }
  &::after {
    content: "";
    width: 40px;
    height: 3px;
    position: absolute;
    bottom: -10px;
    left: 0;
    background: #fff;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;

export default function BurguerMenu({ handleMenu }) {
  return <BurguerMenuStyles onClick={() => handleMenu(true)} />;
}
