import React from 'react';
import '../styles/Experience.css'; // Make sure this path is correct based on your folder structure

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="skills-heading">Experience</h2>
      <div className="experience-timeline">

        <div className="experience-item">
          <div className="experience-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="experience-content">
            <span className="experience-date">June, 2024 – August, 2024</span>
            <h3>Software Development Intern</h3>
            <h4>ProvenTech Consulting Pvt. Ltd.</h4>
            <p>Built a model for predicting column shelf life using real-time data and also contributed to frontend development.</p>
            <p>Worked on various ML/DL projects involving CNN, VGG16, and Decision Trees.</p>
          </div>
        </div>

        {/* <div className="experience-item">
          <div className="experience-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="experience-content">
            <span className="experience-date">July, 2021 – Present</span>
            <h3>Front End Developer</h3>
            <h4>TEDx BPHC</h4>
            <p>Designed interactive and responsive components for event pages using React and custom CSS animations.</p>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Experience;
