import React, { useState } from 'react'
import './Services.css'

function Services() {

    const[toggleState,setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
            
        <section className="services section" id='services' >
            <h2 className="section-title">SERVICES</h2>
            <span className="section-subtitle">WHAT I DO</span>

            <div className="services-container container grid">
               
                <div className="services-content" data-aos="fade-right" data-aos-duration="1500">
                    <div>
                        <i className="uil uil uil-brackets-curly services-icon"> </i>
                            <h3 className="services-title">FRONT-END 
                            <br /> DEVELOPER</h3>
                    </div>

                    <span className="services-button" onClick={() =>
                        toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services-button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services-modal active-modal": "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() =>
                        toggleTab(0)} className="uil uil-times 
                            services-modal-close"></i>


                            <h3 className="services-modal-title">
                            FRONT-END WEB DEVELOPER
                            </h3>
                            <p className="services-modal-description">
                                Providing quality work.</p>
                                
                                <ul className="services-modal-services grid">
                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            Web page development
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                           I create UX element interactions.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            Design and mockups of products.
                                        </p>
                                    </li>
                                </ul>
                        </div>
                    </div>

                </div>

                <div className="services-content" data-aos="fade-right" data-aos-duration="1000">
                    <div>
                        <i className="uil uil-web-grid services-icon"> </i>
                            <h3 className="services-title">UI/UX 
                            <br /> DESIGN</h3>
                    </div>

                    <span className="services-button" onClick={() =>
                        toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services-button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services-modal active-modal": "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() =>
                             toggleTab(0)} className="uil uil-times 
                            services-modal-close"></i>


                            <h3 className="services-modal-title">
                                UI/UX  DESIGN
                            </h3>
                            <p className="services-modal-description">
                                Providing quality work. </p>

                                <ul className="services-modal-services grid">
                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            Web page development
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                           I create UX element interactions.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            Design and mockups of products.
                                        </p>
                                    </li>
                                </ul>
                        </div>
                    </div>

                </div>
                
                <div className="services-content" data-aos="fade-right" data-aos-duration="500">
                    <div>
                        <i className="uil uil-edit services-icon"> </i>
                            <h3 className="services-title">GRAPHIC 
                            <br />ARTIST</h3>
                    </div>

                    <span className="services-button" onClick={() =>
                        toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right 
                        services-button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services-modal active-modal": "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() =>
                             toggleTab(0)} className="uil uil-times 
                            services-modal-close"></i>


                            <h3 className="services-modal-title">
                               GRAPHIC ARTIST
                            </h3>
                            <p className="services-modal-description">
                                Providing quality work.</p>

                                <ul className="services-modal-services grid">
                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            I develop the user interface.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            Web page development
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                           I create UX element interactions.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            I position your company brand.
                                        </p>
                                    </li>

                                    <li className="services-modal-service">
                                        <i className="uil uil-check-circle 
                                        services-modal-icon"></i>
                                        
                                        <p className="services-modal-info">
                                            Design and mockups of products.
                                        </p>
                                    </li>
                                </ul>
                        </div>
                    </div>

                </div>
                
            </div>

            
        </section>
  )
}

export default Services