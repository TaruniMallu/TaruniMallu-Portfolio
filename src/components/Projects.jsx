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
import timetable from '../assets/timetable.jpeg';
import timetable2 from '../assets/timetable2.jpeg';
import timetable3 from '../assets/timetable3.jpeg';
import nvidia from '../assets/nvidia.png';
import crypto from '../assets/crypto.png';
import taguchi from '../assets/taguchi.png';
import Image_class from '../assets/Image_class.png';

const categories = ['All', 'Backend', 'Systems', 'Data', 'ML/DL', 'Full Stack'];

const projects = [
  {
    title: 'Enterprise RAG-based Knowledge Platform',
    category: 'Backend',
    images: [Image_class],
    tech: ['FastAPI', 'LangChain', 'Pinecone', 'FAISS'],
    description:
      'Built a distributed FastAPI backend with REST APIs for document ingestion, processing, vector indexing, pipeline orchestration, and low-latency semantic retrieval across thousands of indexed documents, supporting scalable AI-powered enterprise services. Designed modular AI workflows for ingestion, indexing, retrieval, reranking, and query processing, improving maintainability and scalability for enterprise knowledge services and production deployment with robust API integration.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'LLM Fine-Tuning for Multimodal Product Intelligence',
    category: 'Backend',
    images: [Image_class],
    tech: ['LLaMA-3', 'QLoRA', 'FastAPI', 'Docker', 'BLIP-2'],
    description:
      'Fine-tuned LLaMA-3 with QLoRA on multimodal product datasets, improving attribute extraction accuracy by 47%, and evaluated model performance across product intelligence tasks for scalable AI applications. Engineered a Dockerized FastAPI inference service integrating BLIP-2 visual embeddings for low-latency multimodal retrieval, product search, tagging, and question answering through scalable production inference pipelines with REST-based service delivery.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'Scalable ML Pipeline and Inference Platform',
    category: 'Backend',
    images: [Image_class],
    tech: ['Python', 'FastAPI', 'REST APIs', 'CI/CD'],
    description:
      'Built and deployed a scalable backend platform with REST APIs, concurrent request handling, model serving, and CI/CD workflows, enabling low-latency real-time inference with reliable service delivery under concurrent workloads. Designed modular application components for request processing, validation, model execution, and API-based inference, emphasizing performance, scalability, fault tolerance, maintainability, and production reliability.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'Model Monitoring Drift Detection System',
    category: 'Backend',
    images: [nvidia],
    tech: ['Prometheus', 'Grafana', 'Evidently AI'],
    description:
      'Built a production-grade monitoring platform for real-time inference systems, tracking latency, data quality, feature drift, model performance, and system health across distributed processing and production workloads for operational reliability. Implemented automated validation, alerting, monitoring dashboards, and system-health evaluation workflows using Prometheus, Grafana, and Evidently AI, reducing model degradation risk by 30% and improving observability and incident detection.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'Port Scheduler: Multi-Process Resource Allocation',
    category: 'Systems',
    images: [Train_Management, Train_Management2, Train_Management3],
    tech: ['C', 'Linux', 'System V IPC', 'GDB', 'Valgrind'],
    description:
      'Discrete-event resource scheduling in C on Linux with independent scheduler, generator, and solver processes using shared memory and message queues. Priority-based allocation, signal handling, and IPC debugging with GDB/Valgrind.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'Image and Text Classification',
    category: 'ML/DL',
    images: [Image_class],
    tech: ['TensorFlow', 'CNN', 'NLP', 'Scikit-learn'],
    description:
      'Deep-learning classification system combining convolutional neural networks for image data and NLP techniques for text, built with TensorFlow and Scikit-learn.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'Face Mask Detection',
    category: 'ML/DL',
    images: [face_mask],
    tech: ['Computer Vision', 'Deep Learning', 'Python'],
    description:
      'Computer vision application for detecting face mask usage using deep learning models in Python.',
    link: 'https://github.com/TaruniMallu/Face-Mask-Detection',
  },
  {
    title: 'Column Shelf Life Platform',
    category: 'Data',
    images: [column_shelf_life, column_shelf_life2, column_shelf_life3, column_shelf_life4],
    tech: ['Python', 'Streamlit', 'Docker', 'Data Analysis'],
    description:
      'Production-oriented prediction and data processing platform from ProvenTech — Dockerized Streamlit services and automated deployment workflows.',
    link: 'https://github.com/TaruniMallu/Column-Shelf-Life',
  },
  {
    title: 'Cryptocurrency Trading Strategy',
    category: 'Data',
    images: [crypto],
    tech: ['Python', 'Keras', 'Scikit-learn'],
    description:
      'Algorithmic trading strategy leveraging Keras neural networks and Scikit-learn for market analysis and signal generation.',
    link: 'https://github.com/TaruniMallu/Cryptocurrency-Trading-Strategy',
  },
  {
    title: 'Nvidia Stock Prediction',
    category: 'Data',
    images: [nvidia],
    tech: ['VADER', 'News API', 'Scikit-learn'],
    description:
      'Stock prediction model combining sentiment analysis via VADER and the News API with Scikit-learn for forecasting.',
    link: 'https://github.com/TaruniMallu/nvidia-stock-prediction',
  },
  {
    title: 'TimeTable System using JAVA Swing',
    category: 'Full Stack',
    images: [timetable, timetable2, timetable3],
    tech: ['Java', 'Swing GUI', 'OOP'],
    description:
      'Desktop timetable management application built with Java Swing GUI and object-oriented design principles.',
    link: 'https://github.com/TaruniMallu/TimeTable-Dashboard-using-Swing-UI',
  },
  {
    title: 'Train Management System',
    category: 'Full Stack',
    images: [Train_Management, Train_Management2, Train_Management3],
    tech: ['React', 'MySQL', 'JavaScript', 'DBMS'],
    description:
      'Full-stack train management application with React UI and MySQL-backed workflows.',
    link: 'https://github.com/TaruniMallu',
  },
  {
    title: 'Taguchi Method Analysis',
    category: 'Data',
    images: [taguchi],
    tech: ['Python', 'ML', 'Data Analysis'],
    description:
      'Statistical and ML-driven analysis using the Taguchi method for experimental optimization.',
    link: 'https://github.com/TaruniMallu',
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

            {selectedProject.description && (
              <p style={{ marginTop: '1rem', lineHeight: 1.5 }}>{selectedProject.description}</p>
            )}

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
