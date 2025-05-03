import Contactpage from '@/components/Contactcomponent/Contactpage'
import HeroSection from '@/components/Contactcomponent/HeroSection'
import Map from '@/components/Contactcomponent/Map'
import Footer from '@/components/Homecomponents/Footer'
import Navbar from '@/components/Homecomponents/Navbar'
import React from 'react'

const Contactcontainer = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Contactpage/>
      <Map/>
      <Footer/>
    </>
  )
}

export default Contactcontainer
