import React from "react";
import "./aboutContent.css";
import { Link } from "react-router-dom";
import {FaDownload} from "react-icons/fa"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="aboutContent">
        {" "}
        <h1>About Me</h1>
        <div className="aboutWrap">
        <div className="aboutText">
        <p>
          I am extremely proficient in Front-End Development using HTML5,
          Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js
          and continuously engage in trying to extend my skills with new
          technology.
        </p>
        </div>
       <div className="aboutButtons">
       <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <a href="../assests/Anshul_Singh_Gaur_.docx" target="_blank">
          <button className="btn"><FaDownload />Download resume</button>
        </a>
       </div>
       
        </div>
       
      </div>
    </div>
  );
};

export default AboutContent;
