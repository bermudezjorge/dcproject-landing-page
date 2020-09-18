import React, { useContext } from "react";

import { LinksDataContext } from "context/linkcontext";

import Layout from "components/Layout";
import Logo from "components/Logo";
import LinkList from "components/LinkList";
import Link from "components/Link";

export default function HeaderSection() {
  const LINKS = useContext(LinksDataContext);
  return (
    <Layout section="header">
      <Logo>DCproject</Logo>
      <LinkList section="header">
        {LINKS.map((text) => (
          <Link key={text} text={text} />
        ))}
      </LinkList>
    </Layout>
  );
}
