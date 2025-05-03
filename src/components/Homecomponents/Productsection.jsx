import React from 'react';

const Productsection = () => {
  return (
    <section className="w-full py-16 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="absolute inset-0 bg-black/60" />
        <div className="flex-1 space-y-8 z-10">
          <h4 className="text-sm text-red-500 font-semibold">Our Products</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            We are the industry heads and <br /> produce the most reliable and trendy <br /> solution you are looking for.
          </h2>

          <div className="space-y-6 pt-6">
            <div>
              <h5 className="text-lg font-semibold text-white">Roller Chain Drives</h5>
              <p className="text-white text-sm">
                A short product description that highlights the main usage and features of the product.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white">Motors & Gear Motors</h5>
              <p className="text-white text-sm">
                A short product description that highlights the main usage and features of the product.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white">Inductive/Capacitive Sensors</h5>
              <p className="text-white text-sm">
                A short product description that highlights the main usage and features of the product.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Text + Button */}
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The only place where you’ll <br />
            get the perfect solution for <br />
            all your industry needs.
          </h2>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-base transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productsection;
