import React from 'react'

const HeroSection = () => {
  return (
    <>
       <section
      className="w-full h-[556] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage: "url('/Images/project/projectBgImage.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center">
        Contact
      </h1>
    </section>
    </>
  )
}

export default HeroSection
