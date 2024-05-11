
import './App.css'
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import PortfolioCard from './Components/Portfolio/PortfolioCard';
import React from 'react'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import PreLoader from './Components/PreLoader/PreLoader'
//Aos Animation
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// Initialize Aos
function App() {
  useEffect(() => {
    Aos.init(); 
  }, []);

  return (
    
   
    <> 
    <Header/>

    <main className="main">
   
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Services/>
      <PortfolioCard/>
      <Contact/>
    </main>

    <Footer/>

  
    </>
  )
}

export default App