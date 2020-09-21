import React from "react";

export const LinksDataContext = React.createContext({
  es: [
    {
      text: "inicio",
      section: "homeRef",
    },
    {
      text: "servicios",
      section: "servicesRef",
    },
    {
      text: "sobre nosotros",
      section: "aboutUsRef",
    },
    {
      text: "programas más utilizados",
      section: "mostUsedProgramsRef",
    },
    {
      text: "galería",
      section: "galleryRef",
    },
    {
      text: "contacto",
      section: "contactRef",
    },
  ],
  en: [
    {
      text: "home",
      section: "homeRef",
    },
    {
      text: "services",
      section: "servicesRef",
    },
    {
      text: "about us",
      section: "aboutUsRef",
    },
    {
      text: "softwares",
      section: "mostUsedProgramsRef",
    },
    {
      text: "gallery",
      section: "galleryRef",
    },
    {
      text: "contact",
      section: "contactRef",
    },
  ],
});

export const LinksDataProvider = LinksDataContext.Provider;
