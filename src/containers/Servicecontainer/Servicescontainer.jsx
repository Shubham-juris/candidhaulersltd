import Footer from '@/components/Homecomponents/Footer'
import Navbar from '@/components/Homecomponents/Navbar'
import Customerservice from '@/components/Servicescomponent/Customerservice'
import FleetManagement from '@/components/Servicescomponent/FleetManagement'
import FrightServices from '@/components/Servicescomponent/FrightServices'
import Heroservices from '@/components/Servicescomponent/Heroservices'
import Logistic from '@/components/Servicescomponent/Logistic'
import React from 'react'

const Servicescontainer = () => {
  return (
    <>
      <Navbar/>
      <Heroservices/>
      <Customerservice/>
      <FleetManagement/>
      <FrightServices/>
      <Logistic/>
      <Footer/>
    </>
  )
}

export default Servicescontainer
