import React from 'react';

const industries = [
  {
    title: 'Aerospace And Defense',
    description: 'This can be a short description about a project or an industry you are contributing to through the reliable products you build.',
    image: '/images/hero/space.jpg',
  },
  {
    title: 'Oil And Gas Industry',
    description: 'This can be a short description about a project or an industry you are contributing to through the reliable products you build.',
    image: '/images/hero/oil.jpg',
  },
  {
    title: 'Automotive Industry',
    description: 'This can be a short description about a project or an industry you are contributing to through the reliable products you build.',
    image: '/images/hero/industry.jpg',
  },
];

const Industrysection = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-semibold text-gray-700 mb-2">Our Contributions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Industries We Serve!</h2>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-sm text-gray-600 max-w-md">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industrysection;
