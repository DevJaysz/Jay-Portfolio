import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'


function Home() {

  return (
    <section className="home section" id="home">
        <div className="home-container container grid" >
            <div className="home-content grid" >
                <Social/>
    
                <div className="home-img" data-aos="fade-left"
                                          data-aos-anchor="#example-anchor"
                                          data-aos-offset="500"
                                          data-aos-duration="1000">

                </div>

                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home