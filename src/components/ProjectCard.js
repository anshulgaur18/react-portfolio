import React from "react";
import "./projectCard.css";
import "./ProjectCardData";


const ProjectCard = ({imgsrc,title,text,view,source}) => {
  return (
  
        <div className="projectCardDiv">
          <img src={imgsrc} alt="Project img" />
          <h2 className="proTitle">{title}</h2>
          <div className="proDetails">
            <p>{text}</p>{" "}
          </div>
          <div className="proBtn">
            <a
              href={view}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View
            </a>
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Source
            </a>
          </div>
        </div>
     
  );
};

export default ProjectCard;
