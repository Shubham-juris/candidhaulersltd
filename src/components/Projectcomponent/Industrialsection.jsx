import React from 'react'

const Industrialsection = () => {
    const products = [
        {
          image: "/Images/project/projectImage2.jpg",
          title: "Inductive / Capacitive Sensors",
          description:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
          cta: "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet",
        },
        {
          image: "/Images/project/projectImage3.jpg",
          title: "Engineering Class Chains",
          description:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
          cta: "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet",
        },
        {
          image: "/Images/project/projectImage4.jpg",
          title: "Mounted Ball Bearing Units",
          description:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
          cta: "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet",
        },
        {
          image: "/Images/project/projectImage5.jpg",
          title: "High Quality Gears & Conveyors",
          description:
            "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.",
          cta: "Luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet",
        },
      ];
  return (
    <>
          <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="font-bold text-sm">{product.cta}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-6">
          Need Help with Easier Industrial Solutions? We Are Experts!
        </h2>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300">
          Learn More
        </button>
      </div>
    </section>
    </>
  )
}

export default Industrialsection
