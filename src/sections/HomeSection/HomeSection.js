import React, { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import Button from "components/Button";

import {
  HomeBg,
  HomeDataContainer,
  HomeTitle,
  Hr,
  HomeSubtitle,
} from "./styles";

import HOME_DATA from "./homedata";

export default function HomeSection({ getRef }) {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout section="home" getRef={getRef} background={<HomeBg />}>
      <HomeDataContainer>
        <HomeTitle>{HOME_DATA[lang].title}</HomeTitle>
        <Hr />
        <HomeSubtitle>{HOME_DATA[lang].subtitle}</HomeSubtitle>
        <Button text={HOME_DATA[lang].button} section="home" />
      </HomeDataContainer>
    </Layout>
  );
}
