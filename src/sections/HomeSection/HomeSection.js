import React from "react";

import Layout from "components/Layout";
import Button from "components/Button";

import { HomeBg, HomeTitle, Hr, HomeSubtitle } from "./styles";

export default function HomeSection() {
  return (
    <Layout section="home" background={<HomeBg />}>
      <HomeTitle>Somos tús freelancers</HomeTitle>
      <Hr />
      <HomeSubtitle>Proyectos en CAD. Oficina Virtual</HomeSubtitle>
      <Button text="CONTACTANOS" />
    </Layout>
  );
}
