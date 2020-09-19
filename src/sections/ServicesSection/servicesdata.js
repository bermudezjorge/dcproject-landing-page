import dibujos from "assets/img/services_img/dibujos.jpg";
import digitalizacion from "assets/img/services_img/digitalizacion.jpg";
import generacion from "assets/img/services_img/generacion.webp";
import geomatica from "assets/img/services_img/geomatica.jpg";

const SERVICES_DATA = {
  es: [
    {
      img: dibujos,
      title: "Dibujos 2D, 3D",
      description:
        "Utilizamos como herramientas software Autodesk, especificamente AutoCAD, Civil3D.",
    },
    {
      img: digitalizacion,
      title: "Digitalización de Planos",
      description: "Se transfiere de papel a digital usando Autocad, Revit.",
    },
    {
      img: generacion,
      title: "Generación de Planos",
      description:
        "Elaboramos planos civiles, topográficos, eléctricos y de arquitectura.",
    },
    {
      img: geomatica,
      title: "Geomática",
      description:
        "Generamos mapas usando programas como ArcGIS, Global Mapper, QGIS.",
    },
  ],
  en: [
    {
      img: dibujos,
      title: "Sketchs 2D, 3D",
      description:
        "We use software tools like Autodesk, specifically AutoCAD, Civil3D.",
    },
    {
      img: digitalizacion,
      title: "Plans Digitalization",
      description: "Transferred from paper to digital using Autocad, Revit.",
    },
    {
      img: generacion,
      title: "Plans Generation",
      description:
        "We elaborate civil, topographic, electrical and architectural plans.",
    },
    {
      img: geomatica,
      title: "Geomatics",
      description:
        "Generate maps using programs like ArcGIS, Global Mapper, QGIS.",
    },
  ],
};

export default SERVICES_DATA;
