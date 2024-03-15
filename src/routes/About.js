import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

import Catpuccin2 from "../assets/catpuccin-2.webp";
import AboutContent from "../components/AboutContent.js";
import { AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <div id="about">
      <NavBar />
      <AnimatePresence>
        <HeroImage heading="ABOUT" text="" image={Catpuccin2} />
        <AboutContent />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default About;
