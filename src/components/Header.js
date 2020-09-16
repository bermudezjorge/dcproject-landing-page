import React from "react";
import styled from "styled-components";

const HeaderCon = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 4rem;
  background: #000;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: calc(2rem * 10px);
  margin: 0;
  font-weight: bolder;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 400;
`;

const SectionsList = styled.ul`
  display: flex;
  list-style: none;
`;

const Section = styled.li`
  font-size: 0.8rem;
  margin-left: 2rem;
  font-weight: 500;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 600;
  cursor: pointer;
`;

const SECTIONS = ["INICIO", "SERVICIOS", "SOBRE NOSOTROS", "CONTACTO"];

export default function Header() {
  return (
    <HeaderCon>
      <Logo>DCproject</Logo>
      <SectionsList>
        {SECTIONS.map((text) => (
          <Section key={text}>{text}</Section>
        ))}
      </SectionsList>
    </HeaderCon>
  );
}
