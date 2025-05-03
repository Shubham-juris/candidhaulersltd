'use client';

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Products', value: 150 },
  { label: 'Years of Experience', value: 15 },
  { label: 'Completed Projects', value: 250 },
];

export default function Coolfacts() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let start = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setCounts(stats.map(stat => Math.floor(stat.value * progress)));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 border-b">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 items-center gap-12">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold text-gray-700 uppercase mb-2">
            Some Cool Facts
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Numbers Speak For <br /> Themselves
          </h2>
        </div>

        <div className="md:col-span-3 flex flex-wrap justify-around gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-extrabold text-gray-800">
                {counts[index]}
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
