import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Experiences from './components/experiences/Experiences';

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}
