import React from "react";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";

import {
  ContactDataContainer,
  ContactData,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from "./styles";

import { CONTACT_DATA, FORM_INFO } from "./contactdata";

export default function ContactSection() {
  return (
    <Layout section="contact">
      <SectionTitle title="contacto" />
      <ContactDataContainer>
        {CONTACT_DATA.map(({ important, text }) => (
          <ContactData key={text} important={important}>
            {text}
          </ContactData>
        ))}
      </ContactDataContainer>
      <StyledForm>
        {FORM_INFO.map(({ tag, type, label, placeholder, required }) => {
          if (tag === "input") {
            return (
              <StyledLabel required={required}>
                {label}
                <StyledInput type={type} placeholder={placeholder} />
              </StyledLabel>
            );
          } else {
            return (
              <StyledLabel required={required}>
                {label}
                <StyledTextarea placeholder={placeholder}></StyledTextarea>
              </StyledLabel>
            );
          }
        })}
        <Button text="enviar" section="contact" />
      </StyledForm>
    </Layout>
  );
}
