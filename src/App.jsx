
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
import PreLoader from './Components/PreLoader/PreLoader';
import { useState } from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

  
function App() {
  const [preloadingComplete, setPreloadingComplete] = useState(false);

  useEffect(() => {
    Aos.init(); // Initialize Aos
    // Simulate preloading completion after 3 seconds
    const timer = setTimeout(() => {
      setPreloadingComplete(true);
    }, 6500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (

  
 <>
      {!preloadingComplete && <PreLoader />}
      {preloadingComplete && (
        <div>
          <Header />
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
        </div>
          )}
   </>

  
  
  )
}

export default App