import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h4" style={{color:'white'}}>About Me</Typography>
        <Typography>
          My Name is Shah Yash Nilesh
        </Typography>
        <Typography>
          I am 20 years old
        </Typography>
        <Typography>
          I am currently pursuing Btech in the stream of IT from DJ Sanghvi College of Engineering
        </Typography>
        <Typography>
          Full Stack Developer
        </Typography>
      </div>
      <div>
      <Typography variant="h4" style={{color:'white'}}>Contact Info</Typography>
        <Typography>
          204,Dahisar Vinayak Society
        </Typography>
        <Typography>
           Near Siddhivinayak Temple
        </Typography>
        <Typography>
          Dahisar(West)
        </Typography>
        <Typography>
          Mumbai:400068
        </Typography>
        <Typography>
          8291257146/9892147224
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h4" style={{color:'white'}}>Social Media</Typography>
        <a href="https://github.com/SHAHYASHNILESH" target="black">
          <BsGithub />
        </a>
        {/* <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a> */}
        <a href="https://www.instagram.com/iamyash2206/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-shah-b95482232"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
