import React from "react";

function Front() {
  return (
    <div
      className="skills-content"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h3 className="skills-title">Front-End</h3>
      <div className="skill-box-wrap">
        <div className="skills-box">
          <div className="skills-group">
            <div className="skills-data">
              <i className="bx bxl-html5"></i>

              <div>
                <h3 className="skills-name">HTML</h3>
                <span className="skills-level">Intermediate</span>
              </div>
            </div>

            <div className="skills-data">
              <i className="bx bxl-css3"></i>

              <div>
                <h3 className="skills-name">CSS</h3>
                <span className="skills-level">Intermediate</span>
              </div>
            </div>

            <div className="skills-data">
              <i className="bx bxl-javascript"></i>

              <div>
                <h3 className="skills-name">JavaScript</h3>
                <span className="skills-level">Basic</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-box">
          <div className="skills-group">
            <div className="skills-data">
              <i className="bx bxl-bootstrap"></i>

              <div>
                <h3 className="skills-name">Bootstrap</h3>
                <span className="skills-level">Intermediate</span>
              </div>
            </div>

            <div className="skills-data">
              <i className="bx bxl-git"></i>

              <div>
                <h3 className="skills-name">Git</h3>
                <span className="skills-level">Intermediate</span>
              </div>
            </div>

            <div className="skills-data">
              <i className="bx bxl-react"></i>

              <div>
                <h3 className="skills-name">ReactJS</h3>
                <span className="skills-level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
