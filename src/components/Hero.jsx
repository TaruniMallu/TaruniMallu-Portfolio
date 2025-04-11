import React from "react";
import "../styles/Hero.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import myPhoto from "../assets/me.jpeg";

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
          <h3>Hello</h3>
          <h1>
            I am <span className="highlight">Taruni Mallu</span>
          </h1>
          <p>Student | Software Development | Data Science | Web Development </p>
          <p>BITS PILANI HYDERABAD CAMPUS</p>

          <button onClick={scrollToAbout}>More About Me</button>

          <div className="social-icons">
            <a href="https://www.instagram.com/tarunimallu/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/taruni-mallu-60221922a/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/TaruniMallu" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={myPhoto} alt="Taruni" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
