import styled from "styled-components";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  box-sizing: border-box;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    & > div {
      margin-left: 0;
      margin-bottom: 2rem;
    }
  }
`;

export { ServicesContainer };
