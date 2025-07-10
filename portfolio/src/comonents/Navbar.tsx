import Introduction from "./Introduction.tsx";
import Projects from "./Projects.tsx";
import Skills from "./Skills.tsx";
import About from "./About.tsx";
import ContactUs from "./ContactUs.tsx";
import Footer from "./Footer.tsx";
import { useState } from "react";
// import Projects from "./projects";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu after click on small screen
  };
  return (
    <>
      <div>
        <nav className="bg-white shadow-md fixed w-full z-50 px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <p className="text-xl font-bold text-blue-600">Portfolio</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 capitalize"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md fixed top-16 w-full px-6 py-4 z-40">
            <div className="flex flex-col space-y-4">
              {["home", "about", "projects", "skills", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 text-left capitalize"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <div id="home">
          <Introduction />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
