import React from 'react'
import Intro from '../Components/Intro'
import IntroPic from '../Components/IntroPic'

const About = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen flex items-center" id='About'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-14 w-full max-w-6xl mx-auto">
        <IntroPic />
        <Intro />
      </div>
    </section>
  )
}

export default About