import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "assets/css/carousel.css";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import GALLERY_DATA from "./gallerydata";

export default function GallerySection() {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout section="gallery">
      <SectionTitle title={lang === "es" ? "galería" : "gallery"} />
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showIndicators={false}
          showStatus={false}
        >
          {GALLERY_DATA.map((img) => (
            <img key={img} src={img} alt="imagen de portafolio" />
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}
