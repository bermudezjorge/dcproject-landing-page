import styled from "styled-components";

import bgpic from "assets/img/home_img/home.jpg";

const HomeBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${bgpic});
  background-size: cover;
  filter: brightness(0.7);
  z-index: 0;
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 700;
  margin: 0;
  margin-top: 5rem;
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
  margin-bottom: 5rem;
  text-shadow: -1px 2px 3px #000000aa;
`;

export { HomeBg, HomeTitle, Hr, HomeSubtitle };
