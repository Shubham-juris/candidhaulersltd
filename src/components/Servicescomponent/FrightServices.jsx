import React from 'react'

const FrightServices = () => {
  return (
    <>
       <section className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold flex justify-center mt-15 text-gray-800 mb-2">Freight & Services</h2>
      <p className="text-gray-600 flex justify-center  mb-6">
        We manage domestic and international freight with speed and accuracy.
      </p>
      <div className="grid  max-w-7xl mx-auto justify-center grid-cols-1 md:grid-cols-2 mt-8 gap-6">
        <img src="/images/service/freight1.jpg" alt="Freight 1" width={600} height={400} className="w-full h-64 object-cover rounded" />
        <img src="/images/service/freight2.jpg" alt="Freight 2" width={600} height={400} className="w-full h-64 object-cover rounded" />
      </div>
    </section> 
    </>
  )
}

export default FrightServices
