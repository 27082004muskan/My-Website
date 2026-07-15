import { ExternalLink, Github, FolderKanban } from "lucide-react";
import Portal from "../assets/lms.gif";
import ESG from "../assets/Esg.gif";
import Road from "../assets/road.gif";
import Hotel from "../assets/Hotel.gif";
import Churn from "../assets/Churn.gif";
import vora from "../assets/vor.jpeg";
import PageLayout from "./PageLayout";

const Projects = () => {
  const mernProjects = [
    {
      title: "GreenVora Exim-Green Export Import",
      description:
        "Developing Greenvora Exim, a MERN-based import-export platform that enables sustainable and reliable trade. Build a responsive UI with React and Tailwind CSS alongside a scalable backend using Node.js, Express, and MongoDB. Implement solid authentication and comprehensive admin control features.",
      tech: ["React.js", "Node.js", "Express.js", "GPT API"],
      image: vora,
      liveUrl: "https://greenvora-exim-frontend.onrender.com/",
      githubUrl: "https://github.com/27082004muskan/GreenVora-Exim",
      duration: "Dec 2025-Present",
    },
    {
      title: "VittaVardhan - ESG Mutual Fund Investment",
      description:
        "A fintech platform for ESG investing with interactive investment simulator, real-time data fetching, AI-powered fund recommendations, and impact tracking.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: ESG,
      liveUrl: "https://green-vest-esg-mutual-funds.vercel.app/",
      githubUrl:
        "https://github.com/27082004muskan/GreenVest---ESG-Mutual-Funds",
      duration: "Jan 2025-Nov 2025",
    },
    {
      title: "LMS Platform",
      description:
        "A comprehensive Learning Management System with course creation, student enrollment, progress tracking, and interactive learning modules.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      image: Portal,
      liveUrl: "https://lms-platform-mern-stack.onrender.com/",
      githubUrl: "https://github.com/27082004muskan/lms-platform",
      duration: "Aug 2025-Oct 2025",
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

  const cardClass =
    "group rounded-[1.5rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/20 hover:shadow-orange-500/10";

  const ProjectCard = ({ project }) => (
    <div className={cardClass}>
      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-t-[1.5rem]">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        {project.duration && (
          <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-sm">
            {project.duration}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-200 transition-colors duration-200 group-hover:text-orange-300">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full border border-white/10 bg-[#121821] px-3 py-1 text-xs font-medium text-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 transition-colors duration-200 hover:text-orange-300"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange-300 transition-colors duration-200 hover:text-orange-200"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout
      id="projects"
      badge="Portfolio Showcase"
      badgeIcon={FolderKanban}
      label="Featured Projects"
      title="Real-world products built with MERN and data analytics"
      description="A collection of full stack applications and data-driven projects — from fintech platforms to interactive dashboards."
    >
      <div className="mb-20">
        <h3 className="mb-8 text-2xl font-semibold text-white">
          MERN Stack Projects
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mernProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-8 text-2xl font-semibold text-white">
          Data Analytics Projects
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dataAnalyticsProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
