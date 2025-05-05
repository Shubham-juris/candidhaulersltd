import React from "react";

const Contactpage = () => {
  return (
    <>
      <div className="w-full px-4 py-12 flex flex-wrap justify-center gap-12 bg-gray-50">
        {/* Left Side - Contact Info */}
        <div className="w-full md:max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <span>calgary,alberta,canada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📧</span>
              <a
                href="mailto:info@candidhaulers.com"
                className="hover:underline"
              >
                info@candidhaulers.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <a href="tel:+191062685255" className="hover:underline">
                +1 910-626-85255
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:max-w-lg bg-white rounded-lg shadow-sm p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-red-400 focus:border-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-red-400 focus:border-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-red-400 focus:border-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="5"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-red-400 focus:border-red-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
