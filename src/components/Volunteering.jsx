import React from 'react';
import '../styles/Volunteering.css';

const Volunteering = () => {
  return (
    <div className="volunteering-section">
      <h2 className="volunteering-heading">VOLUNTEERING</h2>

      <div className="volunteering-container">
        <div className="volunteering-card">
          <span className="volunteering-date">2023 – Present</span>
          <h3>Volunteering Team</h3>
          <h4>Nirmaan Organization</h4>
          <p>🧠Mentored Children about computer basics teaching them scratch.</p>
        </div>

        <div className="volunteering-card">
          <span className="volunteering-date">2023</span>
          <h3>Volunteering and Management Team</h3>
          <h4>NSS</h4>
          <p>🤝Volunteered for the blood donation camp and pottery workshop.</p>
        </div>

        {/* <div className="volunteering-card">
          <span className="volunteering-date">2022 – 2023</span>
          <h3>Community Volunteer</h3>
          <h4>NGO TechBridge</h4>
          <p>🌍 Supported tech literacy drives and helped underprivileged students with digital skills and coding fundamentals.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Volunteering;
