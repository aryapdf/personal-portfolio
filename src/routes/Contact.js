import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import ContactUs from "../components/ContactUs";

import Catpuccin2 from "../assets/viyo-catp.png";
import { AnimatePresence } from "framer-motion";
const Contact = () => {
  return (
    <div id="contact">
      <NavBar />
      <AnimatePresence>
        <HeroImage heading="CONTACT" text=" " image={Catpuccin2} />
        <ContactUs />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Contact;
