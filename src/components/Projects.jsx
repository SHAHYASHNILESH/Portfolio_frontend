import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../actions/user";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">{projectTitle}</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }} onClick={()=>deleteHandler(id)}>
          <Delete />
        </Button>
      )}
    </>
  );
};
const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
          <ProjectCard
            url="https://github.com/mayankpatel020810/WP-Project"
            projectImage="https://res.cloudinary.com/dziidt5lx/image/upload/v1660635355/portfolio/mj5ikshqpnuuszhh4r4w.png"
            projectTitle="Ecommerce Website"
            description="This is a full stack ecommerce website"
            technologies="MERN"
          />
          <ProjectCard
            url="https://github.com/SHAHYASHNILESH/Spotify-clone"
            projectImage="https://res.cloudinary.com/dziidt5lx/image/upload/v1660635229/portfolio/vmf41nu0317uilvcbsdc.png"
            projectTitle="Spotify Clone"
            description="This is a backend for spotify"
            technologies="MongoDb,NodeJs,ExpressJs"
          />
          <ProjectCard
            url="https://github.com/SHAHYASHNILESH/simple_interest_app"
            projectImage="https://res.cloudinary.com/dziidt5lx/image/upload/v1660635150/portfolio/y7unmepmlijrq0t2o35s.png"
            projectTitle="Simple Interest App"
            description="This is a mobile responsive app"
            technologies="Flutter"
          />
          <ProjectCard
            url="https://github.com/SHAHYASHNILESH/catalog_app"
            projectImage="https://res.cloudinary.com/dziidt5lx/image/upload/v1660636406/portfolio/ttjakcidllpkn5wiyehs.png"
            projectTitle="Catalog App"
            description="This is a mobile responsive app"
            technologies="Flutter"
          />
          <ProjectCard
            url="https://github.com/SHAHYASHNILESH/Django_tutorial"
            projectImage="https://assets.website-files.com/5b6901669b93d7837e36dc4c/615e1104ffbf5ae592265cc7_python-django.png"
            projectTitle="MyStudyBuddy"
            description="This is a discord type of app"
            technologies="Django and Python"
          />
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
