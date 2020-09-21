import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButtonLink = styled.a`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 7px;
  font-size: 22px;
  margin-left: 1.5rem;
  color: #00e676;
  text-decoration: none;
  @media (max-width: 640px) {
    margin-left: 0;
    margin-right: 1rem;
  }
`;

export default function ContactButton() {
  return (
    <StyledButtonLink
      href="https://wa.me/+56946106225"
      target="_blank"
      rel="nooponner"
    >
      <FontAwesomeIcon icon={["fab", "whatsapp"]} />
    </StyledButtonLink>
  );
}
