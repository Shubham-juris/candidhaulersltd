import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 text-white">
        <div className="z-10">
          <p className="text-sm md:text-base font-semibold mb-2">
            World's Leading Industry Corporation
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            One Industry All Solution
          </h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm md:text-base transition">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
