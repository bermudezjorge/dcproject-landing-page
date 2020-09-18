import styled from "styled-components";

const AboutUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const AboutUsDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #000;
`;

const AboutUsDataTitle = styled.h1`
  line-height: 33px;
  margin: 0;
  font-size: 1.8rem;
  letter-spacing: 2px;
  font-family: "RobotoCondesed";
  font-weight: 900;
`;

const AboutUsDataParagraph = styled.p`
  width: 90%;
  margin: 1rem auto 3rem 1rem;
  font-size: 1.1rem;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 400;
`;

export {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataTitle,
  AboutUsDataParagraph,
};
