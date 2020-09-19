import styled from "styled-components";

const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: row-reverse;
  }
`;

export { RightSideContainer };
