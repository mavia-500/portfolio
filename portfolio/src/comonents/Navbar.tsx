import { Link } from "react-router-dom";
// import Projects from "./projects.tsx";
import Introduction from "./Introduction.tsx";
import Projects from "./projects.tsx";
import Skills from "./Skills.tsx";
import About from "./About.tsx";
import ContactUs from "./ContactUs.tsx";
import Footer from "./Footer.tsx";
// import Projects from "./projects";

const Navbar = () => {
  return (
    <>
      <div >
        <nav className="bg-white shadow-md fixed w-full z-50 px-6 py-4 flex items-center justify-between ">
          <div>
            <p className="text-xl font-bold text-blue-600">Portfolio</p>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Skills
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Contact
            </button>
          </div>
        </nav>
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
