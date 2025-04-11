import React from 'react';
import '../styles/Services.css';
import {
    FaLaptopCode,
    FaPalette,
    FaServer,
    FaPython,
    FaChartLine,
    FaCode,
} from 'react-icons/fa';

const services = [
    {
      icon: FaChartLine,
      title: 'Data Science',
      description:
        'Extracting insights from data using machine learning, Python, and statistical techniques.',
    },
    {
      icon: FaPython,
      title: 'Python Developer',
      description:
        'Building scripts, automations, and working with data using Python and its libraries.',
    },
    {
      icon: FaLaptopCode,
      title: 'Front End Web Development',
      description:
        'Building responsive UIs using React, HTML, CSS, and JavaScript.',
    },
    {
      icon: FaServer,
      title: 'Back End Web Development',
      description:
        'Creating robust backend logic using Node.js, Express, and REST APIs.',
    },
    {
      icon: FaCode,
      title: 'Software Development',
      description:
        'Designing and developing scalable software solutions using modern tools and practices.',
    },
    {
      icon: FaPalette,
      title: 'Web Design',
      description:
        'Designing clean, aesthetic, and user-friendly layouts for the web.',
    },
  ];
  

const Services = () => {
  return (
    <section className="services">
      <h4 className="services-subtitle">SERVICES</h4>
      <h2 className="services-title">WHAT I DO</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-box"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="icon-container">
              {React.createElement(service.icon)}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
