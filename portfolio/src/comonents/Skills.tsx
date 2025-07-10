const Skills = () => {
  const skills: string[] = [
    "HTML",
    "Css",
    "Tailwind Css",
    "Material Ui",
    "java Script",
    "Type Script",
    "React.js",
    "Node.js",
    "Express.js",
    "Mongo Db",
    "Api Handling",
    "Redux",
    "Rtk Query",
  ];
  return (
    <section className="my-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
      My Expertise
    </h2>

    {/* Description */}
    <div className="text-center text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
      As a passionate MERN stack developer, I specialize in building dynamic,
      scalable, and user-centric web applications.
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-700 bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:bg-blue-600 transition-all duration-300 text-center border border-gray-600 hover:border-blue-500"
        >
          <span className="text-sm sm:text-base md:text-lg font-medium text-blue-200">
            {skill}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Skills;
