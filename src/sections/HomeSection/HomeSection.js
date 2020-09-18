import React from "react";

import Layout from "components/Layout";
import Button from "components/Button";

import { HomeBg, HomeTitle, Hr, HomeSubtitle } from "./styles";

import HOME_DATA from "./homedata";

export default function HomeSection() {
  return (
    <Layout section="home" background={<HomeBg />}>
      <HomeTitle>{HOME_DATA.title}</HomeTitle>
      <Hr />
      <HomeSubtitle>{HOME_DATA.subtitle}</HomeSubtitle>
      <Button text={HOME_DATA.button} section="home" />
    </Layout>
  );
}
