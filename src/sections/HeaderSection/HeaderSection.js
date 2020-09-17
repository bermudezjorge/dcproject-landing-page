import React from "react";

import Layout from "components/Layout";
import Logo from "components/Logo";
import Link from "components/Link";

import { LinkList } from "./styles";

import LINK_TITLES from "./linkstitles";

export default function HeaderSection() {
  return (
    <Layout section="header">
      <Logo>DCproject</Logo>
      <LinkList>
        {LINK_TITLES.map((text) => (
          <Link key={text} text={text} />
        ))}
      </LinkList>
    </Layout>
  );
}
