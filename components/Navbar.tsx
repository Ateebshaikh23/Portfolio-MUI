import React from "react";
import Image from "next/image";
import "./Navbar.css";
import Menu from '@/components/MobileMenu'

export default function Navbar() {
    return (
        <nav className="navbar fade-in-down">
            <div className="logo">
                <a href="#">
                    <Image
                        src="/images/logos.png"
                        alt="Logo"
                        width={180}
                        height={40}
                        className="logo-img"
                    />
                </a>
            </div>

            <div className="nav-items">
                <a href="#" className="nav-link">Home</a>
                <a href="#AboutMe" className="nav-link">About Me</a>
                <a href="#Technologies" className="nav-link">Technologies</a>
                <a href="#Projects" className="nav-link">Projects</a>
                <a href="#Contact" className="nav-link">Contact</a>
            </div>
            <Menu />
        </nav>
    );
}
