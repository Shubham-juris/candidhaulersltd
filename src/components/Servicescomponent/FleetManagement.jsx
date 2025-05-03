import React from 'react'

const FleetManagement = () => {
  return (
    <>
       <section className="py-10 px-4 md:px-20 bg-gray-50 mt-15">
      <h2 className="text-3xl font-bold  flex justify-center text-gray-800 mb-2">Fleet & Management</h2>
      <p className="text-gray-600  flex justify-center mt-10 mb-6">
        Our advanced fleet is equipped to handle all transport requirements safely and on time.
      </p>
      <div className="grid  max-w-7xl mx-auto justify-center grid-cols-1 md:grid-cols-2 mt-10 gap-6">
        <img src="/images/service/fleet1.jpg" alt="Fleet 1" width={600} height={400} className="w-full h-64 object-cover rounded" />
        <img src="/images/service/management1.avif" alt="Fleet 2" width={600} height={400} className="w-full h-64 object-cover rounded" />
      </div>
    </section>
    </>
  )
}

export default FleetManagement
