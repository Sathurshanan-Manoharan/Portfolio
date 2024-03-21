const Navbar = () => {
  return (
    <header className="z-[999]">
      <nav className="flex justify-center fixed left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <ul className="flex items-center space-x p-1 text-xs md:text-sm font-medium rounded-full shadow-lg bg-gray-800 text-gray-200 ring-white/10">
          <li className="">
            <a
              href="/"
              className="relative block px-2 py-1 md:px-3 md:py-2 transition hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              href="#about"
              className="relative block px-2 py-1 md:px-3 md:py-2 transition hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li className="">
            <a
              href="#ProjectsSection"
              className="relative block px-2 py-1 md:px-3 md:py-2 transition hover:text-blue-500"
            >
              Projects
            </a>
          </li>
          <li className="">
            <a
              href="#contact"
              className="relative block px-2 py-1 md:px-3 md:py-2 transition hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
