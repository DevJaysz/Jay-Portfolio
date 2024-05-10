import React from 'react'
import Front from './Front'
import Backend from './Backend'
import './Skills.css'
import Design from './Design'

function Skills() {
  return (
   <section className="skills section" id="skills">
    <h2 className="section-title" data-aos="fade-left">TECHNICAL</h2>
    <span className="section-subtitle" data-aos="fade-right">SKILLS</span>

    <div className="skills-container container grid">
            <Design/>
           
            <Front/>
            
            <Backend/>
    </div>
   </section>
  )
}

export default Skills