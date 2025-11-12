import React from 'react';
import "./Technologies.css";

const techs = [
    { name: "HTML", img: "./images/Tech/html.png" },
    { name: "CSS", img: "./images/Tech/css.png" },
    { name: "JavaScript", img: "./images/Tech/js.png" },
    { name: "React", img: "./images/Tech/react.png" },
    { name: "Node.js", img: "./images/Tech/nodejs.png" },
    { name: "PostgreSQL", img: "./images/Tech/postgre.png" },
    { name: "TypeScript", img: "./images/Tech/typescript.png" },
    { name: "MUI", img: "./images/Tech/mui.png" },
    { name: "GitHub", img: "./images/Tech/github.png" },
    { name: "Docker", img: "./images/Tech/docker.png" },
];

export default function Technologies() {
    return (
        <div id='Technologies' className="techMain back">
            <div className="TechName">
                <h1>Technologies</h1>
            </div>

            <div className="TechContainer">
                {techs.map((tech, index) => (
                    <div 
                        className={`TechSkills fadeInUp`} 
                        style={{ animationDelay: `${index * 0.15}s` }} 
                        key={index}
                    >
                        <img src={tech.img} alt={`${tech.name} logo`} />
                        <button>{tech.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
