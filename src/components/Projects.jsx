import { ExternalLink, Github } from "lucide-react";
import Portal from '../assets/lms.gif';
import ESG from "../assets/Esg.gif";
import Road from "../assets/road.gif";
import Hotel from "../assets/Hotel.gif";
import Churn from "../assets/Churn.gif";
import vora from '../assets/vora.png';
import VC from '../assets/VC.png';
import Vitta from '../assets/Vitta.png';


const Projects = () => {
  const mernProjects = [

    {
      title: "GreenVora Exim-Green Export Import",
      description:
        "Developing Greenvora Exim, a MERN-based import-export platform that enables sustainable and reliable trade. Build a responsive UI with React and Tailwind CSS alongside a scalable backend using Node.js, Express, and MongoDB. Implement solid authentication and comprehensive admin control features.",
      tech: ["React.js", "Node.js", "Express.js", "GPT API"],
      image: vora,
      liveUrl: "https://greenvora-exim-frontend.onrender.com/",
      githubUrl: "https://github.com/27082004muskan/Gemini",
       duration: "Dec 2025-Present"
    },
    {
      title: "VittaVardhan - ESG Mutual Fund Investment",
      description:
        "A fintech platform for ESG investing with interactive investment simulator, real-time data fetching, AI-powered fund recommendations, and impact tracking.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: Vitta,
      liveUrl: "#",
      githubUrl:
        "https://github.com/27082004muskan/GreenVest---ESG-Mutual-Funds",
         duration: "Jan 2025-Nov 2025"
    },
        {
      title: "LMS Platform",
      description:
        "A comprehensive Learning Management System with course creation, student enrollment, progress tracking, and interactive learning modules.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      image: VC,
      liveUrl: "https://lms-platform-mern-stack.onrender.com/",
      githubUrl: "https://github.com/27082004muskan/lms-platform",
   
       duration: "Aug 2025-Oct 2025"
    },
  ];

  const dataAnalyticsProjects = [
    {
      title: "Road Accident Data Analysis",
      description:
        "Analyzed 20,000+ road accidents to identify trends in accident hotspots, time patterns, and contributing factors. Built interactive Power BI dashboard used by 10+ analysts.",
      tech: ["Excel", "SQL", "Power BI", "Tableau"],
      image: Road,
      liveUrl: "#",
      githubUrl: "https://github.com/27082004muskan/Tableau-Road-Accident",
      duration: "Oct 2024 - Feb 2025",
    },
    {
      title: "Hotel Cancellation Dashboard",
      description:
        "Created a dynamic dashboard for analyzing 10,000+ hotel bookings, filtering by cancellation status, customer type, and stay duration. Improved analysis efficiency by 30%.",
      tech: ["Excel", "Power BI", "Power Query"],
      image: Hotel,
      liveUrl: "#",
      githubUrl: "https://github.com/27082004muskan/Data-Analysis--Dashboard",
      duration: "Sep 2024 - Oct 2024",
    },
    {
      title: "Customer Churn Analysis",
      description:
        "Analyzed 5,000+ customer records to identify key churn drivers, improving retention strategies by targeting high-risk segments. Reduced churn prediction error by 15%.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: Churn,
      liveUrl: "#",
      githubUrl: "https://github.com/27082004muskan/Churn-Analysis",
      duration: "Sep 2024",
    },
  ];

  // Shared card styling class
  const cardClass =
    "group bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200";

  return (
    <section id="projects" className="py-25 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-gray-500 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning MERN Stack development
            and Data Analytics
          </p> */}
        </div>

        {/* MERN Stack Projects - Grid Layout */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold underline text-center mb-8 text-gray-500">
            MERN Stack Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mernProjects.map((project, index) => (
              <div key={index} className={cardClass}>
                {/* Project Image */}
                <div className="h-48 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  {/* {project.status && (
                    <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.status} */}
                       {project.duration && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-1 rounded text-xs font-medium">
                      {project.duration}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-600 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-orange-700 rounded-full text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                  
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-orange-700 hover:text-orange-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Analytics Projects - Grid Layout */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-500 underline">
            Data Analytics Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAnalyticsProjects.map((project, index) => (
              <div key={index} className={cardClass}>
                {/* Project Image */}
                <div className="h-48 rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  {project.duration && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-1 rounded text-xs font-medium">
                      {project.duration}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-600 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-50 text-orange-700 rounded-full text-xs font-medium border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {/* <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a> */}
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-orange-700 hover:text-orange-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;