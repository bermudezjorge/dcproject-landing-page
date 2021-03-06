import styled from "styled-components";

const AboutUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const AboutUsDataContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #000;
`;

const AboutUsDataTitle = styled.h1`
  line-height: 33px;
  margin: 0;
  font-size: 25px;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  @media (max-width: 640px) {
    font-size: 22px;
  }
`;

const AboutUsDataParagraph = styled.p`
  width: 90%;
  margin: 1rem auto 3rem 1rem;
  font-size: 16px;
  font-family: "Roboto-Thin";
  font-weight: 900;
  @media (max-width: 640px) {
    width: 80%;
  }
`;

const AboutUsImg = styled.img`
  width: 500px;
  margin: 1rem auto 3rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataTitle,
  AboutUsDataParagraph,
  AboutUsImg,
};
