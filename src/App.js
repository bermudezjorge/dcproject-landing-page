import React from "react";
import styled from "styled-components";

import HeaderSection from "sections/HeaderSection";
import HomeSection from "sections/HomeSection";
import ServicesSection from "sections/ServicesSection";

const AppCon = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  background-color: #fff;
`;

export default function App() {
  return (
    <AppCon>
      <HeaderSection />
      <HomeSection />
      <ServicesSection />
    </AppCon>
  );
}
