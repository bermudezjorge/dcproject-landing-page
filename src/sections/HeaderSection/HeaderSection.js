import React, { useContext, useState } from "react";

import { LinksDataContext } from "context/linkcontext";

import Layout from "components/Layout";
import Logo from "components/Logo";
import BurguerMenu from "components/BurguerMenu";
import LinkList from "components/LinkList";
import Link from "components/Link";

const BODY = document.querySelector("body");

export default function HeaderSection() {
  const [showMenu, setShowMenu] = useState(false);
  const LINKS = useContext(LinksDataContext);

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
      {showMenu && (
        <LinkList section="header">
          <div id="close" onClick={() => handleMenu(false)}>
            &times;
          </div>
          {LINKS.map((text) => (
            <Link key={text} text={text} />
          ))}
        </LinkList>
      )}
    </Layout>
  );
}
