import React from "react";

function Info() {
  return (
    <div className="about-info grid">
      <div className="about-box" data-aos="zoom-in" data-aos-duration="500">
        <i className="bx bx-code-alt about-icon"></i>

        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">1 YEAR</span>
      </div>
      <div className="about-box" data-aos="zoom-in" data-aos-duration="1000">
        <i className="bx bx-medal about-icon"></i>

        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">PROJECTS</span>
      </div>
      <div className="about-box" data-aos="zoom-in" data-aos-duration="1500">
        <i className="bx bx-support about-icon"></i>

        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">N/A</span>
      </div>
    </div>
  );
}

export default Info;
