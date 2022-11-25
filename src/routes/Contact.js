import React from 'react';
import Footer from "../components/Footer";
import Form from '../components/Form';
import Header2 from '../components/Header2';
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header2 heading="CONTACT" text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact