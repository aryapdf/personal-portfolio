import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

import Catpuccin2 from "../assets/catpuccin-2.webp"

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading='ABOUT' text='A friendly Front-End Developer and eager Musician.' image={Catpuccin2}/>
      <Footer />
    </div>
  );
};

export default About;
