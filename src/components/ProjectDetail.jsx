import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetail.css';
// import { Projects } from './Projects'; 
import projects from '../data/projectsData.js'; // 👈 shared data file

const ProjectDetail = () => {
  const { title } = useParams();
  const project = projects.find(p => p.title === title);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="project-detail-container">
      <button className="project-detail-button" onClick={toggleDetails}>
        Project Details +
      </button>

      <div className="main-image-area">
        <img src={project.image} alt={project.title} className="main-project-img" />
        {/* Navigation arrows can go here if you have multiple images */}
      </div>

      {showDetails && (
        <div className="project-info">
          <h2>{project.title}</h2>
          <p><strong>Category:</strong> {project.category}</p>
          <p><strong>Description:</strong> This is a placeholder for your project description.</p>
          {/* Add more fields like tools, client, year etc */}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
