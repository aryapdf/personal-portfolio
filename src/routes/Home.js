import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CV from "../components/CV";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <div>
      <NavBar />
      <AnimatePresence>
        <HeroSection />
        <CV />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Home;
