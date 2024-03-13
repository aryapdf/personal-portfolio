import "./CV-styles.css";
import "./WorkCard-styles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";

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
        <div className="button">
          <Link className="btn btn-secondary" to='./about'>
            About Me <FaArrowUpRightFromSquare size={16} />
          </Link>
        </div>
        <div className="selected">
          <h2>Selected Works</h2>
          <p>These are two of my favorite projects. Or at least.. the recent project i have been worked on.</p>
          <div className="project-container">
            {WorkCardData.slice(0, 2).map((val, ind) => {
              return (
                <WorkCard
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  text={val.text}
                  view={val.view}
                  source={val.source}
                />
              );
            })}
          </div>
        </div>
        <div className="chat">
          <p>Have a project in mind?</p>
          <h2>Let's Have a chat!</h2>
          <Link to="/contact" className="btn btn-primary">
            <FaCommentDots size={15} /> Contact Me!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CV;
