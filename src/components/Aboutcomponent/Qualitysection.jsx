import React from "react";

const Qualitysection = () => {
  return (
    <>
      <section className="py-16 px-6 md:px-12 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-center md:text-left">
            Quality Comes First! We Make Sure That Every Minute Detail Is Looked
            Into While Manufacturing Even The Smallest Product. Our Focus Is
            100% On Client Needs And Satisfaction.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h3 className="text-lg font-bold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600 text-sm">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">Quality Unsurpassed</h3>
              <p className="text-gray-600 text-sm">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-bold mb-2">
                We Are The Creators You Can Trust On For A Perfect Solution To
                All Your Needs.
              </h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-xl font-extrabold text-center md:text-left">
              Need Help with Easier Industrial Solutions? We Are Experts!
            </h3>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualitysection;
