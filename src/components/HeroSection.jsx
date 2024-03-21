import { useEffect, useRef } from "react";
import Typed from "typed.js";
import myImage from "../assets/Sathu.png";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello! I'm Sathurshanan Manoaharan"],
      typeSpeed: 60,
      loop: true,
      backDelay: 1500,
      backSpeed: 40,

      css: `
        .highlight {
          color: green; // Change the color as desired
        }
      `,
      onStringTyped: function (index, self) {
        self.toggleClass("highlight");
      },
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div
      id="herosection"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-8 md:pl-20 md:pr-20 pt-20 md:pt-0"
    >
      <div
        className="max-w-7xl mx-auto px-4 py-3 md:flex md:justify-between md:items-center"
        style={{ margin: "0 20px" }}
      >
        <div style={{ flex: "1" }}>
          <div className="max-w-4xl md:w-full md:pr-8">
            <div className="typed-container text-2xl lg:text-4xl mb-4 font-bold">
              <span ref={typedRef}></span>
            </div>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus, tortor eget consequat ultrices, ipsum ipsum tristique
              enim, eget mattis purus mauris vel tortor.
            </p>

            <button className="bg-transparent text-white hover:bg-white hover:text-gray-900 transition duration-500 text-2xl font-bold py-2 px-4 rounded-full shadow-lg border border-white">
              Explore More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            src={myImage}
            alt="Your Image"
            className="rounded-full shadow-lg md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
