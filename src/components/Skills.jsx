import React from "react";
import {
  Atom, Server, Code, Database, Braces, Wind, Table2, Flame, BarChart,
  Sparkles, Globe, Palette, FileSpreadsheet, TrendingUp,
  Activity, Coffee, Brain, Terminal
} from "lucide-react";
import PageLayout from "./PageLayout";

const Skills = () => {
  const skillCategories = [
    {
      title: "MERN Stack Development",
      icon: Atom,
      color: "#10b981",
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
      color: "#3b82f6",
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
      color: "#f59e0b",
      skills: [
        { name: "Java", level: 75, Icon: Coffee, color: "#f89820" },
        { name: "Python", level: 88, Icon: Code, color: "#3776ab" },
        { name: "SQL", level: 90, Icon: Database, color: "#336791" },
        { name: "C", level: 70, Icon: Terminal, color: "#a8b9cc" },
      ]
    }
  ];

  return (
    <PageLayout
      id="skills"
      badge="Technical Expertise"
      badgeIcon={Sparkles}
      label="Skills & Technologies"
      title="Tools and technologies I use to build and analyze"
      description="From full stack web development to data analytics — a toolkit built through projects, internships, and continuous learning."
    >
      <div className="space-y-8 sm:space-y-10">
        {skillCategories.map((category, catIndex) => {
          const CategoryIcon = category.icon;

          return (
            <div
              key={catIndex}
              className="rounded-[2rem] border border-violet-400/10 bg-violet-500/5 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:border-violet-400/20 sm:p-8"
            >
              <div className="mb-8 flex items-center gap-4 border-b border-violet-400/10 pb-6">
                <div
                  className="rounded-xl p-3 shadow-lg"
                  style={{
                    backgroundColor: `${category.color}20`,
                    boxShadow: `0 0 20px ${category.color}30`
                  }}
                >
                  <CategoryIcon
                    className="h-6 w-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {category.skills.map((skill, index) => {
                  const SkillIcon = skill.Icon;
                  return (
                    <div
                      key={index}
                      className="group cursor-pointer rounded-2xl border border-violet-400/10 bg-[#0d1528] p-4 shadow-md transition duration-300 hover:scale-105 hover:border-violet-400/30 hover:bg-violet-500/10 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex-shrink-0 rounded-lg p-2"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <SkillIcon
                            className="h-5 w-5"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="flex-1 truncate text-sm font-semibold text-white group-hover:text-violet-300">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-10 py-6 backdrop-blur-sm">
          <Sparkles className="h-5 w-5 text-violet-400" />
          <span className="text-lg font-semibold text-slate-200">Always Learning New Technologies</span>
          <Sparkles className="h-5 w-5 text-violet-400" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
