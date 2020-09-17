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
  font-size: 3.3rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 700;
  margin: 0;
  margin-top: 5rem;
  color: #fff;
`;

const Hr = styled.hr`
  width: 12rem;
  height: 5px;
  margin: 1.2rem auto;
  background: #0476d0;
  border: none;
  border-radius: 50px;
`;

const HomeSubtitle = styled.h3`
  font-size: 1.3rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 400;
  margin: 0;
  margin-bottom: 5rem;
  text-shadow: -1px 1px 3px #000000aa;
  color: #fff;
`;

export { HomeBg, HomeTitle, Hr, HomeSubtitle };
