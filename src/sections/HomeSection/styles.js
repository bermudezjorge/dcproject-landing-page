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
  background-attachment: fixed;
  filter: brightness(0.5);
  z-index: 0;
`;

const HomeTitle = styled.h1`
  font-size: 60px;
  font-family: "RobotoCondesed-Bold";
  font-weight: 500;
  margin: 0;
  margin-top: 5rem;
  color: #fff;
`;

const Hr = styled.hr`
  margin: 1.5rem auto 2rem auto;
  width: 120px;
  border: 0;
  border-top: 5px solid #0476d0;
`;

const HomeSubtitle = styled.h3`
  font-size: 24px;
  font-family: "RobotoCondesed";
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 3rem;
  text-shadow: 1px 1px 3px #000000a1;
  opacity: 0.7;
  color: #fff;
`;

export { HomeBg, HomeTitle, Hr, HomeSubtitle };
