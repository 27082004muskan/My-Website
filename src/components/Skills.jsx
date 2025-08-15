import React, { useState, useEffect, useRef } from 'react';
import { 
  Atom, Server, Code, Database, Braces, Wind, Table2, Github, Flame, BarChart, 
  Sparkles, Zap, Star, Globe, Palette, Settings, FileSpreadsheet, TrendingUp,
  Activity, Coffee, Layout, Layers, BookOpen, Brain, Terminal
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Organized Skills by Category
  const skillCategories = {
    mernStack: [
      { name: "MongoDB", level: 80, Icon: Database, color: "#4db33d" },
      { name: "Express.js", level: 85, Icon: Server, color: "#68a063" },
      { name: "React.js", level: 90, Icon: Atom, color: "#61dafb" },
      { name: "Node.js", level: 85, Icon: Server, color: "#339933" },
      { name: "Firebase", level: 80, Icon: Flame, color: "#ffca28" },
      { name: "HTML", level: 95, Icon: Globe, color: "#e34c26" },
      { name: "CSS", level: 90, Icon: Palette, color: "#1572b6" },
      { name: "JavaScript", level: 95, Icon: Braces, color: "#f7df1e" },
      { name: "Tailwind CSS", level: 85, Icon: Wind, color: "#38bdf8" },
    ],
    dataAnalytics: [
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
    ],
    languages: [
      { name: "Java", level: 75, Icon: Coffee, color: "#f89820" },
      { name: "Python", level: 88, Icon: Code, color: "#3776ab" },
      { name: "SQL", level: 90, Icon: Database, color: "#336791" },
      { name: "C", level: 70, Icon: Terminal, color: "#a8b9cc" },
    ]
  };

  const categories = [
    { 
      name: "MERN Stack", 
      level: 80, 
      gradient: "from-emerald-400 via-teal-500 to-blue-600",
      icon: Atom,
      description: "Full-stack web development"
    },
    { 
      name: "Data Analytics", 
      level: 95, 
      gradient: "from-blue-400 via-purple-500 to-indigo-600",
      icon: BarChart,
      description: "Data visualization & insights"
    },
    { 
      name: "Java Development", 
      level: 70, 
      gradient: "from-orange-400 via-red-500 to-pink-600",
      icon: Code,
      description: "Enterprise applications"
    },
    { 
      name: "Problem Solving", 
      level: 70, 
      gradient: "from-pink-400 via-purple-500 to-violet-600",
      icon: Zap,
      description: "Algorithm & logic design"
    },
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
      categories.forEach((cat, index) => {
        setTimeout(() => {
          setAnimatedLevels(prev => ({
            ...prev,
            [cat.name]: cat.level
          }));
        }, index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const SkillCard = ({ skill, index, category }) => (
    <div
      className={`relative group cursor-pointer transform-gpu transition-all duration-700 flex-shrink-0 ${
        isVisible ? 'animate-card-appear' : 'opacity-0'
      } animate-float-individual hover:animate-none`}
      style={{ 
        animationDelay: `${index * 60}ms`,
        animationDuration: `${3 + (index * 0.3)}s`,
        transform: hoveredSkill === `${category}-${index}` ? 'rotateY(15deg) rotateX(10deg) scale(1.15) translateY(-10px)' : ''
      }}
      onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Self-Moving 3D Card */}
      <div className="relative w-16 h-16 preserve-3d animate-card-wiggle" style={{ animationDelay: `${index * 200}ms` }}>
        
        {/* Front Face */}
        <div 
          className="absolute inset-0 rounded-lg border-2 backdrop-blur-xl transition-all duration-500 transform preserve-3d animate-card-breathe"
          style={{
            backgroundColor: `${skill.color}15`,
            borderColor: `${skill.color}60`,
            boxShadow: `0 4px 16px ${skill.color}20`,
            animationDelay: `${index * 100}ms`
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-1">
            <skill.Icon 
              className="w-3.5 h-3.5 mb-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 animate-icon-dance" 
              style={{ 
                color: skill.color,
                filter: `drop-shadow(0 0 8px ${skill.color}60)`,
                animationDelay: `${index * 150}ms`
              }}
            />
            <h4 className="text-white font-medium text-[8px] text-center leading-tight">{skill.name}</h4>
          </div>

          {/* Auto-Animated Border */}
          <div className="absolute inset-0 rounded-lg border-2 animate-border-wave transition-opacity duration-300" style={{ borderColor: skill.color }}></div>
          
          {/* Orbiting Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-1 h-1 rounded-full animate-orbit-particle"
              style={{
                backgroundColor: skill.color,
                top: '10%',
                left: '50%',
                animationDuration: `${2 + (index * 0.2)}s`,
                animationDelay: `${index * 100}ms`
              }}
            ></div>
            <div
              className="absolute w-0.5 h-0.5 rounded-full animate-orbit-particle-reverse"
              style={{
                backgroundColor: skill.color,
                top: '80%',
                right: '20%',
                animationDuration: `${1.5 + (index * 0.1)}s`,
                animationDelay: `${index * 200}ms`
              }}
            ></div>
          </div>
        </div>

        {/* Back Face (Skill Level) */}
        <div 
          className="absolute inset-0 rounded-lg backdrop-blur-xl transition-all duration-500 transform preserve-3d rotateY-180 opacity-0 group-hover:opacity-100"
          style={{
            backgroundColor: `${skill.color}25`,
            borderColor: `${skill.color}80`,
            border: `2px solid`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-xs font-bold text-white mb-1">{skill.level}%</div>
            <div className="w-8 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-1000 animate-progress-fill"
                style={{ 
                  width: `${skill.level}%`,
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-cyan-200 bg-clip-text text-transparent animate-gradient-x">
              Skills & Technologies
            </h2>
            <Sparkles className="w-6 h-6 text-purple-400 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Content with Added Space Between Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-24 mb-16">
          
          {/* Left: Enhanced Progress Bars */}
          <div className="xl:col-span-4 space-y-6">
            <div className="text-center xl:text-left">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center xl:justify-start space-x-2">
                {/* <Star className="w-5 h-5 text-yellow-400" /> */}
                {/* <span>Expertise Areas</span> */}
              </h3>
              {/* <p className="text-gray-400 text-sm">Core competencies & proficiency levels</p> */}
            </div>
            
            <div className="space-y-6">
              {categories.map((cat, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${cat.gradient} p-2 animate-bounce-gentle`} style={{ animationDelay: `${index * 200}ms` }}>
                        <cat.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-lg">{cat.name}</span>
                        <p className="text-gray-400 text-xs">{cat.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">
                        {animatedLevels[cat.name] || 0}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Simple Progress Bar */}
                  <div className="relative">
                    <div className="h-3 bg-gray-800/60 rounded-full backdrop-blur-sm border border-gray-700/30 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${cat.gradient} transition-all duration-2000 ease-out relative`}
                        style={{ 
                          width: `${animatedLevels[cat.name] || 0}%`,
                        }}
                      >
                        {/* Static particle at end */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                          <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                    {/* Simple glow effect */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-20 blur-sm rounded-full transition-all duration-2000`}
                      style={{ width: `${animatedLevels[cat.name] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 Horizontal Sections with Self-Moving Cards */}
          <div className="xl:col-span-8 space-y-12">
            
            {/* 1. MERN Stack */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <Atom className="w-6 h-6 text-green-400 animate-spin-slow" />
                <h3 className="text-2xl font-bold text-white">MERN Stack</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-green-400 via-teal-400 to-blue-400"></div>
              </div>
              
              <div className="overflow-x-auto pb-3">
                <div className="flex space-x-3 min-w-max">
                  {skillCategories.mernStack.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} category="mern" />
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Data Analytics */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-6 h-6 text-blue-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">Data Analytics</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"></div>
              </div>
              
              <div className="overflow-x-auto pb-3">
                <div className="flex space-x-3 min-w-max">
                  {skillCategories.dataAnalytics.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} category="data" />
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Languages */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-6 h-6 text-orange-400 animate-bounce-gentle" />
                <h3 className="text-2xl font-bold text-white">Programming Languages</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"></div>
              </div>
              
              <div className="overflow-x-auto pb-3">
                <div className="flex space-x-3 min-w-max">
                  {skillCategories.languages.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} category="lang" />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-900/60 backdrop-blur-xl rounded-2xl px-8 py-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 group">
            <div className="flex items-center space-x-3">
              <Zap className="w-6 h-6 text-yellow-400 group-hover:animate-bounce" />
              <span className="text-gray-300 font-medium text-base">Always learning new technologies</span>
            </div>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ 
                    backgroundColor: ['#10b981', '#3b82f6', '#ec4899', '#f59e0b', '#8b5cf6'][i],
                    animationDelay: `${i * 150}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
