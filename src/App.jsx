import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden min-h-screen selection:bg-indigo-100 selection:text-indigo-900 w-full min-w-0">
      <Navbar />
      <main className="w-full min-w-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education/>
        {/* <Services/> */}
        {/* <Certifications/> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
