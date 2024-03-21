import { useRef } from "react";
import myImage from "../assets/SathuuSU.png";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-8 md:pl-20 md:pr-20 pt-20 md:pt-0"
    >
      <div className="max-w-8xl mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="md:w-1/3 flex justify-start">
          <img
            src={myImage}
            alt="Your Image"
            className="rounded-full border-2 border-gray-200 shadow-lg md:w-96"
          />
        </div>
        <div style={{ flex: "2" }} className="md:w-2/3">
          <div className="max-w-4xl md:w-full md:pr-8 mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-7 mt-5 text-center md:text-left">
              About Me
            </h2>
            <p className="text-justify text-base md:text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus, tortor eget consequat ultrices, ipsum ipsum tristique
              enim, eget mattis purus mauris vel tortor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed dapibus, tortor eget
              consequat ultrices, ipsum ipsum tristique enim, eget mattis purus
              mauris vel tortor.
            </p>
            <p className="text-justify text-base md:text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus, tortor eget consequat ultrices, ipsum ipsum tristique
              enim, eget mattis purus mauris vel tortor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed dapibus, tortor eget
              consequat ultrices, ipsum ipsum tristique enim, eget mattis purus
              mauris vel tortor.
            </p>
            <div className="text-center md:text-left">
              <a
                href="#ProjectsSection"
                className="bg-transparent text-white mt-5 hover:bg-white hover:text-gray-900 transition duration-500 text-2xl font-bold py-2 px-4 rounded-full shadow-lg border border-white inline-block md:mx-0"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
