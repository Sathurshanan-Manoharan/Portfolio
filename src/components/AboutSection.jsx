import React from "react";
import myImage from "../assets/SathuuSU.png";
import * as FaIcons from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-8 md:pl-20 md:pr-20 pt-10 md:pt-0">
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
              My name is Sathurshanan Manoaharan, and I schooled at{" "}
              <b> S. Thomas' College, Mount Lavinia</b>. It was during my time
              at college where my journey towards technology and effective
              communication began. As a former debating captain, I developed and
              sharpened my public speaking skills and developed a passionate
              interest in articulating ideas with clarity and conviction. Now,
              as a student of Software Engineering at the
              <b> Informatics Institute of Technology</b>, affiliated with the
              University of Westminster, I continue to fuel my enthusiasm for
              technology while expanding my knowledge base in the field.
            </p>
            <p className="text-justify text-base md:text-lg lg:text-xl mb-6">
              In addition to my academic pursuits, I actively engage in
              extracurricular activities, serving as the Students' Union
              president at IIT. This role allows me to further refine my
              leadership abilities and foster a vibrant community of
              collaboration and innovation among my peers. With a strong
              foundation in both technology and public speaking, I am prepared
              to effect positive change in the software engineering realm,
              leveraging my diverse skill set to drive innovation and make
              meaningful contributions to the tech industry and beyond.
            </p>
            <div className="flex justify-center md:justify-center items-center space-x-6 mt-5 md:m-8">
              <a
                href="https://www.linkedin.com/in/sathurshanan-manoharan"
                className="text-white hover:text-blue-400 transition duration-500"
              >
                <FaIcons.FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Sathurshanan-Manoharan"
                className="text-white hover:text-gray-400 transition duration-500"
              >
                <FaIcons.FaGithub size={30} />
              </a>
              <a
                href="https://www.instagram.com/sathurshanan.m?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-white hover:text-pink-400 transition duration-500"
              >
                <FaIcons.FaInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61553811906733"
                className="text-white hover:text-blue-500 transition duration-500"
              >
                <FaIcons.FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com/sathurshanan_m"
                className="text-white hover:text-blue-400 transition duration-500"
              >
                <FaIcons.FaTwitter size={30} />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <TechPill icon={<FaIcons.FaJava />} text="Java" />
              <TechPill icon={<FaIcons.FaNodeJs />} text="Node.js" />
              <TechPill icon={<FaIcons.FaPython />} text="Python" />
              <TechPill icon={<FaIcons.FaJs />} text="JavaScript" />
              <TechPill icon={<FaIcons.FaReact />} text="React" />
              <TechPill icon={<FaIcons.FaFigma />} text="Figma" />
              <TechPill icon={<FaIcons.FaDatabase />} text="MongoDB" />
              <TechPill icon={<FaIcons.FaDatabase />} text="SQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechPill = ({ icon, text }) => {
  return (
    <div className="bg-white bg-opacity-20 text-white shadow-lg rounded-full p-2 flex items-center justify-center">
      {icon}
      <span className="font-bold ml-1">{text}</span>
    </div>
  );
};

export default AboutSection;
