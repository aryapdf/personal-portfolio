import "./WorkCard-styles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";
import { motion as m } from "framer-motion";

const Work = () => {
  return (
    <m.div
      className="work-container"
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
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
    </m.div>
  );
};

export default Work;
