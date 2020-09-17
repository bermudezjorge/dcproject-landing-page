import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 600;
  margin: 0;
  color: #000;
`;

const Subtitle = styled.h3`
  font-size: 0.7rem;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 350;
  background: #e3e5e8;
  padding: 0.3rem 0.6rem;
  margin: 0;
  margin-top: 0.5rem;
  border-radius: 10rem;
  color: #000;
`;

export default function SectionTitle({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
