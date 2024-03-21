import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/sathurshanan-manoharan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sathurshanan-Manoharan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/sathurshanan.m?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm mt-2">
        © 2024 Sathurshanan Manoharan. <br /> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
