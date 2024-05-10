import React from 'react'
import './Portfoliodemo.css'
import Picture1 from '../../assets/landscape-1.png'
import Picture2 from '../../assets/landscape-2.png'
import Picture3 from '../../assets/landscape-3.png'

function Portfoliodemo() {
  return (
    <div className="portfolio-section section">
         <h2 className="section-title">PORTFOLIO</h2>
            <span className="section-subtitle">RECENT PROJECTS</span>
        <div class="portfolio container">
        <div class="card__container">
          <article class="card__article">
          
              <img src={Picture1} alt="image" class="card__img"/>

              <div class="card__data">
                <h2 class="card__title">Lutong-Bahay Delivery</h2>
                <span class="card__description">The website features a wide selection of traditional Filipino dishes prepared by skilled cooks, providing customers with the taste of home even when they're away. Users can browse through the menu, place orders, and specify delivery preferences, making it easy to enjoy delicious and comforting Filipino cuisine without leaving home.</span>
                <div className="icon-demo">
                    <div className="icons">
                        <i class='bx bxl-html5'></i>
                        <i class='bx bxl-css3' ></i>
                        <i class='bx bxl-react' ></i>
                    </div>
                    <a href="#" class="card__button">Demo</a>
                </div>
              </div>
          </article>

          <article class="card__article">
              <img src={Picture2} alt="image" class="card__img"/>

              <div class="card__data">
                <span class="card__description">Poon Hill, Nepal</span>
                <h2 class="card__title">Starry Night</h2>
                <a href="#" class="card__button">Read More</a>
              </div>
          </article>

          <article class="card__article">
              <img src={Picture3} alt="image" class="card__img"/>

              <div class="card__data">
                <span class="card__description">Bojcin Forest, Serbia</span>
                <h2 class="card__title">Path Of Peace</h2>
                <a href="#" class="card__button">Read More</a>
              </div>
          </article>
        </div>
    </div>
 </div>
  )
}

export default Portfoliodemo