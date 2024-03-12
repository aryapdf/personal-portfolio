import "./HeroSection-styles.css";

import React from "react";
import { Link } from "react-router-dom";
//Import Image
import Catpuccin from "../assets/catpuccin.png";
import {
  FaCommentDots,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaProjectDiagram,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import { SiVisualstudio, SiPostman } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="jumbotron">
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
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <p>
            Some of my skills that I learned as a Front-End Website Developer.
            Starting from creating websites using wordpress in college, to
            learning websites as a whole such as HTML, CSS, JavaScript to
            Frameworks in the Front-End section.
          </p>
          <div className="skillset">
            <p>
              <SiVisualstudio color="89b4fa" />
            </p>
            <p>
              <FaWordpress color="30353a" />
            </p>
            <p>
              <SiPostman color="fab387" />
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
          <p>And still learning..</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
