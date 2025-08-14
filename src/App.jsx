import React from'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities";
import Experience from "./components/Experience";
import './App.css'
import Quote from "./components/Quote";


function App() {



  return (
    <>
     <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Quote/>
    <Skills/>
    <Projects/>
    <Certifications/>
    <Activities/>
    <Contact/>
    <Footer/>


    </>
  )
}

export default App
