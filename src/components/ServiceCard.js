import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border: 1px solid #e3e5e8;
  margin-left: 1rem;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: none;
    box-shadow: 0px 33px 33px -16px #00000021;
    transform: translateY(-7px);
  }
  &:first-of-type {
    margin: 0;
  }
  &:hover > img {
    width: 100%;
    height: 100%;
    border-radius: 0;
    filter: brightness(0.7);
    position: absolute;
    z-index: 0;
  }
  &:hover > h1 {
    transition: 0.2s all;
    color: white;
    transform: scale(1.2);
  }
  &:hover > h3 {
    transition: 0.2s all;
    color: white;
    transform: scale(1.2);
  }
`;
const Img = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 10rem;
  transition: 0.3s all;
`;
const Title = styled.h1`
  font-size: 1.2rem;
  color: #000;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 500;
  z-index: 1;
`;
const Description = styled.h3`
  width: 80%;
  font-size: 0.9rem;
  color: #595959;
  font-family: "RobotoSlab";
  font-variation-settings: "wght" 200;
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
