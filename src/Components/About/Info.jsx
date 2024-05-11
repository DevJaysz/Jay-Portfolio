import React from 'react'

function Info() {
  return (
    <div className="about-info grid" >
        <div className="about-box" data-aos="fade-left"
                                  data-aos-duration="500">
             <i class='bx bx-code-alt about-icon' ></i>

            <h3 className="about-title">
                Experience
            </h3>
            <span className="about-subtitle">
                8 Months
            </span>
        </div>
        <div className="about-box" data-aos="fade-left"
                                  data-aos-duration="700">
            <i class='bx bx-medal about-icon' ></i>

            <h3 className="about-title">
                Completed
            </h3>
            <span className="about-subtitle">
                N/A Projects
            </span>
        </div>
        <div className="about-box" data-aos="fade-left"
                                  data-aos-duration="1000">
             <i class='bx bx-support about-icon' ></i>

            <h3 className="about-title">
                Support
            </h3>
            <span className="about-subtitle">
                N/A
            </span>
        </div>
    </div>
  )
}

export default Info