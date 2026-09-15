import React from "react";
import "../styles/Hero.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import myPhoto from "../assets/hero.jpeg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-eyebrow animate-in">Hello</p>
          <h1 className="animate-in delay-1">
            I am <span className="highlight">Taruni Mallu</span>
          </h1>
          <p className="hero-role animate-in delay-2">Member of Technical Staff I @ Nielsen</p>
          <p className="hero-stack animate-in delay-3">Full Stack | React · Next.js · TypeScript · Python</p>

          <button className="hero-cta animate-in delay-4" onClick={scrollToAbout}>
            More About Me
          </button>

          <div className="social-icons animate-in delay-5">
            <a href="https://www.instagram.com/tarunimallu/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/taruni-mallu-60221922a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/TaruniMallu" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-image animate-in delay-3">
          <div className="hero-ring" aria-hidden="true" />
          <img src={myPhoto} alt="Taruni" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
