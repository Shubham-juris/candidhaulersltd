import Aboutdetails from '@/components/Aboutcomponent/Aboutdetails'
import Coolfacts from '@/components/Aboutcomponent/Coolfacts'
import Herosection from '@/components/Aboutcomponent/Herosection'
import Qualitysection from '@/components/Aboutcomponent/Qualitysection'
import Footer from '@/components/Homecomponents/Footer'
import Navbar from '@/components/Homecomponents/Navbar'
import React from 'react'

const AboutContainer = () => {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Aboutdetails/>
      <Coolfacts/>
      <Qualitysection/>
      <Footer/>
    </>
  )
}

export default AboutContainer
