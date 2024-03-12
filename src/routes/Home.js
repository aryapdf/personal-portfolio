import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CV from "../components/CV";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CV />
      <Footer />
    </div>
  );
};

export default Home;
