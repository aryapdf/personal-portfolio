import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

import Catpuccin2 from "../assets/viyo-catp.png";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="CONTACT" text=" " image={Catpuccin2} />
      <Footer />
    </div>
  );
};

export default Contact;
