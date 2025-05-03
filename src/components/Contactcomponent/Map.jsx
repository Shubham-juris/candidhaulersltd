import React from "react";

const Map = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-0 pb-[28.125%] relative rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.802624414711!2d-73.99404718459516!3d40.737261979328205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aaf441ff27%3A0x84b73c7f89f5143d!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1615349385678!5m2!1sen!2sin"
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
