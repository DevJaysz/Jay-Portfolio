import React from "react";
import "./Footer.css";
import html from "../../assets/techstack/html.png";
import css from "../../assets/techstack/css.png";
import js from "../../assets/techstack/js.png";
import react from "../../assets/techstack/react.png";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div></div>

      <div className="footer-top container grid">
        <div className="footer-topleft">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
        </div>
      </div>

      <hr />
      <div className="footer-bottom ">
        <p className="footer-bottom-left"> © 2023 All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
