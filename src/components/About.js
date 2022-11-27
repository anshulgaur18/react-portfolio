import React from "react";

import Header2 from './Header2';

import AboutContent from "./AboutContent";

const About = () => {
  return (
    <div id="about" style={{marginTop:"5rem"}}>
     
      <Header2 heading="ABOUT" text="I am a front end developer"/>
      <AboutContent/>
  
    </div>
  );
};

export default About;
