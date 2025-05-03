import React from "react";

const Logistic = () => {
  return (
    <>
      <section className="py-10 px-4 md:px-20 bg-gray-50 mt-15">
        <h2 className="text-3xl font-bold flex justify-center text-gray-800 mb-2">
          Logistics
        </h2>
        <p className="text-gray-600 flex justify-center mb-6">
          Efficient logistics solutions tailored to meet business-specific
          goals.
        </p>
        <div className="grid  max-w-7xl mx-auto justify-center grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <img
            src="/images/service/logistic1.webp"
            alt="Logistics 1"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="/images/service/logistic2.webp"
            alt="Logistics 2"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </section>
    </>
  );
};

export default Logistic;
