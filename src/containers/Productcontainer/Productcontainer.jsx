import Footer from '@/components/Homecomponents/Footer'
import Navbar from '@/components/Homecomponents/Navbar'
import Homesec from '@/components/Productcomponent/Homesec'
import OptimizedSection from '@/components/Productcomponent/OptimizedSection'
import Productfeature from '@/components/Productcomponent/Productfeature'
import React from 'react'

const Productcontainer = () => {
  return (
    <>
      <Navbar/>
      <Homesec/>
      <OptimizedSection/>
      <Productfeature/>
      <Footer/>
    </>
  )
}

export default Productcontainer
