import React from "react";

export const LinksDataContext = React.createContext([
  "inicio",
  "servicios",
  "sobre nosotros",
  "programas más utilizados",
  "galería",
  "contacto",
]);

export const LinksDataProvider = LinksDataContext.Provider;
