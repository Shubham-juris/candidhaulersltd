import React from "react";

const Map = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-0 pb-[28.125%] relative rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100738.44900909628!2d-114.20068482094418!3d51.02700073232202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371700ce2e2e4bb%3A0x32b76bfae8dd8b0f!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1714911461453!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
