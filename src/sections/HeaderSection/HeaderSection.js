import React, { useState, useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import Logo from "components/Logo";
import BurguerMenu from "components/BurguerMenu";
import LinkList from "components/LinkList";
import LanguageButton from "components/LanguageButton";

import { RightSideContainer } from "./styles";

const BODY = document.querySelector("body");

export default function HeaderSection() {
  const [showMenu, setShowMenu] = useState(false);

  const { lang, setLang } = useContext(LanguageContext);

  const handleMenu = (show) => {
    if (show) {
      BODY.style.overflow = "hidden";
    } else {
      BODY.style.overflow = "scroll";
    }
    setShowMenu(show);
  };

  return (
    <Layout section="header">
      <Logo>DCproject</Logo>
      <RightSideContainer>
        <BurguerMenu handleMenu={handleMenu} />
        {(showMenu && window.matchMedia("(max-width: 640px)")).matches ||
        window.matchMedia("(min-width: 1024px)").matches ? (
          <LinkList section="header" handleMenu={handleMenu} />
        ) : null}
        <LanguageButton lang={lang} setLang={setLang} />
      </RightSideContainer>
    </Layout>
  );
}
