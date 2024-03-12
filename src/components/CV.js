import "./CV-styles.css";

import React from "react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CV = () => {
  //Make Download CV Function

  return (
    <section className="CV">
      <div className="container">
        <div className="content">
          <h2>Experience</h2>
          <div className="exp">
            <h3>Front-End Developer at Dicoding</h3>
            <p>Internship, Aug 2022 - Dec 2022</p>
          </div>
          <div className="border"></div>
          <div className="exp">
            <h3>Secretarial Staff, Faculty of Agriculture</h3>
            <p>Part Time, Apr 2022 - Aug 2022</p>
          </div>
        </div>
        <div className="content">
          <h2>Education</h2>
          <div className="exp">
            <h3>University of Jambi</h3>
            <p>Bachelor of Agribusiness, 2019 - 2023</p>
          </div>
          <div className="border"></div>
          <div className="exp">
            <h3>SMA N 3 Cikarang Utara</h3>
            <p>Senior High School, 2016 - 2019</p>
          </div>
        </div>
        <div className="selected">
          <h2>Selected Works</h2>

        </div>
      </div>

      <div className="button">
        <Link className="btn btn-cv">
          About Me <FaArrowUpRightFromSquare size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CV;
