import React from 'react';
import './Projects.css';

// Array of projects
const projects = [
  {
    name: "Flask Todo App",
    img: "./images/projects/flask-todo-app.png",
    link: "https://github.com/Ateebshaikh23/flask-todo-app",
  },
  {
    name: "IOT Medicine Reminder",
    img: "./images/projects/IOTMedicineReminder.png",
    link: "https://github.com/Ateebshaikh23/IOT-Medicine-Reminder",
  },
  {
    name: "Travel Website",
    img: "./images/projects/travelWebsite.png",
    link: "https://github.com/Ateebshaikh23/tour-and-travel",
  },
  {
    name: "Ateeb Portfolio",
    img: "./images/projects/portfolio.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="projectBody">
      <div className="projectName">
        <h2>My <span>Projects</span></h2>
        <p>Here are some of my featured works built with different technologies.</p>
      </div>

      <div className="projectContainer">
        {projects.map((project, index) => (
          <div className="ProjectCard" key={index}>
            <div className="imgWrapper">
              <img src={project.img} alt={project.name} />
            </div>
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Case Study</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
