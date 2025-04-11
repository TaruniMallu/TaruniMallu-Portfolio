import React, { useState } from 'react';
import '../styles/Projects.css';
import face_mask from '../assets/face_mask.png';
import column_shelf_life from '../assets/column_shelf_life.jpeg';
import column_shelf_life2 from '../assets/column_shelf_life2.jpeg';
import column_shelf_life3 from '../assets/column_shelf_life3.jpeg';
import column_shelf_life4 from '../assets/column_shelf_life4.jpeg';
import Train_Management from '../assets/Train_Management.png';
import Train_Management2 from '../assets/Train_Management2.jpeg';
import Train_Management3 from '../assets/Train_Management3.png';
import calc from '../assets/calc.png';
import taguchi from '../assets/taguchi.png';
import timetable from '../assets/timetable.jpeg';
import timetable2 from '../assets/timetable2.jpeg';
import timetable3 from '../assets/timetable3.jpeg';
import nvidia from '../assets/nvidia.png';
import crypto from '../assets/crypto.png';
import Image_class from '../assets/Image_class.png';

const categories = ['All', 'Data Science', 'ML and DL', 'Web Development', 'Others'];

const projects = [
  {
    title: 'Column Shelf Life',
    category: 'Data Science',
    images: [column_shelf_life,column_shelf_life2,column_shelf_life3,column_shelf_life4],
    tech: ['Data Analysis', 'EDA', 'Python'],
    link: 'https://github.com/TaruniMallu/Column-Shelf-Life',
  },
  {
    title: 'Face Mask Detection',
    category: 'ML and DL',
    images: [face_mask],
    tech: ['Computer Vision', 'Deep Learning', 'Python'],
    link: 'https://github.com/TaruniMallu/Face-Mask-Detection',
  },
  {
    title: 'Train Management System',
    category: 'Others',
    images: [Train_Management,Train_Management2,Train_Management3],
    tech: ['MySQL', 'ReactJS', 'DBMS'],
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Advanced Scientific Calculator',
    category: 'Web Development',
    images: [calc],
    tech: ['React', 'HTML-CSS', 'JavaScript'],
    link: 'https://github.com/TaruniMallu/Calculator-Web-App',
  },
  {
    title: 'Taguchi Method',
    category: 'Data Science',
    images: [taguchi],
    tech: ['Python', 'ML'],
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'TimeTable System using JAVA Swing',
    category: 'Others',
    images: [timetable,timetable2,timetable3],
    tech: ['Java', 'Swing GUI', 'OOP'],
    link: 'https://github.com/TaruniMallu/TimeTable-Dashboard-using-Swing-UI',
  },
  {
    title: 'Nvidia Stock Prediction',
    category: 'Data Science',
    images: [nvidia],
    tech: ['VADER', 'News API', 'Scikit-learn'],
    link: 'https://github.com/TaruniMallu/nvidia-stock-prediction',
  },
  {
    title: 'Cryptocurrency Trading Strategy',
    category: 'Data Science',
    images: [crypto],
    tech: ['Python', 'Keras', 'Scikit-learn'],
    link: 'https://github.com/TaruniMallu/Cryptocurrency-Trading-Strategy',
  },
  {
    title: 'Image and Text Classification',
    category: 'ML and DL',
    images: [Image_class],
    tech: ['TensorFlow', 'CNN','NLP', 'Scikit-learn'],
    link: 'https://yourprojectlink.com',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section className="projects-section">
      <h4 className="projects-subtitle">PORTFOLIO</h4>
      <h2 className="projects-title">LATEST WORKS</h2>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.images[0]} alt={project.title} />
              <div className="view-project-overlay">
                <button
                  className="view-project-btn"
                  onClick={() => handleOpenProject(project)}
                >
                  View Project
                </button>
              </div>
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <h2>{selectedProject.title}</h2>

            <div className="slideshow-container">
              <button className="arrow left" onClick={handlePrev}>‹</button>
              <div className="slideshow-image-wrapper">
  <img
    src={selectedProject.images[currentImageIndex]}
    alt={`${selectedProject.title} ${currentImageIndex + 1}`}
    className="slideshow-image"
  />
</div>

              <button className="arrow right" onClick={handleNext}>›</button>
            </div>

            <div className="modal-tech">
              <h4>Technologies Used:</h4>
              <ul>
                {selectedProject.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <a
              href={selectedProject.link}
              className="modal-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
