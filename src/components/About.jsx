import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          Keep your face always toward the sunshine, and shadows will fall
          behind you
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/91772554?s=400&u=6f62f957bde3a74705a7351ea898ae0bab7ed321&v=4"
            alt="yash"
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Yash Nilesh Shah
          </Typography>
          <Typography>Full Stack Developer</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            I am a student and a developer
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I am 20 years old.I am currently pursuing Btech in the stream of IT
            from DJ Sanghvi College of Engineering
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
