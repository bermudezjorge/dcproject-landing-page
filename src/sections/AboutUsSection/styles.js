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
`;

const AboutUsDataWrapper = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

const AboutUsDataTitle = styled.h1`
  line-height: 33px;
  margin: 0;
  font-size: 1.7rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 400;
`;

const AboutUsDataParagraph = styled.p`
  width: 70%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 1rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 300;
`;

const AboutUsDataShowMore = styled.span`
  font-size: 0.7rem;
  font-variation-settings: "wght" 500;
  color: #0476d0;
  cursor: pointer;
`;

const MostUsedTitle = styled.h1`
  line-height: 33px;
  margin: 0;
  font-size: 1.9rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 500;
`;

const ProgramsUl = styled.ul`
  width: 70%;
  display: grid;
  grid-gap: 3rem 0;
  grid-template-columns: 50% 50%;
  text-align: center;
  list-style: none;
  margin: 0 auto;
  margin-top: 3rem;
`;

const ProgramsLi = styled.li`
  font-size: 1.5rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 500;
  color: #000;
`;

export {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataWrapper,
  AboutUsDataTitle,
  AboutUsDataParagraph,
  AboutUsDataShowMore,
  MostUsedTitle,
  ProgramsUl,
  ProgramsLi,
};
