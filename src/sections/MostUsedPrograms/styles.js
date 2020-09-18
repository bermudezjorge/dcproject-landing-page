import styled from "styled-components";

const MostUsedProgramsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const MostUsedProgramsTitle = styled.h2`
  line-height: 33px;
  margin: 0;
  font-size: 24px;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  font-weight: 600;
  color: #000;
  margin-top: 1rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

export { MostUsedProgramsContainer, MostUsedProgramsTitle };
