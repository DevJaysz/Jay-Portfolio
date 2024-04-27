import React from 'react'
import './Portfolio.css'
import mywork_data from '../../assets/mywork_data'


function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
             <h2 className="section-title">PORTFOLIO</h2>
            <span className="section-subtitle">RECENT PROJECTS</span>


            <div className="portfolio-container container grid">
                <div className="portfolio-content">
                {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
                 })}
                
                </div>

            </div>

    </section>
    
  )
}

export default Portfolio