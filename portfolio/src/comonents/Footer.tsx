const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Mahvia Sajjad
            </h3>
            <p className="text-gray-300 text-sm">
              "Shaping the future with innovation. <br /> Let's build something
              extraordinary together."
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@yourbrand.com"
                  className="hover:text-blue-400"
                >
                  maviasajjadabbasi@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+923131519954" className="hover:text-blue-400">
                  +92 (313)1519-954{" "}
                </a>
              </li>
              <li>Khanapull Islamabad Pakistan</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/mavia-500?tab=repositories"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A9.96 9.96 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a
              href="https://github.com/mavia-500?tab=repositories"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.34-1.6.57-2.47.67  .89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.85-2.73 1.04-.78-.83-1.89-1.35-3.12-1.35-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.99-3.56-.18-6.72-1.88-8.84-4.47-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.79 1.89 3.56-.69-.02-1.34-.21-1.91-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.92 3.97 2.96-1.46 1.14-3.29 1.82-5.28 1.82-.34 0-.68-.02-1.01-.06 1.89 1.21 4.13 1.91 6.54 1.91 7.85 0 12.14-6.5 12.14-12.14 0-.19 0-.37-.01-.56.83-.6 1.55-1.34 2.12-2.19z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Mahvia sajjad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
