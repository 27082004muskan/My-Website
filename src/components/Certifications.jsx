import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Code, BarChart3, Star, Zap, Award, Trophy, Download, Cloud, Monitor, Wrench, TrendingUp, BarChart, Sheet, ChevronLeft, ChevronRight } from 'lucide-react';
import MicroSoft from "../assets/certificates/MicroSoft_Azure.png";
import Full from "../assets/certificates/Full_Stack_Linkedin.pdf";
import Ambassador from "../assets/certificates/image.png";
import Google from "../assets/certificates/htmlCssClone.png";
import Tata from "../assets/certificates/TATA.pdf";
import Deloitte from "../assets/certificates/Deloitte.pdf";
import SQL from "../assets/certificates/sql.pdf";
import Excel from "../assets/certificates/Excel.pdf";
import Tableau from "../assets/certificates/tableau.pdf";
import PowerBi from "../assets/certificates/powerBi.pdf";
import React_Mern from "../assets/certificates/react.pdf";
import NodeJs from "../assets/certificates/Node.pdf";
import Npm from "../assets/certificates/npm.pdf";
import Express from "../assets/certificates/express.pdf";

const Certifications = () => {
  const mernScrollRef = useRef(null);
  const dataScrollRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState({ mern: false, data: false });
  const [canScrollRight, setCanScrollRight] = useState({ mern: true, data: true });
  
  const mernCertifications = [
    {
      title: "How Web Works and Intro to Azure",
      issuer: "Microsoft",
      date: "2024",
      icon: "Cloud",
      category: "Cloud & Web",
      color: "from-cyan-400 to-blue-500",
      downloadUrl: MicroSoft,
      fileName: "Microsoft_Azure_Certificate"
    },
        {
      title: " React Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      icon: "Terminal",
      category: "React-MERN Stack",
      color: "from-red-400 to-pink-500",
      downloadUrl: React_Mern,
      fileName: "React_Essential_Training_Certificate"
    },
      {
      title: " Node.js Essential Training",
      issuer: "LinkedIn Learning",
      date: "2025",
      icon: "Database",
      category: "Node.js-MERN Stack",
      color: "from-cyan-400 to-blue-500",
      downloadUrl: NodeJs,
      fileName: "Nodejs_Essential_Training_Certificate"
    },
{
  title: "Learning npm: A Package Manager",
  issuer: "LinkedIn Learning",
  date: "2025", 
  icon: "Package",
  category: "Package Management",
  color: "from-green-400 to-emerald-500",
  downloadUrl: Npm, // Replace with your actual import
  fileName: "NPM_Package_Manager_Certificate"
},
{
  title: "Express Essential: Build Powerful Web Apps with Node.js",
  issuer: "LinkedIn Learning",
  date: "2025",
  icon: "Server", 
  category: "Backend Development",
  color: "from-yellow-400 to-orange-500",
  downloadUrl: Express, // Replace with your actual import  
  fileName: "Express_NodeJS_Certificate"
},
    {
      title: "Full Stack Development",
      issuer: "LinkedIn Learning",
      date: "2024",
      icon: "Code",
      category: "Full Stack",
      color: "from-purple-400 to-pink-500",
      downloadUrl: Full,
      fileName: "Full_Stack_Development_Certificate"
    },
    {
      title: "HTML , CSS , JS",
      issuer: "MicroSoft Learn Student Ambassador",
      date: "2024",
      icon: "Monitor",
      category: "Frontend",
      color: "from-green-400 to-emerald-500",
      downloadUrl: Ambassador,
      fileName: "HTML_CSS_JS_Certificate"
    },
    {
      title: "Tinder Clone using HTML, CSS",
      issuer: "Google Developer Student Club",
      date: "2024",
      icon: "Wrench",
      category: "Project",
      color: "from-red-400 to-pink-500",
      downloadUrl: Google,
      fileName: "Tinder_Clone_Project_Certificate"
    },
 
  ];

  const dataCertifications = [
    {
      title: "Data Analytics",
      issuer: "Deloitte Australia - Forage",
      date: "2024",
      icon: "BarChart3",
      category: "Analytics",
      color: "from-blue-400 to-indigo-500",
      downloadUrl: Deloitte,
      fileName: "Deloitte_Data_Analytics_Certificate"
    },
    {
      title: "Data Visualization: Empowering Business with Effective Insights",
      issuer: "TATA Group - Forage",
      date: "2024",
      icon: "TrendingUp",
      category: "Visualization",
      color: "from-violet-400 to-purple-500",
      downloadUrl: Tata,
      fileName: "TATA_Data_Visualization_Certificate"
    },
    {
      title: "Power BI Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      icon: "Zap",
      category: "Business Intelligence",
      color: "from-amber-400 to-yellow-500",
      downloadUrl: PowerBi,
      fileName: "Power_BI_Training_Certificate"
    },
       {
      title: "SQL - Query Language",
      issuer: "Ws Cube",
      date: "2024",
      icon: "Trophy",
      category: "Query Language",
      color: "from-yellow-400 to-orange-500",
      downloadUrl: SQL,
      fileName: "Sql_Certificate"
    },
    {
      title: "Tableau 2024.1: Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      icon: "BarChart",
      category: "Data Visualization",
      color: "from-teal-400 to-cyan-500",
      downloadUrl: Tableau,
      fileName: "Tableau_Training_Certificate"
    },
    {
      title: "Excel Essential Training - Microsoft 365",
      issuer: "LinkedIn Learning",
      date: "2024",
      icon: "Sheet",
      category: "Spreadsheet",
      color: "from-lime-400 to-green-500",
      downloadUrl: Excel,
      fileName: "Excel_Training_Certificate"
    }
  ];

  // Enhanced download handler
  const handleDownload = (cert) => {
    try {
      if (cert.downloadUrl.startsWith('/certificates/')) {
        // For demo purposes - in production, replace with actual file URLs
        const link = document.createElement('a');
        link.href = cert.downloadUrl;
        link.download = `${cert.fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Handle imported images/files
        const link = document.createElement('a');
        link.href = cert.downloadUrl;
        link.download = `${cert.fileName}.${cert.downloadUrl.includes('.png') ? 'png' : 'pdf'}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.log('Download initiated for:', cert.title);
      // Fallback notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300';
      notification.textContent = `Downloading ${cert.title} certificate...`;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  };

  // Scroll functions
  const scrollHorizontal = (ref, direction) => {
    const container = ref.current;
    if (!container) return;
    
    const scrollAmount = 320; // card width + gap
    const newScrollPosition = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  // Check scroll position
  const checkScrollPosition = (ref, section) => {
    const container = ref.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setCanScrollLeft(prev => ({
      ...prev,
      [section]: scrollLeft > 0
    }));
    
    setCanScrollRight(prev => ({
      ...prev,
      [section]: scrollLeft < scrollWidth - clientWidth - 10
    }));
  };

  // Mouse tracking and scroll effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Set up scroll listeners
  useEffect(() => {
    const mernContainer = mernScrollRef.current;
    const dataContainer = dataScrollRef.current;

    const handleMernScroll = () => checkScrollPosition(mernScrollRef, 'mern');
    const handleDataScroll = () => checkScrollPosition(dataScrollRef, 'data');

    if (mernContainer) {
      mernContainer.addEventListener('scroll', handleMernScroll);
      handleMernScroll(); // Initial check
    }
    
    if (dataContainer) {
      dataContainer.addEventListener('scroll', handleDataScroll);
      handleDataScroll(); // Initial check
    }

    return () => {
      if (mernContainer) mernContainer.removeEventListener('scroll', handleMernScroll);
      if (dataContainer) dataContainer.removeEventListener('scroll', handleDataScroll);
    };
  }, []);

  const CertificationCard = ({ cert, index }) => (
    <div 
      className="flex-none w-[300px] h-[280px] rounded-2xl p-1 transition-all duration-500 transform hover:scale-105 group cursor-pointer relative overflow-hidden"
      onClick={() => handleDownload(cert)}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        background: `linear-gradient(135deg, ${cert.color.split(' ')[1]}, ${cert.color.split(' ')[3]})`,
        boxShadow: hoveredCard === index 
          ? `0 20px 40px -12px ${cert.color.split(' ')[1]}40, 0 0 30px ${cert.color.split(' ')[3]}30` 
          : '0 8px 25px rgba(0,0,0,0.3)'
      }}
    >
      {/* Download indicator */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all duration-200">
          <Download className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Inner card */}
      <div className="relative z-10 w-full h-full rounded-2xl bg-gray-900/90 backdrop-blur-xl p-5 flex flex-col justify-between border border-white/10">
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"
              style={{
                backgroundColor: cert.color.split(' ')[1],
                top: `${20 + (i * 20)}%`,
                left: `${15 + (i * 20)}%`,
                animation: hoveredCard === index ? `float-particle-${i % 3} 2s infinite ${i * 0.3}s` : 'none',
                boxShadow: `0 0 8px ${cert.color.split(' ')[1]}`
              }}
            />
          ))}
        </div>

        {/* Top section */}
        <div className="relative z-20">
          <div className="flex items-center justify-between mb-3">
            <div className="text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
              {React.createElement(
                cert.icon === 'Cloud' ? Cloud :
                cert.icon === 'Code' ? Code :
                cert.icon === 'Monitor' ? Monitor :
                cert.icon === 'Wrench' ? Wrench :
                cert.icon === 'Trophy' ? Trophy :
                cert.icon === 'BarChart3' ? BarChart3 :
                cert.icon === 'TrendingUp' ? TrendingUp :
                cert.icon === 'Zap' ? Zap :
                cert.icon === 'BarChart' ? BarChart :
                cert.icon === 'Sheet' ? BarChart3 :
                Award, 
                { className: "w-10 h-10" }
              )}
            </div>
            <Star className="w-5 h-5 text-white/50 group-hover:text-white group-hover:animate-pulse transition-all duration-400" />
          </div>
          
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 transition-all duration-400 group-hover:scale-105 bg-gradient-to-r ${cert.color} text-black`}>
            <Award className="w-3 h-3" />
            {cert.category}
          </div>
          
          <h3 className="text-base font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-400 leading-snug min-h-[2.5rem] flex items-start">
            {cert.title}
          </h3>
          
          <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
            {cert.issuer}
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-700/50 group-hover:border-white/20 transition-all duration-300 relative z-20">
          <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white transition-colors duration-300">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{cert.date}</span>
          </div>
          <Trophy className="w-4 h-4 text-gray-500 group-hover:text-yellow-400 transition-all duration-400" />
        </div>

        {/* Subtle glow effect */}
        <div 
          className="absolute w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl"
          style={{
            background: `radial-gradient(circle, ${cert.color.split(' ')[1]}, transparent)`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </div>
  );

  const ScrollButton = ({ direction, onClick, canScroll, gradientFrom, gradientTo }) => (
    <button
      onClick={onClick}
      disabled={!canScroll}
      className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg`}
    >
      {direction === 'left' ? 
        <ChevronLeft className="w-5 h-5 text-white" /> : 
        <ChevronRight className="w-5 h-5 text-white" />
      }
    </button>
  );

  return (
    <section 
      ref={containerRef}
      id="certifications" 
      className="relative overflow-hidden bg-black"
    >
      {/* Dynamic animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        
        {/* Moving gradient orb */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, #8b5cf6, #3b82f6, transparent)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
            transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg)`
          }}
        />
        
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
          style={{
            animation: 'float-slow 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
          style={{
            animation: 'float-reverse 6s ease-in-out infinite reverse'
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* MERN Stack Section */}
      <div className="relative z-10 py-16 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div>
              {/* <Code className="w-5 h-5 text-purple-400 group-hover:animate-pulse" /> */}
              {/* <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                MERN Stack & Development
              </span> */}
              {/* <Zap className="w-4 h-4 text-pink-400 group-hover:animate-bounce" /> */}
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Web Development
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            
            {/* <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-stack development mastery with cutting-edge web technologies and frameworks
            </p> */}
          </div>

          <div className="relative">
            <div
              ref={mernScrollRef}
              className="flex items-start gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {mernCertifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={`mern-${index}`} />
              ))}
            </div>
            
            <ScrollButton
              direction="left"
              onClick={() => scrollHorizontal(mernScrollRef, 'left')}
              canScroll={canScrollLeft.mern}
              gradientFrom="from-purple-500/80"
              gradientTo="to-pink-500/80"
            />
            
            <ScrollButton
              direction="right"
              onClick={() => scrollHorizontal(mernScrollRef, 'right')}
              canScroll={canScrollRight.mern}
              gradientFrom="from-purple-500/80"
              gradientTo="to-pink-500/80"
            />
          </div>
        </div>
      </div>

      {/* Data Analytics Section */}
      <div className="relative z-10 py-16 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div>
              {/* <BarChart3 className="w-5 h-5 text-blue-400 group-hover:animate-pulse" /> */}
              {/* <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Data Analytics & Visualization
              </span> */}
              {/* <Star className="w-4 h-4 text-cyan-400 group-hover:animate-spin" /> */}
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
              Data Analytics
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            
            {/* <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Business intelligence expertise with advanced data visualization and analytics mastery
            </p> */}
          </div>

          <div className="relative">
            <div
              ref={dataScrollRef}
              className="flex items-start gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {dataCertifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={`data-${index}`} />
              ))}
            </div>
            
            <ScrollButton
              direction="left"
              onClick={() => scrollHorizontal(dataScrollRef, 'left')}
              canScroll={canScrollLeft.data}
              gradientFrom="from-blue-500/80"
              gradientTo="to-cyan-500/80"
            />
            
            <ScrollButton
              direction="right"
              onClick={() => scrollHorizontal(dataScrollRef, 'right')}
              canScroll={canScrollRight.data}
              gradientFrom="from-blue-500/80"
              gradientTo="to-cyan-500/80"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes float-particle-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(8px, -8px) rotate(120deg); }
          66% { transform: translate(-4px, 4px) rotate(240deg); }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-6px, -10px) rotate(180deg); }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, 6px) rotate(90deg); }
          75% { transform: translate(-5px, -3px) rotate(270deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -15px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg); }
          50% { transform: translate(-15px, 15px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
