import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

import Terminal from "../assets/terminal-catp.png";

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImage
        heading="PROJECTS"
        text="This is some of my recent work.."
        image={Terminal}
      />
      <Footer />
    </div>
  );
};

export default Project;
