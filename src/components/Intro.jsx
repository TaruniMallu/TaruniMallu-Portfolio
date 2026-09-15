// src/components/Intro.jsx
import React, { useState } from 'react';
import '../styles/Intro.css';
import myImage from '../assets/about.jpeg';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Volunteering from './Volunteering';

const Intro = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="intro-section">
      <h2 className="intro-title">ABOUT ME</h2>
      <div className="intro-container">
        <div className="intro-image">
          <img src={myImage} alt="Taruni" />
        </div>

        <div className="intro-text">
          <p>
            <strong>Hi! I am Taruni Mallu</strong>, a Member of Technical Staff at Nielsen
            building production systems across Python backends, REST APIs, and React interfaces.
            I care about scalable architecture, data integrity, and shipping reliable features end to end.
          </p>
          <p>★ Full-stack focused — React, Next.js, TypeScript, JavaScript, and modern UI engineering.</p>
          <p>★ Strong on backends &amp; data — FastAPI, ETL pipelines, distributed processing, SQL, and observability.</p>
          <p>★ BITS Pilani Hyderabad — B.E. Civil Engineering with a Minor in Computing and Intelligence (8.3/10).</p>

          <div className="intro-buttons">
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download className="intro-btn">Download CV</a>
            <a href="#contact" className="intro-btn secondary">Hire Me</a>
          </div>
        </div>
      </div>

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
