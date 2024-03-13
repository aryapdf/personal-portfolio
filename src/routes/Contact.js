import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import ContactUs from "../components/ContactUs";

import Catpuccin2 from "../assets/viyo-catp.png";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="CONTACT" text=" " image={Catpuccin2} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
