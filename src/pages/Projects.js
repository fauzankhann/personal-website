import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";
import CodeIcon from '@mui/icons-material/Code';
  

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>Here are some projects that I have previously made:</p>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} skill={project.skills} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;