import React from "react";
import { Carousel } from "react-responsive-carousel";
import "assets/css/carousel.css";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";

import GALLERY_DATA from "./gallerydata";

export default function GallerySection() {
  return (
    <Layout section="gallery">
      <SectionTitle title="galería" />
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
