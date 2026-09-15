import React from 'react';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C'],
  },
  {
    title: 'Software Engineering',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'REST APIs',
      'Microservices',
      'API Integration',
      'End-to-End Development',
      'Modular Architecture',
    ],
  },
  {
    title: 'Frontend & Backend',
    skills: [
      'React',
      'Redux',
      'Next.js',
      'HTML',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    title: 'Distributed Systems',
    skills: [
      'Distributed Systems',
      'Concurrent Processing',
      'Asynchronous Processing',
      'High-Throughput Services',
      'Low-Latency APIs',
      'Fault Tolerance',
      'Scalability',
      'Service Reliability',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Git',
      'GitHub',
      'CI/CD',
      'Jenkins',
      'Linux',
      'Containerization',
    ],
  },
  {
    title: 'Testing & Observability',
    skills: [
      'Unit Testing',
      'Integration Testing',
      'REST API Testing',
      'Automated Validation',
      'Prometheus',
      'Grafana',
      'Telemetry',
      'Monitoring & Observability',
      'Performance Monitoring',
      'Error Tracking',
    ],
  },
  {
    title: 'Data & AI',
    skills: [
      'SQL',
      'PostgreSQL',
      'SQL Server',
      'Oracle',
      'Snowflake',
      'ETL/ELT',
      'Data Validation',
      'Data Modeling',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'LangChain',
      'RAG',
      'LLM Integration',
      'Model Serving',
    ],
  },
];

const softSkills = [
  'Full-Stack Ownership',
  'System Design',
  'Problem-Solving',
  'Production Reliability',
  'Collaboration',
  'Debugging',
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="tab-inner skills-tab">
        <h2 className="skills-heading">My Skills</h2>

        <div className="skill-categories">
          {skillCategories.map((category) => (
            <article className="skill-category" key={category.title}>
              <h3 className="skill-category-heading">{category.title}</h3>
              <ul className="skill-tags">
                {category.skills.map((skill) => (
                  <li className="skill-tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="soft-skills-section">
          <h3 className="soft-skills-heading">Strengths</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill) => (
              <li className="soft-skill" key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
