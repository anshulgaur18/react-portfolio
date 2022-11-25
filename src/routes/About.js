import React from "react";
import Navbar from "../components/Navbar";
import Header2 from '../components/Header2';
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Header2 heading="ABOUT" text="I am a front end developer"/>
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
