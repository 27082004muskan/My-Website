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
        { name: "Java", level: 88, Icon: Coffee, color: "#f89820" },
        { name: "Python", level: 70, Icon: Code, color: "#3776ab" },
        { name: "SQL", level: 85, Icon: Database, color: "#336791" },
        { name: "C", level: 80, Icon: Terminal, color: "#a8b9cc" },
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
          }, (catIndex * 500) + (skillIndex * 100));
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Your original CategoryTab component - UNCHANGED
  const CategoryTab = ({ category, isActive, onClick }) => {
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

  // FIXED Hemisphere Skill component - NO OVERLAPPING, NO CUTOFF
  const HemisphereSkill = ({ skill, index, total, categoryIndex }) => {
    const skillKey = `${categoryIndex}-${index}`;
    const level = animatedLevels[skillKey] || 0;
    
    // REDUCED radius to prevent overlapping
    const angle = (Math.PI * index) / (total - 1);
    const radius = 180; // Reduced from 220 to 180
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
      <div
        className={`absolute transition-all duration-700 group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% - ${y}px)`,
          transform: 'translate(-50%, -50%)',
          animationDelay: `${index * 100}ms`
        }}
      >
        {/* INCREASED spacing between icon and name */}
        <div className="flex flex-col items-center space-y-4">
          {/* Progress Ring and Icon */}
          <div className="relative">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="3"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke={skill.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 26}`}
                strokeDashoffset={`${2 * Math.PI * 26 * (1 - level / 100)}`}
                className="transition-all duration-2000 ease-out"
                style={{ filter: `drop-shadow(0 0 8px ${skill.color}60)` }}
              />
            </svg>

            {/* Icon Container */}
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
              style={{
                background: `radial-gradient(circle, ${skill.color}25, ${skill.color}15, rgba(0,0,0,0.3) 70%)`
              }}
            >
              <skill.Icon 
                className="w-6 h-6" 
                style={{ 
                  color: skill.color,
                  filter: `drop-shadow(0 0 4px ${skill.color}80)`
                }}
              />
            </div>

            {/* Level Badge */}
            <div 
              className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border border-gray-800"
              style={{ 
                backgroundColor: skill.color,
                boxShadow: `0 0 8px ${skill.color}60`
              }}
            >
              {level}%
            </div>
          </div>

          {/* Skill Name with proper spacing */}
          <div className="text-center w-20">
            <div 
              className="text-xs font-bold px-2 py-1 rounded-md border whitespace-nowrap overflow-hidden text-ellipsis"
              style={{ 
                color: 'white',
                backgroundColor: `${skill.color}25`,
                borderColor: `${skill.color}60`,
                textShadow: `0 0 6px rgba(0,0,0,0.9), 0 1px 2px ${skill.color}60`,
                backdropFilter: 'blur(2px)'
              }}
            >
              {skill.name}
            </div>
          </div>
        </div>
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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-cyan-200 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto animate-pulse" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Your Original Category Tabs - UNCHANGED */}
          <div className="space-y-4">
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

            {/* Overall Progress Section - UNCHANGED */}
            <div className="mt-8 p-6 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl">
              <h4 className="text-white font-semibold mb-4">Overall Progress</h4>
              <div className="space-y-3">
                {skillCategories.map((category, index) => {
                  const avgLevel = Math.round(
                    category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
                  );
                  
                  const progressBarStyle = {
                    width: `${avgLevel}%`,
                    backgroundColor: category.color
                  };

                  return (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{category.title}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={progressBarStyle}
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

          {/* Right Side - FIXED Hemisphere Skills Display */}
          <div className="relative">
            <div className="flex items-center space-x-3 mb-8">
              <div 
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: `${currentCategory.color}20`,
                  boxShadow: `0 0 20px ${currentCategory.color}30`
                }}
              >
                <currentCategory.icon 
                  className="w-7 h-7" 
                  style={{ color: currentCategory.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white">{currentCategory.title}</h3>
            </div>

            {/* FIXED Hemisphere Container - Added padding and proper height */}
            <div className="relative h-[450px] w-full pt-12 pb-8 px-8 overflow-visible">
              {/* Center Hub */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-5 rounded-full border-2 transition-all duration-500"
                style={{
                  backgroundColor: `${currentCategory.color}20`,
                  borderColor: `${currentCategory.color}60`,
                  boxShadow: `0 0 30px ${currentCategory.color}30, inset 0 0 15px ${currentCategory.color}10`
                }}
              >
                <currentCategory.icon 
                  className="w-8 h-8" 
                  style={{ 
                    color: currentCategory.color,
                    filter: `drop-shadow(0 0 4px ${currentCategory.color}80)`
                  }}
                />
              </div>

              {/* Skills in PROPERLY SPACED Hemisphere */}
              {currentCategory.skills.map((skill, index) => (
                <HemisphereSkill
                  key={`${activeCategory}-${index}`}
                  skill={skill}
                  index={index}
                  total={currentCategory.skills.length}
                  categoryIndex={activeCategory}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Footer - UNCHANGED */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gray-900/60 backdrop-blur-xl rounded-2xl px-8 py-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 group">
            <Zap className="w-6 h-6 text-yellow-400 group-hover:animate-bounce" />
            <span className="text-gray-300 font-medium">Always learning new technologies</span>
            <div className="flex space-x-2">
              {['#10b981', '#3b82f6', '#ec4899', '#f59e0b', '#8b5cf6'].map((color, i) => {
                const dotStyle = {
                  backgroundColor: color,
                  animationDelay: `${i * 150}ms`
                };
                return (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={dotStyle}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
