import "./HeroSection-styles.css";

import React from "react";
import { Link } from "react-router-dom";
//Import Image
import Catpuccin from "../assets/catpuccin.png";
import { FaCommentDots, FaProjectDiagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="home">
      <div className="wallpaper">
        <div className="mask"></div>
      </div>
      <div className="container">
        <div className="jumbotron">
          <div className="content-2">
            <h1>Arya Agni Pradana Firdaus</h1>
            <h2>
              A website developer and musician who loves to explore and learn
              new things- and a bit too much of a Catpuccin fan.
            </h2>
            <div className="buttons">
              <Link to="/project" className="btn-primary">
                <FaProjectDiagram size={15} /> My Projects
              </Link>
              <Link to="/contact" className="btn-secondary">
                <FaCommentDots size={15} /> Contact Me?
              </Link>
            </div>
          </div>
          <div className="content-1">
            <img className="img-catpuccin" src={Catpuccin} alt="Catpuccin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
