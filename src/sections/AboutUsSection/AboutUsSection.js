import React, { useState } from "react";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import {
  AboutUsContainer,
  AboutUsDataContainer,
  AboutUsDataWrapper,
  AboutUsDataTitle,
  AboutUsDataParagraph,
  AboutUsDataShowMore,
  MostUsedTitle,
  ProgramsUl,
  ProgramsLi,
} from "./styles";

export default function AboutUsSection() {
  const [showMore, setShowMore] = useState(false);
  return (
    <Layout section="about-us">
      <AboutUsContainer>
        <SectionTitle title="Sobre nosotros" subtitle="Un poco de nosotros" />
        <AboutUsDataContainer>
          <AboutUsDataWrapper>
            <AboutUsDataTitle>Quienes somos</AboutUsDataTitle>
            <AboutUsDataParagraph>
              Somos un pequeño grupo de especialistas en diferentes áreas de la
              Ingeniería: Civil, electricidad, topografía, geología. Ingeniero
              Civil, Geomática, Geología,{" "}
              {showMore ? (
                <span>
                  todos con un gran dominio en Dibujo de planos, cálculos y la
                  orientación que necesite nuestro cliente para ayudarle en
                  bajar esa montaña de trabajo.
                </span>
              ) : (
                <AboutUsDataShowMore onClick={() => setShowMore(true)}>
                  VER MAS
                </AboutUsDataShowMore>
              )}
            </AboutUsDataParagraph>

            <AboutUsDataTitle>Como trabajamos</AboutUsDataTitle>
            <AboutUsDataParagraph>
              Online , comunicación con el cliente por video llamada, por
              llamada telefónica y/o correo. A la comodidad de nuestro cliente.
            </AboutUsDataParagraph>

            <AboutUsDataTitle>Nuestra Meta</AboutUsDataTitle>
            <AboutUsDataParagraph>
              Es mirar hacia adelante , el cómo mejorar la vida de las personas
              sean empresas o no, utilizando nuestro apoyo profesional.
            </AboutUsDataParagraph>
          </AboutUsDataWrapper>
          <AboutUsDataWrapper>
            <MostUsedTitle>PROGRAMAS QUE MANEJAMOS</MostUsedTitle>
            <ProgramsUl>
              <ProgramsLi>AutoCAD</ProgramsLi>
              <ProgramsLi>Civil 3D</ProgramsLi>
              <ProgramsLi>CivilCAD</ProgramsLi>
              <ProgramsLi>Revit</ProgramsLi>
              <ProgramsLi>Global Mapper</ProgramsLi>
              <ProgramsLi>ArcGis</ProgramsLi>
              <ProgramsLi>QGIS</ProgramsLi>
            </ProgramsUl>
          </AboutUsDataWrapper>
        </AboutUsDataContainer>
      </AboutUsContainer>
    </Layout>
  );
}
