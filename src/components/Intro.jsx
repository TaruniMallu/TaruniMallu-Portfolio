// src/components/Intro.jsx
import React, { useState } from 'react';
import '../styles/Intro.css';
import myImage from '../assets/photo.jpeg';
import Skills from './Skills';
import Experience from './Experience'; // create this component
import Education from './Education';   // create this component
import Volunteering from './Volunteering'; // create this component

const Intro = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="intro-section">
      <h2 className="intro-title">ABOUT ME</h2>
      <div className="intro-container">
        {/* Left: Image */}
        <div className="intro-image">
          <img src={myImage} alt="Taruni" />
        </div>

        {/* Right: Text */}
        <div className="intro-text">
          <p><strong>Hi! I am Taruni Mallu</strong>, a passionate learner with a strong interest in 
            Data Science, AI, and Web Development. I enjoy solving real-world problems and collaborating 
            with people who love tech just as much as I do.</p>
          <p>★ I love working on challenging projects and learning new things as I go.</p>
          <p>★ Currently skilled in Python, C++, JavaScript, React, and ML libraries like Pandas, NumPy, and Scikit-learn.</p>
          <p>★ I'm also a huge fan of reading, blogging, and exploring design!</p>

          {/* Buttons */}
          <div className="intro-buttons">
            <a href="/resume.pdf" download className="intro-btn">Download CV</a>
            <a href="#contact" className="intro-btn secondary">Hire Me</a>
          </div>
        </div>
      </div>

      {/* ↓↓↓ Tabs start here ↓↓↓ */}
      <div className="tabs-section">
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("skills")} className={activeTab === "skills" ? "active" : ""}>Skills</button>
          <button onClick={() => setActiveTab("experience")} className={activeTab === "experience" ? "active" : ""}>Experience</button>
          <button onClick={() => setActiveTab("education")} className={activeTab === "education" ? "active" : ""}>Education</button>
          <button onClick={() => setActiveTab("volunteering")} className={activeTab === "volunteering" ? "active" : ""}>Volunteering</button>
        </div>

        <div className="tab-content">
          {activeTab === "skills" && <Skills />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
          {activeTab === "volunteering" && <Volunteering />}
        </div>
      </div>
    </section>
  );
};

export default Intro;
