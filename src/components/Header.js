import React from "react";
import "./header.css";
import BackImg from "../assests/mailchimp-lsdA8QpWN_A-unsplash.jpg"
const Header = () => {
  return (
    <div className="header">
      <div className="backImg">
        <img className="img" src={BackImg} alt="bacimg" />
      </div>
      <div className="content">
        <h1>Anshul Gaur</h1>
        <p>React developer</p>
      </div>
    </div>
  );
};

export default Header;
