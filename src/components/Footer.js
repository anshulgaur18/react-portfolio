import React from "react";
import "./footer.css";
import {
  AiFillHome,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillTelephoneFill, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDiv">
       
          <div className="location">
            <AiFillHome
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>E-17 Sarvodaya Vihar Morak,Kota(Rajasthan)</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <BsFillTelephoneFill
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (+91) 8504096796
            </h4>
          </div>
          <div className="email">
            <h4>
              <AiFillMail
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              anshulgaur18@gmail.com
            </h4>
          </div>
          <div className="social">
            <a href="http://www.linkedin.com/in/anshul-gaur-83194a110/" target="_blank" ><AiFillLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></a>
              <a href="https://github.com/anshulgaur18" target="_blank" ><AiFillGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></a>
              <a href="https://www.instagram.com/anshulgaur18/" target="_blank" ><BsInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></a>
              <a href="http://www.linkedin.com/in/anshul-gaur-83194a110/" target="_blank" ><BsTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></a>
          
        </div>
        
          
       
      </div>
    </div>
  );
};

export default Footer;
