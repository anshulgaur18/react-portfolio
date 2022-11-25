import React from 'react';
import Footer from "../components/Footer";
import Header2 from '../components/Header2';
import Navbar from "../components/Navbar";
import Project2 from '../components/Project2';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Header2 heading="PROJECTS" text="Some of my recent projects"/>
      <Project2 />
      <Footer />
    </div>
  )
}

export default Project