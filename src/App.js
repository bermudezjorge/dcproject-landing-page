import React from "react";
import styled from "styled-components";

import Header from "components/Header";
import Home from "components/Home";

const AppCon = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  background-color: #fff;
`;

export default function App() {
  return (
    <AppCon>
      <Header />
      <Home />
    </AppCon>
  );
}
