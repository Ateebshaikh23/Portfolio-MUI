'use client'
import React from "react";
import { ReactTyped as Typed } from "react-typed"; // For dynamic typing effect
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about-section fade-in-top">
            <h2>About <span>Me</span></h2>

            <div className="about-content">
                {/* Intro with dynamic typing */}
                <p className="intro">
                    Hi, I’m <strong>Ateeb Shaikh</strong> —{" "}
                    <Typed
                        strings={[
                            "a passionate Web Developer from Pune, India.",
                            "I love creating user-friendly web experiences.",
                            "I enjoy learning and building impactful applications."
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </p>

                <div className="about-lists">
                    <ul>
                        <li>💡 <strong>Mindset:</strong> Hands-on learner — I learn best by building, breaking, fixing, and improving.</li>
                        <li>🛠 <strong>Skilled in:</strong> Designing intuitive interfaces, building responsive layouts, and optimizing performance.</li>
                        <li>🎯 <strong>Current Focus:</strong> Front-end development while growing into a full-stack developer.</li>
                        <li>🚀 <strong>Goal:</strong> Combine aesthetic design with powerful backend functionality for seamless digital experiences.</li>
                    </ul>

                    <ul>
                        <li>🌱 <strong>Outside of coding:</strong> I love exploring new tools and technologies.</li>
                        <li>⚡ Taking on fresh challenges to keep learning.</li>
                        <li>🤝 Helping others solve technical problems — it fuels my curiosity.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
