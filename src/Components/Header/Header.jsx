import React, { useState} from 'react'
import { Link } from 'react-scroll';
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {

   
    /** Toggle-Menu**/
    const[Toggle,toggleMenu] = useState(false);

    const [activeNav,setActiveNav] = useState("#home");



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
                    <Link to = 
                            'home' spy= {true} smooth={true} offset={50} duration={500}  
                            onClick={()=> setActiveNav ("home")} 
                            className = {
                            activeNav === "home" ? "nav-link active-link" : "nav-link"
                            } >
                             <i className="uil uil-estate nav-icon"></i>
                            Home
                          </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = 
                            'about' spy= {true} smooth={true} offset={-100} duration={500}  
                            onClick={()=> setActiveNav ("about")} 
                            className = {
                            activeNav === "about" ? "nav-link active-link" : "nav-link"
                            } >
                             <i className="uil uil-user nav-icon"></i>
                            About
                          </Link>
                
                    </li>
                    <li className="nav-item">
                        <Link to = 
                            'skills' spy= {true} smooth={true} offset={10} duration={500}  
                            onClick={()=> setActiveNav ('skills')} 
                            className = {
                            activeNav === 'skills' ? "nav-link active-link" : "nav-link"
                            } >
                             <i className="uil uil-file-alt nav-icon"></i>
                            Skills
                          </Link>
                
                    </li>
                    <li className="nav-item">
                         <Link to = 
                            'services' spy= {true} smooth={true} offset={5} duration={500}  
                            onClick={()=> setActiveNav ('services')} 
                            className = {
                            activeNav === 'services' ? "nav-link active-link" : "nav-link"
                            } >
                             <i className="uil uil-briefcase-alt nav-icon"></i>
                            Services
                          </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = 
                            'portfolio' spy= {true} smooth={true} offset={5} duration={500}  
                            onClick={()=> setActiveNav ('portfolio')} 
                            className = {
                            activeNav === 'portfolio' ? "nav-link active-link" : "nav-link"
                            } >
                             <i className="uil uil-scenery nav-icon"></i>
                            Portfolio
                          </Link>
                    </li>
                    <li className="nav-item">
                         <Link to = 
                            'contact' spy= {true} smooth={true} offset={15} duration={500}  
                            onClick={()=> setActiveNav ('contact')} 
                            className = {
                            activeNav === 'contact' ? "nav-link active-link" : "nav-link"
                            } >
                             <i className="uil uil-message nav-icon"></i>
                            Contact
                          </Link>
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