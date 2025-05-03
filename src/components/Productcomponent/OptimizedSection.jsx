import React from 'react'

const OptimizedSection = () => {
  return (
    <>
         <section className="px-4 md:px-16 py-12 bg-white mt-30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Optimized & Industry-ready Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            For All Your Complicated Needs
          </h2>
          <p className="text-gray-700 mb-4">
            We build products that fulfill your needs. Click edit button to
            change this text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <img
            src="/images/product/img2.jpg"
            alt="Product 1"
            className="w-full sm:w-1/2 h-[400] rounded-lg object-cover shadow-lg"
          />
          <img
            src="/images/product/img3.jpg"
            alt="Product 2"
            className="w-full sm:w-1/2 h-[400] rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default OptimizedSection
