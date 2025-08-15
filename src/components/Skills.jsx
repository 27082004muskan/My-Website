import React, { useState, useEffect, useRef } from 'react';
import { 
  Atom, Server, Code, Database, Braces, Wind, Table2, Flame, BarChart, 
  Sparkles, Zap, Star, Globe, Palette, FileSpreadsheet, TrendingUp,
  Activity, Coffee, Brain, Terminal
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef(null);

  const skillCategories = [
    {
      title: "MERN Stack Development",
      icon: Atom,
      color: "#10b981",
      skills: [
        { name: "MongoDB", level: 80, Icon: Database, color: "#4db33d" },
        { name: "Express.js", level: 85, Icon: Server, color: "#68a063" },
        { name: "React.js", level: 90, Icon: Atom, color: "#61dafb" },
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedLevels(prev => ({
              ...prev,
              [`${catIndex}-${skillIndex}`]: skill.level
            }));
          }, (catIndex * 300) + (skillIndex * 100));
        });
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % skillCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Clean Category Tab - Your original design unchanged
  const CategoryTab = ({ category,  isActive, onClick }) => {
    const tabClass = isActive 
      ? 'border-gray-600 bg-gray-800/60 scale-105' 
      : 'border-gray-700/50 bg-gray-900/40 hover:border-gray-600/50 hover:bg-gray-800/40';

    const iconContainerStyle = {
      backgroundColor: `${category.color}20`,
      boxShadow: isActive ? `0 0 20px ${category.color}40` : 'none'
    };

    const iconStyle = {
      color: category.color
    };

    const indicatorStyle = {
      backgroundColor: category.color
    };

    return (
      <button
        onClick={onClick}
        className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-500 text-left w-full ${tabClass}`}
      >
        <div 
          className={`p-3 rounded-lg transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
          style={iconContainerStyle}
        >
          <category.icon 
            className="w-6 h-6" 
            style={iconStyle}
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{category.title}</h3>
          <p className="text-gray-400 text-sm">{category.skills.length} technologies</p>
        </div>

        {isActive && (
          <div 
            className="w-1 h-8 rounded-full"
            style={indicatorStyle}
          />
        )}
      </button>
    );
  };

  // NEW: Clean Skill Card - Text Only Design
  const CleanSkillCard = ({ skill, index, categoryIndex }) => {
    const skillKey = `${categoryIndex}-${index}`;
    const level = animatedLevels[skillKey] || 0;
    
    return (
      <div
        className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ 
          animationDelay: `${index * 80}ms`,
          borderColor: `${skill.color}30`
        }}
      >
        {/* Skill Name */}
        <div className="flex items-center justify-between mb-4">
          <h4 
            className="text-white font-bold text-lg"
            style={{ color: skill.color }}
          >
            {skill.name}
          </h4>
          <span className="text-gray-300 text-sm font-medium">{level}%</span>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 bg-gray-800/60 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1500 ease-out"
              style={{
                width: `${level}%`,
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                boxShadow: `0 0 10px ${skill.color}40`
              }}
            />
          </div>
        </div>

        {/* Subtle glow on hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}05, transparent 70%)`
          }}
        />
      </div>
    );
  };

  const currentCategory = skillCategories[activeCategory];

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-cyan-200 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <Star className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my technical expertise across various development domains
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side - Category Tabs (unchanged) */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span>Expertise Areas</span>
            </h3>
            
            {skillCategories.map((category, index) => (
              <CategoryTab
                key={index}
                category={category}
                index={index}
                isActive={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              />
            ))}

            {/* Overall Progress */}
            <div className="mt-8 p-6 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl">
              <h4 className="text-white font-semibold mb-4">Overall Progress</h4>
              <div className="space-y-3">
                {skillCategories.map((category, index) => {
                  const avgLevel = Math.round(
                    category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
                  );
                  
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{category.title}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${avgLevel}%`,
                              backgroundColor: category.color
                            }}
                          />
                        </div>
                        <span className="text-white text-xs font-medium w-10">{avgLevel}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Clean Skills Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div 
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: `${currentCategory.color}20`,
                  boxShadow: `0 0 20px ${currentCategory.color}30`
                }}
              >
                <currentCategory.icon 
                  className="w-6 h-6" 
                  style={{ color: currentCategory.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">{currentCategory.title}</h3>
            </div>

            {/* Clean Skills Grid - No Congestion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentCategory.skills.map((skill, index) => (
                <CleanSkillCard
                  key={`${activeCategory}-${index}`}
                  skill={skill}
                  index={index}
                  categoryIndex={activeCategory}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/10">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 font-medium">Always Learning New Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
