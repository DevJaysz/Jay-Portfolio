
import './App.css'
import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Portfolio from './Components/Portfolio/Portfolio';
import React from 'react'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
   
    <>
    <Header/>

    <main className="main">
   
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </main>

    <Footer/>

  
    </>
  )
}

export default App