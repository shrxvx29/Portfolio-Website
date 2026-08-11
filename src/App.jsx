import React from 'react'
import { useState, useEffect } from 'react'


import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Academics from './Pages/Academics'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import PortfolioLoader from './Components/PortfolioLoader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setIsLeaving(true), 1700)
    const removeTimer = window.setTimeout(() => setIsLoading(false), 1950)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  return (
    <>
      {isLoading && <PortfolioLoader leaving={isLeaving} />}

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

