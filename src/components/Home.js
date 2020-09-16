import React from "react";
import styled from "styled-components";

import bgpic from "assets/img/home.jpg";

const HomeCon = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const HomeBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${bgpic});
  filter: brightness(0.7);
  z-index: 0;
`;

const InnerCon = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  color: #fff;
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 700;
  margin: 0;
`;

const Hr = styled.hr`
  width: 7rem;
  height: 3px;
  margin: 2rem auto;
  background: #0476d0;
  border: none;
`;

const HomeSubtitle = styled.h3`
  font-size: 1.3rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 400;
  margin: 0;
  text-shadow: -1px 2px 3px #000000aa;
`;

export default function Home() {
  return (
    <HomeCon>
      <HomeBg />
      <InnerCon>
        <HomeTitle>Somos tús freelancers</HomeTitle>
        <Hr />
        <HomeSubtitle>Proyectos en CAD. Oficina Virtual</HomeSubtitle>
      </InnerCon>
    </HomeCon>
  );
}
