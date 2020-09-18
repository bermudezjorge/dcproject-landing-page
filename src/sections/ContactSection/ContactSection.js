import React from "react";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import {
  ContactDataContainer,
  ContactData,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from "./styles";

import CONTACT_DATA from "./contactdata";

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
        <StyledLabel>
          ¿En que podemos ayudarle?
          <StyledTextarea placeholder="Escribanos su mensaje"></StyledTextarea>
        </StyledLabel>
        <StyledLabel>
          ¿Quieres adjuntar un archivo?
          <StyledInput type="file" />
        </StyledLabel>
        <StyledLabel>
          Teléfono de contacto
          <StyledInput type="number" placeholder="(Opcional)" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledInput type="email" placeholder="Email al cual responderle" />
        </StyledLabel>
        <StyledLabel>
          ¿Cual es su nombre?
          <StyledInput type="text" placeholder="Yo soy Abigail, ¿y tú?" />
        </StyledLabel>
      </StyledForm>
    </Layout>
  );
}
