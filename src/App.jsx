import React from 'react'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <>
      <Header />
      <section>
        <HomePage />
        <About />
        <Skills />
        <Project />
        <Contact />
      </section>
      <Footer />
    </>

  )
}

export default App