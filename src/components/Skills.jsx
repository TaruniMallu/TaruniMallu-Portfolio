import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  { name: 'Html', level: '80%' },
  { name: 'CSS', level: '80%' },
  { name: 'Javascript', level: '60%' },
  { name: 'C', level: '80%' },
  { name: 'React JS', level: '70%' },
  { name: 'Java', level: '60%' },
  { name: 'Python', level: '100%' },
  { name: 'C++', level: '95%' },
  { name: 'R', level: '50%' },
  { name: 'Matlab', level: '30%' },
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem-Solving",
  "Adaptability",
  "Time Management",
  "Leadership",
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="tab-inner skills-tab">
        <h2 className="skills-heading">My Skills</h2>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-title">
                <span>{skill.name}</span>
                <span className="percent">{skill.level}</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills-section">
  <h3 className="soft-skills-heading">Soft Skills</h3>
  <div className="soft-skills-list">
    {softSkills.map((skill, index) => (
      <span className="soft-skill" key={index}>{skill}</span>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};
  
  export default Skills;
  
