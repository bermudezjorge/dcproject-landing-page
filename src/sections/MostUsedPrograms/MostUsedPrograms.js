import React, { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import { MostUsedProgramsContainer, MostUsedProgramsTitle } from "./styles";

import PROGRAMS_DATA from "./programsdata";

export default function MostUsedPrograms({ getRef }) {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout section="most-used-programs" getRef={getRef}>
      <SectionTitle
        title={lang === "es" ? "programas más utilizados" : "softwares"}
      />
      <MostUsedProgramsContainer>
        {PROGRAMS_DATA.map((program) => (
          <MostUsedProgramsTitle key={program}>{program}</MostUsedProgramsTitle>
        ))}
      </MostUsedProgramsContainer>
    </Layout>
  );
}
