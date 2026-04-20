import React from 'react'
import SocialLinks from '../Components/SocialLinks'
import Hero from '../Components/Hero'

const HomePage = () => {
  return (
    <section className='mx-5 my-2 flex flex-row  ' id='Home'>
      <div className='w-8 mx-2'>
        <SocialLinks />
      </div>
      <div className='h-screen w-full mx-1'>
        <Hero />
      </div>
    </section>

  )
}

export default HomePage