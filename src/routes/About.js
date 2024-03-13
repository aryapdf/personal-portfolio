import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

import Catpuccin2 from "../assets/catpuccin-2.webp";
import AboutContent from "../components/AboutContent.js";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImage
        heading="ABOUT"
        text=""
        image={Catpuccin2}
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
