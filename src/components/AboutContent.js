import "./AboutContent-styles.css";

import React from "react";
import { motion as m } from "framer-motion";

import ProfilePic from "../assets/profile-pic.png";

const AboutContent = () => {
  return (
    <m.div
      className="about-container"
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="profile-name">
        <div className="desc">
          <h2>
            <span>Arya</span> Agni <span>Pradana</span> Firdaus
          </h2>
          <p>
            Born in 9th January 2001 in Bekasi, Indonesia. I am a fresh graduate
            from Jambi University who graduated in 2023 and pursued a bachelor's
            degree program in Agribusiness. Have an interest and passion in
            website development, motivated to develop a career as a website
            developer. Have a deep understanding of HTML, CSS, Javascript, NPM,
            NodeJS, Bootstrap, Tailwindcss and ReactJS.
          </p>
        </div>
        <img src={ProfilePic} className="pict" alt="Profile" />
      </div>
      <div className="profile-work">
        <div className="desc">
          <h3>
            <span>Front-End Developer</span>
          </h3>
          <p>
            I became interested when I first designed a website via Wordpress
            during college while working part-time as a Secretarial Staff. After
            completing my bachelor's degree in 2023, I began to set myself up
            for a career in programming, especially in application and software
            development.
          </p>
        </div>
        <div className="desc">
          <h3>
            <span>Goals</span>
          </h3>
          <p>
            Having career goals that don't match your studies is difficult. Many
            things have to be relearned starting from the basics to a higher
            level. Although it's a long process, I believe that if I don't stop,
            one day I will achieve it.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default AboutContent;
