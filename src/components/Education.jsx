import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="skills-heading">Education</h2>
      <div className="education-timeline">

        {/* Box 1 */}
        <div className="education-item">
          <div className="education-content">
            <span className="education-date">2022 - 2026</span>
            <h3>BITS PILANI HYDERABAD CAMPUS</h3>
            <h4>B.E. Civil Engineering</h4>
            <p>Minor in Computing and Intelligence(Cni).</p>
          </div>
          <div className="education-icon">🎓</div>
        </div>

        {/* Box 2 */}
        <div className="education-item">
          <div className="education-content">
            <span className="education-date">2020 - 2022</span>
            <h3>Resonance Junior College</h3>
            <h4>Grade 11-12, High School Education</h4>
            <p>Maths, Physics and Chemistry</p>
          </div>
          <div className="education-icon">📚</div>
        </div>

        {/* Box 3 */}
        <div className="education-item">
          <div className="education-content">
            <span className="education-date">2016 - 2020</span>
            <h3>Warangal Public School</h3>
            <h4>Secondary Schooling</h4>
            <p>House Captain(2018-2020), Best Delegate at WPS-MUN, Quiz Club, Debate Team, Volleyball Vice-Captain. </p>
          </div>
          <div className="education-icon">💻</div>
        </div>

      </div>
    </div>
  );
};

export default Education;
