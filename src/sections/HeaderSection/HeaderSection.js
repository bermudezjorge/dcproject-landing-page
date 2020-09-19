import React, { useState } from "react";

import Layout from "components/Layout";
import Logo from "components/Logo";
import BurguerMenu from "components/BurguerMenu";
import LinkList from "components/LinkList";

const BODY = document.querySelector("body");

export default function HeaderSection() {
  const [showMenu, setShowMenu] = useState(false);

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
      <BurguerMenu handleMenu={handleMenu} />
      <LinkList section="header" showMenu={showMenu} handleMenu={handleMenu} />
    </Layout>
  );
}
