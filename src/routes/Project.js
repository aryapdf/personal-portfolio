import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

import Terminal from "../assets/terminal-catp.png";
import Work from "../components/Work";

import { AnimatePresence } from "framer-motion";

const Project = () => {
  return (
    <div id="project">
      <NavBar />
      <AnimatePresence>
        <HeroImage
          heading="PROJECTS"
          text="Developers who are always ready and eager to work on new projects. So far..."
          image={Terminal}
        />
        <Work />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Project;
