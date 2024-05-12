import React, { useState } from "react";
import "./Services.css";
import servicesData from "../../assets/servicesData";

function Services() {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index === toggleState ? null : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-aos="flip-right">
        SERVICES
      </h2>
      <span className="section-subtitle">WHAT I DO</span>

      <div className="services-container container grid" data-aos="flip-down">
        {servicesData.map((service, index) => (
          <div className="services-content" key={index}>
            <div>
              <i className={service.iconClass}></i>
              <h3 className="services-title">{service.title}</h3>
            </div>

            <span className="services-button" onClick={() => toggleTab(index)}>
              View More
              <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={
                toggleState === index
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  onClick={() => toggleTab(index)}
                  className="uil uil-times services-modal-close"
                ></i>

                <h3 className="services-modal-title">{service.title}</h3>
                <p className="services-modal-description">
                  {service.description}
                </p>

                <ul className="services-modal-services grid">
                  {service.details.map((detail, idx) => (
                    <li className="services-modal-service" key={idx}>
                      <i className="uil uil-check-circle services-modal-icon"></i>
                      <p className="services-modal-info">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
