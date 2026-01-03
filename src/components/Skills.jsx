import React from 'react';
import { 
  Atom, Server, Code, Database, Braces, Wind, Table2, Flame, BarChart, 
  Sparkles, Star, Globe, Palette, FileSpreadsheet, TrendingUp,
  Activity, Coffee, Brain, Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "MERN Stack Development",
      icon: Atom,
      color: "#10b981", // emerald green
      skills: [
        { name: "MongoDB", level: 80, Icon: Database, color: "#FAF9F6" },
        { name: "Express.js", level: 85, Icon: Server, color: "#68a063" },
        { name: "React.js", level: 90, Icon: Atom, color: "#E97451" },
        { name: "Node.js", level: 85, Icon: Server, color: "#339933" },
        { name: "Firebase", level: 80, Icon: Flame, color: "#ffca28" },
        { name: "HTML", level: 95, Icon: Globe, color: "#e34c26" },
        { name: "CSS", level: 90, Icon: Palette, color: "#1572b6" },
        { name: "JavaScript", level: 95, Icon: Braces, color: "#f7df1e" },
        { name: "Tailwind CSS", level: 85, Icon: Wind, color: "#38bdf8" },
      ]
    },
    {
      title: "Data Analytics & Visualization",
      icon: Brain,
      color: "#3b82f6", // blue
      skills: [
        { name: "Excel", level: 85, Icon: FileSpreadsheet, color: "#217346" },
        { name: "Power BI", level: 80, Icon: BarChart, color: "#f2c811" },
        { name: "Tableau", level: 75, Icon: TrendingUp, color: "#e97627" },
        { name: "SQL", level: 90, Icon: Database, color: "#336791" },
        { name: "EDA", level: 85, Icon: Activity, color: "#ff6b6b" },
        { name: "NumPy", level: 88, Icon: Code, color: "#013243" },
        { name: "Pandas", level: 90, Icon: Table2, color: "#150458" },
        { name: "Matplotlib", level: 82, Icon: BarChart, color: "#11557c" },
        { name: "Seaborn", level: 80, Icon: TrendingUp, color: "#4c72b0" },
        { name: "Scikit-learn", level: 78, Icon: Brain, color: "#f7931e" },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "#f59e0b", // orange
      skills: [
        { name: "Java", level: 75, Icon: Coffee, color: "#f89820" },
        { name: "Python", level: 88, Icon: Code, color: "#3776ab" },
        { name: "SQL", level: 90, Icon: Database, color: "#336791" },
        { name: "C", level: 70, Icon: Terminal, color: "#a8b9cc" },
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-25 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-orange-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800/80 via-stone-700/80 to-orange-800/60 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
         
          </div>
      
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={catIndex}
                className="bg-gray-900/80 border border-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:border-gray-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-800">
                  <div
                    className="p-3 rounded-xl shadow-lg"
                    style={{ 
                      backgroundColor: `${category.color}20`,
                      boxShadow: `0 0 20px ${category.color}40`
                    }}
                  >
                    <CategoryIcon
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.Icon;
                    return (
                      <div
                        key={index}
                        className="group bg-gray-400/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/70 hover:border-gray-400/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="p-2 rounded-lg group-hover:scale-110 transition-transform"
                              style={{ backgroundColor: `${skill.color}20` }}
                            >
                              <SkillIcon
                                className="w-5 h-5"
                                style={{ color: skill.color }}
                              />
                            </div>
                            <span className="text-lg font-semibold text-white group-hover:text-gray-100">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-gray-300 bg-gray-900/50 px-3 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden group-hover:bg-gray-600/50">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out group-hover:shadow-md"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${skill.color}, ${category.color})`,
                              boxShadow: `0 0 10px ${skill.color}50`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl px-10 py-6">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-gray-700 font-semibold text-lg">Always Learning New Technologies</span>
            <Sparkles className="w-5 h-5 text-orange-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
