import "./WorkCard-styles.css";

import React from "react";
import { NavLink } from "react-router-dom";



import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project"></img>
      <h3 className="project-title">{props.title}</h3>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="">
            <FaExternalLinkAlt size={22} />
          </NavLink>
          <NavLink to={props.source} className="">
            <FaGithub size={25} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
