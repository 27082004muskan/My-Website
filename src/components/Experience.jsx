import React from 'react';
import { 
  Briefcase, Calendar, MapPin, TrendingUp, Code, 
  Building, Star, Award
} from 'lucide-react';

const Experience = () => {
  const experience = {
    id: 1,
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
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-gray-600 to-orange-700 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <Award className="w-6 h-6 text-orange-500" />
          </div>
        </div>

        {/* Single Experience Card - Full Width */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100/50 p-10 lg:p-12">
            
            {/* Role Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-800">{experience.company}</span>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap gap-3 mb-8 text-sm">
              <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl font-semibold text-gray-700 border border-gray-200">
                {experience.type}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl font-semibold text-gray-700 border border-gray-200">
                <Calendar className="w-4 h-4" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl font-semibold text-gray-700 border border-gray-200">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl text-sm font-semibold border text-gray-700 bg-gradient-to-r from-orange-50 to-gray-50 border-orange-200 hover:bg-orange-100 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {experience.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-4 text-base leading-relaxed">
                  <div className="w-2 h-2 mt-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-semibold flex-1">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Impact Badge */}
            <div className="pt-6 border-t border-gray-100">
              <span className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200 text-sm font-bold text-orange-800 shadow-md">
                <TrendingUp className="w-4 h-4" />
                {experience.impact}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
