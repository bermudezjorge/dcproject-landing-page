import React from "react";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ServiceCard from "components/ServiceCard";

import { ServicesContainer } from "./styles";

import SERVICES_DATA from "./servicesdata";

export default function ServicesSection() {
  return (
    <Layout section="services">
      <SectionTitle title="Services" subtitle="Nuestras habilidades" />
      <ServicesContainer>
        {SERVICES_DATA.map(({ img, title, description }) => (
          <ServiceCard
            key={title}
            img={img}
            title={title}
            description={description}
          />
        ))}
      </ServicesContainer>
    </Layout>
  );
}
