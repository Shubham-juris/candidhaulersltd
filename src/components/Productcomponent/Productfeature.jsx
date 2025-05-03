import React from 'react'

const Productfeature = () => {
    const features = [
        {
          title: "Roller Chain Drives",
          description:
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
        },
        {
          title: "Motors & Gear Motors",
          description:
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
        },
        {
          title: "Inductive / Capacitive Sensors",
          description:
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
        },
        {
          title: "Conveyor Chains",
          description:
            "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
        },
      ];
  return (
    <>
      <section className="px-4 md:px-16 py-12 bg-white mt-40 mb-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-gray-600">Our Innovations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Industry Focused Products!
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="border-t pt-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Productfeature
