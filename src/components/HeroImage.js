import "./HeroImage-style.css";

import React, { Component } from "react";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-img">
        <img className="terminal-img" src={this.props.image} alt="Terminal" />
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
