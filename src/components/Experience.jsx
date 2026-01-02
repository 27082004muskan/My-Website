import React from 'react';
import { 
  Briefcase, Calendar, MapPin, TrendingUp, Code, 
  Building, Target, ArrowRight
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "The Fin Lit Project",
      type: "Full-time Internship",
      duration: "June 2025 - October 2025",
      location: "Remote",
      achievements: [
        "Revamped The Fin Lit Project’s digital platform using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. Designed and deployed a full-featured website on Hostinger, developing key modules like Fin Lit Learn, Invest, and Sustainable Investing. Contributed to the ESG screening tool, cross-platform synchronization, QA testing, and documentation while delivering a finance micro-course promoting financial literacy and sustainability."
      ],
      skills: ["MERN Stack", "UI/UX", "WordPress", "APIs"],
      // impact: "50% Engagement ↑"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16 w-full">
          <div className="inline-flex items-center justify-center space-x-3 mb-6 w-full">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-600 via-stone-700 to-orange-800 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-gray-500 to-orange-700"></div>
        </div>

        {/* Horizontal Full Width Cards */}
        <div className="space-y-12 w-full">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="w-full p-8 lg:p-12 rounded-3xl shadow-xl border bg-gradient-to-r from-gray-100 to-stone-50 border-orange-300"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
                {/* Left Content */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="flex items-center gap-4 mb-6">
                    {/* <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-2xl shadow-lg">
                      {experience.logo}
                    </div> */}
                    <div>
                      <h3 className="text-3xl font-bold text-gray-700">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building className="w-5 h-5 text-gray-600" />
                        <span className="text-xl font-semibold text-gray-500">{experience.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8 text-lg text-gray-700">
                    <span className="px-4 py-2 bg-gray-100 rounded-xl border border-gray-200 font-medium">{experience.type}</span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl border border-gray-200 font-medium">
                      <Calendar className="w-4 h-4" /> {experience.duration}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl border border-gray-200 font-medium">
                      <MapPin className="w-4 h-4" /> {experience.location}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {experience.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-gray-700/90 via-stone-600/85 to-orange-700/70 
                      text-gray-200 font-semibold rounded-xl border border-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>

  
                </div>

                {/* Right Achievements */}
                <div className="flex-1 w-full">
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-to-r  text-gray-600 bg-clip-text">
                    <Target className="w-8 h-8" />
                    Key Results
                  </h4>
                  <div className="space-y-4">
                    {experience.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl border border-orange-100">
                        {/* <ArrowRight className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" /> */}
                        <span className="text-lg text-gray-600 font-medium leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
