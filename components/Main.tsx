'use client'
import React from "react";
import "./Main.css";
import { ReactTyped as Typed } from "react-typed";

export default function Main() {
    return (
        <section className="main">
            <div className="mainInfo">
                <h1 className="fadeInUp">Hi, I'm <span>Ateeb</span></h1>
                <h5 className="fadeInUp delay1">📍 Pune, India | Open to Remote & Onsite Roles</h5>
                {/* <h3 className="fadeInUp delay2">Web Developer & UI Builder</h3> */}
                <h3 className="fadeInUp delay2">
                    <Typed
                        strings={["Web Developer", "Frontend Developer", "React Enthusiast"]}
                        typeSpeed={60}
                        backSpeed={40}
                        loop
                    />
                </h3>

                <h2 className="fadeInUp delay3">
                    I build fast and modern <span>web applications</span> <br />
                    with <span>React & Next.js</span>
                </h2>

                <div className="mainButtons fadeInUp delay4">
                    <button className="btn primary"> <a href="#Projects">View Projects</a></button>
                    <button className="btn secondary"> <a href="#Contact">Let's Connect 📞</a></button>
                </div>
            </div>

            <div className="mainPhoto fadeInUp delay5">
                <img src="/images/mainImage.png" alt="Ateeb Shaikh" />
            </div>

            {/* Subtle glow animation background */}
            <div className="glow-circle"></div>
        </section>
    );
}
