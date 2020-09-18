import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  margin-left: 1rem;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transition: 0.5s box-shadow;
    box-shadow: 0px 33px 33px -16px #00000021;
    justify-content: center;
  }
  &:first-of-type {
    margin: 0;
  }
  &:hover > img {
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin-top: 0px;
    filter: brightness(0.3);
    position: absolute;
    z-index: 0;
  }
  &:hover > h1 {
    transition: 0.5s all;
    color: white;
    transform: scale(1.2);
  }
  &:hover > h3 {
    margin-top: 2rem;
    transition: 0.5s all;
    color: white;
    transform: scale(1.2);
  }
`;
const Img = styled.img`
  transition: 0.7s all;
  width: 9rem;
  height: 9rem;
  border-radius: 10rem;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-size: 1.6rem;
  color: #000;
  font-family: "RobotoCondesed";
  font-weight: 900;
  margin: 1rem 0 0 0;
  z-index: 1;
`;
const Description = styled.h3`
  width: 80%;
  font-size: 1rem;
  color: #595959;
  font-family: "Cabin";
  font-variation-settings: "wdth" 100, "wght" 400;
  z-index: 1;
`;

export default function ServiceCard({ img, title, description }) {
  return (
    <Container>
      <Img src={img} alt="imagen de servicio" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
