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
  font-size: 45px;
  font-family: "Roboto-Bold";
  font-weight: 900;
  margin: 0;
  margin-top: 5rem;
  color: #fff;
  z-index: 1;
`;

const Hr = styled.hr`
  margin: 1.5rem auto 2rem auto;
  width: 120px;
  border: 0;
  border-top: 3px solid #0476d0;
  z-index: 1;
`;

const HomeSubtitle = styled.h3`
  font-size: 16px;
  font-family: "Roboto-Regular";
  font-weight: 500;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 3rem;
  text-shadow: 1px 1px 3px #000000a1;
  opacity: 0.8;
  color: #fff;
  z-index: 1;
`;

export { HomeBg, HomeTitle, Hr, HomeSubtitle };
