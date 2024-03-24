import myImage from "../assets/Sathuu.png";
import { FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white pt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome!</h1>
        <div className="text-3xl md:text-4xl mb-8">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm ")
                .typeString(
                  "<span class='text-blue-600 font-semibold'>Sathurshanan Manoaharan</span>"
                )
                // .typeString(" here")
                .start();
            }}
          />
        </div>
        <img
          src={myImage}
          alt="Your Image"
          className="rounded-full shadow-lg w-40 md:w-64 mt-8 md:mt-0 border-2 border-gray-200 mx-auto mb-4"
        />
        <p className="text-xl md:text-xl mb-2">
          I build cool stuff and solve interesting problems.
        </p>

        <button
          onClick={handleScrollDown}
          className="bg-transparent text-white hover:bg-white hover:text-gray-900 transition duration-500 text-lg md:text-xl font-bold py-3 px-6 rounded-full shadow-lg border border-white mt-8"
        >
          Explore More <FaArrowDown className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
