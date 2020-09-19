import React from "react";

export const LinksDataContext = React.createContext({
  es: [
    "inicio",
    "servicios",
    "sobre nosotros",
    "programas más utilizados",
    "galería",
    "contacto",
  ],
  en: [
    "home",
    "services",
    "about us",
    "most used programs",
    "gallery",
    "contact",
  ],
});

export const LinksDataProvider = LinksDataContext.Provider;
