import React, { useContext } from "react";

import { LinksDataContext } from "context/linkcontext";

import Layout from "components/Layout";
import LinkList from "components/LinkList";
import Link from "components/Link";

import { CopyrightText } from "./styles";

export default function FooterSection() {
  const LINKS = useContext(LinksDataContext);

  return (
    <Layout section="footer">
      <LinkList section="footer">
        {LINKS.map((text) => (
          <Link key={text} text={text} />
        ))}
      </LinkList>
      <CopyrightText>
        Copyright © 2020 Todos los derechos reservados - DCProject
      </CopyrightText>
    </Layout>
  );
}
