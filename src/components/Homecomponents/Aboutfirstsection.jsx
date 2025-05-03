import React from 'react'

const Aboutfirstsection = () => {
  return (
    <>
      <section className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-red-500 font-semibold uppercase mb-2">About Us</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
          25 Long Years Of Manufacturing<br />
          Excellence With Quality At It's Best!
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-4">
          Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm md:text-base transition">
          Learn More
        </button>
      </div>
    </section>    
    </>
  )
}

export default Aboutfirstsection
