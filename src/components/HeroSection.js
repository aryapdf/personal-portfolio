import "./HeroSection-styles.css";

import React from "react";
import { Link } from "react-router-dom";
//Import Image
import Catpuccin from "../assets/catpuccin.png";
import {
  FaCommentDots,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaProjectDiagram,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import { SiVisualstudio } from "react-icons/si";

//animation
import { motion as m } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="home">
      <div className="container">
        <m.div
          className="jumbotron"
          initial={{
            opacity: 0,
            x: -150,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="content-2">
            <h1>Hello! I'm Arya Pradana</h1>
            <h2>
              A website developer and musician who loves to explore and learn
              new things- and a bit too much of a Catpuccin fan.
            </h2>
            <div className="buttons">
              <Link to="/project" className="btn btn-primary">
                <FaProjectDiagram size={15} /> My Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <FaCommentDots size={15} /> Contact Me?
              </Link>
            </div>
          </div>
          <div className="content-1">
            <img className="img-catpuccin" src={Catpuccin} alt="Catpuccin" />
          </div>
        </m.div>
        <m.div
          className="skills"
          initial={{
            opacity: 0,
            x: 150,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {" "}
          <div className="skillset">
            <p>
              <SiVisualstudio color="89b4fa" />
            </p>
            <p>
              <FaWordpress color="30353a" />
            </p>
            <p>
              <FaHtml5 color="#ed8796" />
            </p>
            <p>
              <FaCss3 color="#89dceb" />
            </p>
            <p>
              <FaJs color="#f9e2af" />
            </p>
            <p>
              <FaNpm color="#c53635" />
            </p>
            <p>
              <FaNodeJs color="#a6da95" />
            </p>
            <p>
              <FaReact color="#89dceb" />
            </p>
          </div>
          <div className="skilldesc">
            <h3>Diligent, Skillful, and Detail Oriented</h3>
            <p>
              As a developer, learning the existing tech-stack and staying
              up-to-date with the latest technology is a must. Never stop
              learning.
            </p>
            <Link
              to="https://github.com/aryapdf"
              className="btn btn-primary"
              target="_blank"
            >
              <FaGithub size={15} /> My Github
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;
