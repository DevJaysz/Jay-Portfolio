import React, { useState } from 'react'
import './Qualification.css'


function Qualification() {
  
  const[toggleState,setToggleState] = useState(1);
  const toggleTab = (index) => {
      setToggleState(index);
  };
  
  return (
    
    <section className="qualification section" id='qualification'>
         <h2 className="section-title">QUALIFICATIONS</h2>
         <span className="section-subtitle">MY JOURNEY</span>

         <div className="qualification-container container">
          <div className="qualification-tabs">
            <div 
              className={
                toggleState === 1
                  ?"qualification-button qualification-active button--flex"
                  : "qualification-button button--flex"  }
                  onClick={()=> toggleTab(1)}
                >
              <i className="uil uil-graduation-cap qualification-icon"></i>
              Education
            </div>

            <div className={
                toggleState === 2
                  ?"qualification-button qualification-active button--flex"
                  : "qualification-button button--flex"  }
                  onClick={()=> toggleTab(2)}
                >
              <i className="uil uil-briefcase-alt qualification-icon"></i>
              Experience
            </div>

          </div>

          <div className="qualification-sections">
            <div 
            className= 
            {toggleState === 1 
              ? "qualification-content  qualification-content-active" 
              : "qualification-content" }>

              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                  BACHELOR
                  </h3>
                  <span className="qualification-subtitle">
                   <h3>BS INFO TECH</h3> 
                    DEAN'S LISTER '20-'23 <br />
                    RIZAL TECH. UNIVERSITY
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i> 2019-2023
                  </div>
                </div>

                <div>
                  <span className="qualification-rounder">
                   
                  </span>
                  <span  className="qualification-line">

                  </span>
                </div>
              </div>

              <div className="qualification-data">
                <div></div>

                <div>
                  <span className="qualification-rounder">
                   
                  </span>
                  <span  className="qualification-line">

                  </span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    SENIOR HS
                  </h3>
                  <span className="qualification-subtitle">
                   <h3>ICT-PROGRAMMING</h3>
                   ACLC
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i> 2017-2019
                  </div>
                </div>
              </div>

              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                    JUNIOR HS
                  </h3>
                  <span className="qualification-subtitle">
                      <h3>COMPUTER ENTHUSIAST</h3>
                    EXELLENCE AWARDEE <br />
                    SAN AGUSTIN ACADEMY
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i> 2013-2017
                  </div>
                </div>

                <div>
                  <span className="qualification-rounder">
                    
                  </span>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 
              ? "qualification-content  qualification-content-active" 
              : "qualification-content" }>
              
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                  FRONT-END DEVELOPER
                  </h3>
                  <span className="qualification-subtitle">
                    <h3>STUDENT SERVICES MS</h3>
                    CAPSTONE
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i> 2022-2023
                  </div>
                </div>

                <div>
                  <span className="qualification-rounder">
                   
                  </span>
                  <span  className="qualification-line">

                  </span> 
                </div>
              </div>

              <div className="qualification-data">
                <div></div>

                <div>
                  
                  <span className="qualification-rounder">
                   
                  </span>
                  <span className="qualification-line">

                  </span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    GRAPHIC DESIGNER
                  </h3>
                  <span className="qualification-subtitle">
                  <h3>STUDENT SERVICES MS</h3>
                  CAPSTONE
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i> 2022-2023
                  </div>
                </div>
              </div>

              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                  DISPATCH ADMIN
                  </h3>
                  <span className="qualification-subtitle">
                  <h3>B3S TELECOM INC.</h3>
                  PART-TIME
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i>  2022
                  </div>
                </div>

                <div>
                  <span className="qualification-rounder">
                   
                  </span>
                
                  <span className="qualification-line"></span>
                </div>
              </div>

              <div className="qualification-data">
                <div></div>

                <div>
                  <span className="qualification-rounder">
                    
                  </span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                  TECHNICAL SUPPORT
                  </h3>
                  <span className="qualification-subtitle">
                  <h3>COMELEC</h3>
                  DESO - TECHNICAL SUPPORT STAFF
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i> 2022-2023
                  </div>
                </div>
              </div>

              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                  APP DEV
                  </h3>
                  <span className="qualification-subtitle">
                  <h3>LIBRARY MS</h3>
                  THESIS
                  </span>
                  <div className="qualification-calendar">
                    <i className="uil uil-calendar-alt">
                    </i>  2019
                  </div>
                </div>

                <div>
                  <span className="qualification-rounder">
                   
                  </span>
                </div>
              </div>
              

              
              
            </div>
          </div>
         </div>
    </section>
  )
}

export default Qualification