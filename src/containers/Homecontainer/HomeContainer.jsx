import Aboutfirstsection from '@/components/Homecomponents/Aboutfirstsection'
import Footer from '@/components/Homecomponents/Footer'
import HeroSection from '@/components/Homecomponents/HeroSection'
import Industrysection from '@/components/Homecomponents/Industrysection'
import Navbar from '@/components/Homecomponents/Navbar'
import Productsection from '@/components/Homecomponents/Productsection'
import React from 'react'

const HomeContainer = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Aboutfirstsection/>
      <Productsection/>
      <Industrysection/>
      <Footer/>
    </>
  )
}

export default HomeContainer
