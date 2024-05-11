import React from 'react'
import './PortfolioCard.css'
import mywork_data from '../../assets/mywork_data'


function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio" >
             <h2 className="section-title" >PORTFOLIO</h2>
            <span className="section-subtitle">RECENT PROJECTS</span>


     
      <div class="cards-container container grid" data-aos="zoom-in">
        {mywork_data.map((work,index)=>( 
        <div key= {index} className="card" data-aos="flip-left"
                                            data-aos-duration="1000">
            <img src={work.image} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <div className="card-header-right">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                  <h3 class="card__title">{work.name}</h3>       
                  <div className="card_icons">
                  {work.icons.map((icon, idx) => (
                    <img key={idx} src={icon.icon} alt="" className='card__icon'  />
                  ))}
                </div>
                </div>
                <a href= {work.demo} target='_blank'> <img src={work.preview} tar alt="" className='demo-icon'/></a>
              </div>
              <p class="card__description">{work.description}</p>
            </div>
          </div>     
        ) )}
    </div>
    </section>
      
  )
}

export default Portfolio