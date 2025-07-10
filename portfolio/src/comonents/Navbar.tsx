
import { Link } from "react-router-dom";
import Projects from "./projects";

const Navbar = () => {
  return (
    <>
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xl font-bold text-blue-600">Portfolio</p>
        </div>
        <div className="flex space-x-6">
          <Link
            to={"#home"}
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to={"#projects"}
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Projects
          </Link>
          <Link
            to={"#skills"}
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Skills
          </Link>
          <Link
            to={"#about"}
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            About
          </Link>
          <Link
            to={"#Contact"}
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Contact
          </Link>
        </div>
        {/* <Projects/> */}
      </nav>
      </div>
      
    </>
  );
};

export default Navbar;
