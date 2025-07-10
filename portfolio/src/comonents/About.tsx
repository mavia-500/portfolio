const About = () => {
  return (
    <>
     <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8 md:p-10 mb-8 transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I’m a passionate <span className="font-semibold text-indigo-600">Full Stack Developer</span> specializing in the <span className="font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, and Node.js). With hands-on experience building dynamic and responsive web applications, I take pride in transforming complex problems into user-friendly solutions. From crafting intuitive front-end interfaces to developing robust back-end systems, I enjoy every step of the development process. Whether it's creating single-page applications, RESTful APIs, or integrating third-party services, I bring clean code, modern practices, and performance-driven thinking to the table. I thrive in fast-paced environments, love learning new technologies, and am always focused on building scalable, maintainable, and impactful digital products.
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6 animate-fade-in-up animation-delay-200">
            Feel free to reach out if you’re interested in working together, have a project in mind, or just want to connect — I’d love to hear from you!
          </p>
          <a
            href="https://wa.me/03131519954"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
