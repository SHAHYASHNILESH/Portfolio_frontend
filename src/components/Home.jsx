import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import moonImage from "../images/moon.jpg";
import venusImage from "../images/venus.jpg";
import spaceImage from "../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "./TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiFlutter,
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";

import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = () => {
  const { loading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //console.log(user);
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeSkillsBox");

      if (window.scrollY > 500) {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
      }
    });
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h4">
          <p>Y</p>
          <p>A</p>
          <p>S</p>
          <p>H</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">APP DEVELOPER</Typography>
          <Typography variant="h2">FULL STACK DEVELOPER</Typography>
          <Typography variant="h2">STUDENT</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              // src={user.skills.image1.url}
              src="https://www.heise.de/download/media/mongodb-82926/mongodb-logo_1-1-30.png"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              // src={skills.image2.url}
              src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"
              alt="Face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              // src={skills.image3.url}
              src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
              alt="Face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              // src={skills.image4.url}
              src="https://blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png"
              alt="Face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              // src={skills.image5.url}
              src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
              alt="Face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              // src={skills.image6.url}
              src="http://x7d4c5z5.stackpathcdn.com/wp-content/uploads/2014/10/css3.jpg"
              alt="Face6"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace7">
            <img
              // src={skills.image6.url}
              src="https://www.computerhope.com/jargon/j/javascript.png"
              alt="Face7"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeSkillsBox">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiFlutter />
          <FaJava />
          <BsBootstrapFill />
          <FaPython />
          <AiOutlineConsoleSql />
          {/* <SiThreedotjs /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
