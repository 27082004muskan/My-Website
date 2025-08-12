import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, Calendar, MapPin, TrendingUp, Code, Smartphone, 
  Database, Brain, Award, ExternalLink, ArrowRight, Star,
  Building, Users, Target, Zap, CheckCircle, Clock
} from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: "Tech Intern",
      company: "The Fin Lit Project",
      type: "Full-time Internship",
      duration: "June 2025 - Present",
      location: "Remote",
      status: "Current",
      logo: "💼",
      color: "#10b981",
      gradient: "from-emerald-400 to-teal-600",
      achievements: [
        "Revamped UI for 2 modules – Fin Lit Invest & Fin Lit Learn, improving engagement by 30%",
        "Integrated ESG-based Sustainable Investing Tool with 100% mobile responsiveness",
        "Migrated 50+ components from WordPress to React, enhancing scalability and performance",
        "Will create complete website with perfect user and admin experience."
      ],
      skills: ["MERN Stack", "UI/UX Design", "WordPress", "APIs", "Mobile Development"],
      impact: "50% engagement increase"
    },
    {
      id: 2,
      title: "Data Analytics Virtual Intern",
      company: "Forage • Deloitte",
      type: "Virtual Experience",
      duration: "Feb 2025 - Mar 2025 • 2 mos",
      location: "Online",
      status: "Completed",
      logo: "📊",
      color: "#3b82f6",
      gradient: "from-blue-400 to-indigo-600",
      achievements: [
        "Completed job simulation focused on data analytics and forensic technology",
        "Worked on identifying data quality issues and conducting comprehensive data analysis",
        "Recommended actionable insights for risk mitigation strategies",
        "Simulated client-reporting techniques aligned with Deloitte's consulting environment"
      ],
      skills: ["Tableau", "Microsoft Excel", "Data Analysis", "Risk Assessment", "Client Reporting"],
      impact: "Risk mitigation insights"
    },
    {
      id: 3,
      title: "Data Visualization Virtual Intern",
      company: "Tata Group",
      type: "Virtual Experience", 
      duration: "Jan 2025 - Feb 2025 • 2 mos",
      location: "Online",
      status: "Completed",
      logo: "📈",
      color: "#8b5cf6",
      gradient: "from-purple-400 to-violet-600",
      achievements: [
        "Participated in business intelligence simulation involving real-world data storytelling",
        "Gained hands-on experience in choosing right visuals and framing business scenarios",
        "Created and interpreted visualizations to support data-driven decision-making",
        "Aligned deliverables with Tata's standards for corporate insights"
      ],
      skills: ["Data Analysis", "Business Intelligence", "Data Visualization", "Storytelling"],
      impact: "Enhanced BI capabilities"
    }
  ];

  // Mouse tracking for interactive effects
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const ExperienceCard = ({ experience, index }) => (
    <div
      className={`relative group cursor-pointer transform-gpu transition-all duration-700 ${
        isVisible ? 'animate-card-slide-up' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        animationDelay: `${index * 200}ms`,
        transform: hoveredCard === experience.id ? 'scale(1.02) translateY(-8px)' : ''
      }}
      onMouseEnter={() => setHoveredCard(experience.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Compact Main Card */}
      <div 
        className="relative p-6 rounded-xl backdrop-blur-xl border-2 transition-all duration-500 overflow-hidden animate-card-breathe"
        style={{
          backgroundColor: `${experience.color}10`,
          borderColor: `${experience.color}40`,
          boxShadow: `0 6px 24px ${experience.color}15`,
          animationDelay: `${index * 300}ms`
        }}
      >
        {/* Background Gradient Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-5 transition-opacity duration-500 group-hover:opacity-10`}
        ></div>

        {/* Compact Status Badge */}
        <div className="absolute top-3 right-3">
          <div 
            className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
              experience.status === 'Current' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}
          >
            {experience.status === 'Current' ? (
              <Clock className="w-3 h-3 animate-pulse" />
            ) : (
              <CheckCircle className="w-3 h-3" />
            )}
            <span>{experience.status}</span>
          </div>
        </div>

        {/* Compact Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-start space-x-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl animate-logo-float flex-shrink-0"
              style={{ 
                backgroundColor: `${experience.color}20`,
                border: `2px solid ${experience.color}40`
              }}
            >
              {experience.logo}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                {experience.title}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <Building className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-base font-semibold truncate" style={{ color: experience.color }}>
                  {experience.company}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span className="text-xs">{experience.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">{experience.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Type Badge */}
        <div className="mb-4">
          <span 
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: `${experience.color}15`,
              color: experience.color,
              border: `1px solid ${experience.color}30`
            }}
          >
            <Briefcase className="w-3 h-3 mr-1" />
            {experience.type}
          </span>
        </div>

        {/* Compact Achievements */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <Target className="w-4 h-4" style={{ color: experience.color }} />
            <span>Key Achievements</span>
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start space-x-2 group/item">
                <ArrowRight 
                  className="w-3 h-3 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" 
                  style={{ color: experience.color }}
                />
                <span className="text-gray-300 text-xs leading-relaxed group-hover/item:text-white transition-colors duration-300">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Compact Skills Tags */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-white mb-2 flex items-center space-x-2">
            <Code className="w-4 h-4" style={{ color: experience.color }} />
            <span>Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Compact Impact Metric */}
        <div className="pt-3 border-t border-gray-700/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" style={{ color: experience.color }} />
              <span className="text-xs font-medium text-gray-400">Impact:</span>
            </div>
            <span className="text-xs font-semibold" style={{ color: experience.color }}>
              {experience.impact}
            </span>
          </div>
        </div>

        {/* Animated Border on Hover */}
        <div 
          className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-glow"
          style={{ borderColor: experience.color }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 animate-particle-float"
              style={{
                backgroundColor: experience.color,
                left: `${25 + i * 40}%`,
                top: `${20 + i * 30}%`,
                animationDelay: `${i * 200}ms`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="py-16 bg-gradient-to-br from-black via-gray-900 to-slate-950 relative overflow-hidden"
    >
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 160}px`,
            top: `${mousePosition.y - 160}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-purple-500/6 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Briefcase className="w-7 h-7 text-emerald-400 animate-bounce-gentle" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-emerald-200 bg-clip-text text-transparent animate-gradient-x">
              Work Experience
            </h2>
            <Star className="w-7 h-7 text-purple-400 animate-pulse" />
          </div>
          {/* <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions and gaining hands-on experience across fintech and data analytics
          </p> */}
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Compact Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Compact Footer Stats */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-emerald-400/30 transition-all duration-300 group">
            <Users className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:animate-bounce" />
            <div className="text-xl font-bold text-white mb-1">3+</div>
            <div className="text-gray-400 text-sm">Companies</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300 group">
            <Award className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:animate-bounce" />
            <div className="text-xl font-bold text-white mb-1">50+</div>
            <div className="text-gray-400 text-sm">Components Migrated</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-purple-400/30 transition-all duration-300 group">
            <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:animate-bounce" />
            <div className="text-xl font-bold text-white mb-1">30%</div>
            <div className="text-gray-400 text-sm">Engagement Boost</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
