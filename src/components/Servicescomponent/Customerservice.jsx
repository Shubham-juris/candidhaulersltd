import React from 'react'

const Customerservice = () => {
  return (
    <>
         <section className="py-10 px-4 md:px-20 bg-white mt-20">
        <h2 className="text-3xl font-bold flex justify-center text-gray-800 mb-2">
          Customer Service
        </h2>
        <p className="text-gray-600 flex justify-center mb-6">
          We provide exceptional customer service with 24/7 support for all
          logistics needs.
        </p>
        <div className="grid max-w-7xl mx-auto justify-center grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/service/custmer1.jpg"
            alt="Customer 1"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="/images/service/custmer2.jpg"
            alt="Customer 2"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </section>
    </>
  )
}

export default Customerservice
