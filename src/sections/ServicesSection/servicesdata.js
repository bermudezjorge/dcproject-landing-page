import dibujos from "assets/img/services_img/dibujos.jpg";
import digitalizacion from "assets/img/services_img/digitalizacion.jpg";
import generacion from "assets/img/services_img/generacion.webp";
import geomatica from "assets/img/services_img/geomatica.jpg";

const SERVICES_DATA = [
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
];

export default SERVICES_DATA;
