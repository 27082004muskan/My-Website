import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  TrendingUp,
  Building,
  Star,
  Award
} from 'lucide-react';

const Experience = () => {
  const [active, setActive] = useState(0);

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Greenvora Exim Pvt Ltd",
      duration: "Nov 2025 - Present",
      location: "Remote",
      achievements: [
        "Built MERN export-import platform",
        "Integrated email for lead generation",
        "Optimized APIs for scalability"
      ],
      skills: ["MERN", "API", "UI/UX"],
      impact: "Scalable System"
    },
    {
      title: "Full Stack Developer Intern",
      company: "The Fin Lit Project",
      duration: "Jun 2025 - Oct 2025",
      location: "Remote",
      achievements: [
        "Revamped Learn & Invest modules",
        "Deployed with ESG screening tool",
        "Handled QA & performance testing"
      ],
      skills: ["MERN", "UI/UX", "Deployment"],
      impact: "Platform Revamp"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        {/* SAME HEADING */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="w-6 h-6 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-gray-600 to-orange-700 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <Award className="w-6 h-6 text-orange-500" />
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="flex gap-6 h-[420px]">

          {experiences.map((exp, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className={`relative rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden
              ${
                active === index
                  ? "flex-[3] bg-white shadow-2xl"
                  : "flex-[1] bg-gray-100 opacity-70"
              }`}
            >

              <div className="p-6 h-full flex flex-col justify-between">

                {/* Top Content */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                    <Building className="w-4 h-4 text-orange-500" />
                    {exp.company}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* EXPANDED CONTENT */}
                {active === index && (
                  <div className="mt-6 space-y-4 animate-fadeIn">

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-orange-50 text-orange-700 rounded-md border border-orange-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 mt-2 bg-orange-500 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Impact */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-orange-500 text-white rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      {exp.impact}
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