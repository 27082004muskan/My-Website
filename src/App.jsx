import React from'react';
import Navbar from "../../MyWebsite/src/components/Navbar";
import Hero from "../../MyWebsite/src/components/Hero";
import About from "../../MyWebsite/src/components/About";
import Skills from "../../MyWebsite/src/components/Skills";
import Projects from "../../MyWebsite/src/components/Projects";
import Contact from "../../MyWebsite/src/components/Contact";
import Footer from "../../MyWebsite/src/components/Footer";
import Certifications from "../../MyWebsite/src/components/Certifications";
import Activities from "../../MyWebsite/src/components/Activities";
import Experience from "../../MyWebsite/src/components/Experience";
import './App.css'
import Quote from "../../MyWebsite/src/components/Quote";


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
