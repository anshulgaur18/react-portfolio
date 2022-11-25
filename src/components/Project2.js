import React from "react";
import "./projectCard.css";
import "./ProjectCard";
import "./ProjectCardData";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

const Project2 = () => {
  return (
    <div className="projectCard">
      <h1 className="projectHeading">Projects</h1>
      <div className="projectContainer">
        {ProjectCardData.map((item) => {
          return (<ProjectCard 
           key={item.id}
           imgsrc={item.imgsrc}
           title={item.title}
           text={item.text}
           view={item.view}
           source={item.source}
          />)
        })}
      </div>
    </div>
  );
};

export default Project2;
