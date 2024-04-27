import React from 'react'
import Front from './Front'
import Backend from './Backend'
import './Skills.css'

function Skills() {
  return (
   <section className="skills section" id="skills">
    <h2 className="section-title">TECHNICAL</h2>
    <span className="section-subtitle">SKILLS</span>

    <div className="skills-container container grid">
            <Front/>
            
            <Backend/>
    </div>
   </section>
  )
}

export default Skills