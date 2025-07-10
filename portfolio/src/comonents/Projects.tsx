
const Projects = () => {
  interface projectsData{
    title:string,
    description:string,
    link:string,
    image:string
  }
  
  const projectsData:projectsData[]=[
    {
      title:"Ecommerce App",
      description:"Make ecommerce app in next.js",
      link:"https://master.d2oz4ncyf9j4e3.amplifyapp.com/home",
      image:"/images/wallet.PNG"
    },
    {
      title:"Goal Tracker",
      description:"Make a goal tracker in react.js ",
      link:"https://goaltracke.netlify.app/",
      image:"/images/goaltracker.PNG"
    },
    {
      title:"Ecommerce App",
      description:"Make ecommerce app in next.js",
      link:"hhtp//",
      image:"/images/wallet.PNG"
    },
    {
      title:"Mine github",
      description:"Explore a variety of projects I've worked on — with source code available on GitHub",
      link:"https://github.com/mavia-500?tab=repositories",
      image:"/images/github.PNG"
    }

  ]
  return (
    <div className="min-h-screen" >
   <div className="flex justify-center items-center py-6 m-10 ">
  <h3 className="text-3xl font-bold  bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
    Projects I Worked On
  </h3>
</div>
    <div id='projects' className='m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
     
  {projectsData.map(({ title, description, link, image }, i) => (
    <div
      key={i}
      className="relative m-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition duration-300 hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <a
          href={link}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View Project
        </a>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default Projects