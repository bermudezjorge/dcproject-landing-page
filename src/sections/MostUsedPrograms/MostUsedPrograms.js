import React from "react";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import { MostUsedProgramsContainer, MostUsedProgramsTitle } from "./styles";

import PROGRAMS_DATA from "./programsdata";

export default function MostUsedPrograms() {
  return (
    <Layout section="most-used-programs">
      <SectionTitle title="programas más utilizados" />
      <MostUsedProgramsContainer>
        {PROGRAMS_DATA.map((program) => (
          <MostUsedProgramsTitle key={program}>{program}</MostUsedProgramsTitle>
        ))}
      </MostUsedProgramsContainer>
    </Layout>
  );
}
