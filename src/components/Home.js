import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Project from './Project';
import About from './About';
import Contact from './Contact';



const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <About/>
     <Contact/>
      <Project/>

      <Footer/>
    </div>
  );
};

export default Home;
