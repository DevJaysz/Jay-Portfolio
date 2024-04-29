import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {

    /** Toggle-Menu**/
   // window.addEventListener('scroll',function () {
      //  const scrollup = document.querySelector(".scrollup")

      //  if (this.screenY >= 560 ) scrollup.classList.add("show-scroll");
//else scrollup.classList.remove('show-scroll')
   // })

    /** Toggle-Menu**/
    const[Toggle,toggleMenu] = useState(false);

    const [activeNav,setActiveNav] = useState("#about");

    return (
    
    <>
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo">
                <img src={logo} alt="" />
            </a>
            
            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"} >
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" onClick={()=> setActiveNav ("#home")} 
                            className= {activeNav === "#home" ? "nav-link active-link" : "nav-link"}></a>
                        <i className="uil uil-estate nav-icon"></i>
                        Home
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link"></a>
                        <i className="uil uil-user nav-icon"></i>
                        About
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link"></a>
                        <i className="uil uil-file-alt nav-icon"></i>
                        Skills
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link"></a>
                        <i className="uil uil-briefcase-alt nav-icon"></i>
                        Services
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link"></a>
                        <i className="uil uil-scenery nav-icon"></i>
                        Portfolio
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link"></a>
                        <i className="uil uil-message nav-icon"></i>
                        Contact
                    </li>
                </ul>

                <i class="uil uil-times nav-close" onClick={() => toggleMenu(!Toggle)}></i>
            </div>
            <div className="nav-toggle" onClick={() => toggleMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header