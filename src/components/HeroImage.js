import "./HeroImage-style.css";

import React, { Component } from "react";
import { motion as m } from "framer-motion";

class HeroImage extends Component {
  render() {
    return (
      <m.div
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hero-img"
      >
        <img className="terminal-img" src={this.props.image} alt="Terminal" />
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </m.div>
    );
  }
}

export default HeroImage;
