import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Home() {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <section className="home section" id="home">
        <div className="home-container container grid" >
            <div className="home-content grid" >
                <Social/>
    
                <div className="home-img" data-aos="fade-left"  data-aos-duration="1500">

                </div>

                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home