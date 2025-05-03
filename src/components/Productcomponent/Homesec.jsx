import React from 'react'

const Homesec = () => {
  return (
    <>
      <section
      className="w-full h-[556] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage: "url('/Images/product/img.jpg')",
        backgroundAttachment: "fixed",
        
      }}
    >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold z-10 text-center">
        Products
      </h1>
    </section>
    </>
  )
}

export default Homesec;
