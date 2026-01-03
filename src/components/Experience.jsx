import React from 'react';
import { 
  Briefcase, Calendar, MapPin, TrendingUp, Code, 
  Building, Target, ArrowRight, Star, Award
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "ShadowFox Virtual Internship",
      company: "ShadowFox",
      type: "Web Development Internship",
      duration: "Jan 2026-Present",
      location: "Online",
      achievements: [
       "Working on real-world projects using HTML, CSS, JavaScript, and React"
      ],
      skills: ["Mern", "Github"],
      
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "The Fin Lit Project",
      type: "Full-time Internship",
      duration: "Jun 2025 - Oct 2025 • 5 mos",
      location: "Remote",
      achievements: [
        "Revamped MERN platform with Fin Lit Learn, Invest modules",
        "Deployed on Hostinger + ESG screening tool + QA testing"
      ],
      skills: ["MERN", "UI/UX", "APIs", "Hostinger"],
      impact: "Platform Revamp"
    },
    {
      id: 3,
      title: "Data Analytics Intern",
      company: "Deloitte Australia - Forage",
      type: "Virtual Experience",
      duration: "Feb 2025 - Mar 2025 • 2 mos",
      location: "Remote",
      achievements: [
        "Data analysis & forensic tech program",
        "Advanced analytics + reporting"
      ],
      skills: ["Data Analysis", "Excel", "Tableau"],
      impact: "Analytics"
    },
    {
      id: 4,
      title: "Data Visualization",
      company: "TATA Group - Forage",
      type: "Virtual Experience",
      duration: "Jan 2025 - Feb 2025 • 2 mos",
      location: "Remote",
      achievements: [
        "Business intelligence simulation",
        "Data storytelling & dashboards"
      ],
      skills: ["Data Viz", "BI", "Tableau"],
      impact: "Visualization"
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-gray-600 to-orange-700 bg-clip-text text-transparent">
              Experience Timeline
            </h2>
            <Award className="w-6 h-6 text-orange-500" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-400 via-orange-300 to-orange-500"></div>
          
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`flex items-center mb-16 lg:mb-24 relative ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-lg border-4 border-white z-10"></div>

              {/* Content Card - No Boxes */}
              <div className={`flex-1 px-6 py-6 lg:py-8 lg:px-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-xl hover:border-orange-200/70 transition-all duration-500 w-full max-w-md mx-auto lg:mx-0 ${
                index % 2 === 0 ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'
              }`}>
                
                {/* Role Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 leading-tight">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">{experience.company}</span>
                    </div>
                  </div>
                </div>

                {/* Metadata - Smaller Text */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg font-medium text-gray-700 border border-gray-200">
                    {experience.type}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg font-medium text-gray-700 border border-gray-200">
                    <Calendar className="w-3 h-3" />
                    {experience.duration}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg font-medium text-gray-700 border border-gray-200">
                    <MapPin className="w-3 h-3" />
                    {experience.location}
                  </span>
                </div>

                {/* Skills - Compact */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-semibold border text-gray-700 bg-gradient-to-r from-orange-50/80 to-gray-50 border-orange-200/50 hover:bg-orange-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Achievements - Smaller Text, No Boxes */}
                <div className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 mt-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Badge */}
                {experience.id !== 4 && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 text-xs font-semibold text-orange-800">
                      <TrendingUp className="w-3 h-3" />
                      {experience.impact}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
