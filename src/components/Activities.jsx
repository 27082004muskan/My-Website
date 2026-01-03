import React, { useState, useRef, useEffect } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Target, 
  Award, 
  Trophy, 
  Users, 
  Code, 
  BarChart3, 
  Zap, 
  Globe,
  Briefcase
} from 'lucide-react';

const Activities = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activitiesByYear = {
    2022: [
      { title: "Mighty Minds Conference", desc: "India's Biggest Interactive Knowledge Exchange", date: "Nov 2", icon: Target, category: "Conference", color: "#3b82f6" },
      { title: "InnoTech Participation", desc: "Technology innovation event", date: "Nov 18", icon: Zap, category: "Innovation", color: "#8b5cf6" },
      { title: "DevTown Tinder Clone", desc: "HTML & CSS project", date: "Dec", icon: Code, category: "Project", color: "#10b981" },
      { title: "Internshala Student Partner", desc: "Career development partner", date: "Dec", icon: Users, category: "Partnership", color: "#f59e0b" }
    ],
    2023: [
      { title: "First Hackathon Delhi", desc: "BPV Delhi hackathon", date: "Jun 15", icon: Zap, category: "Hackathon", color: "#ec4899" },
      { title: "Python to Web Bootcamp", desc: "Data Analytics journey", date: "Jul", icon: Code, category: "Bootcamp", color: "#f59e0b" },
      { title: "AI Expert Talk", desc: "VK Panchal session", date: "Aug", icon: Award, category: "Workshop", color: "#6366f1" },
      { title: "Microsoft Learn Ambassador", desc: "Web Servers program", date: "Sep", icon: Globe, category: "Program", color: "#06b6d4" },
      { title: "Git & GitHub Bootcamp", desc: "Version control skills", date: "Oct", icon: Code, category: "Bootcamp", color: "#8b5cf6" },
      { title: "Japan Work Opportunities", desc: "Career prospects talk", date: "Nov", icon: Globe, category: "Career", color: "#10b981" },
      { title: "Node.js Bootcamp", desc: "Backend development", date: "Dec", icon: Code, category: "Bootcamp", color: "#10b981" }
    ],
    2024: [
      { title: "Adobe Photoshop Bootcamp", desc: "Graphic Designing", date: "Jan", icon: Award, category: "Design", color: "#ec4899" },
      { title: "Flipkart Runway S4", desc: "Flagship competition", date: "Mar 22", icon: Trophy, category: "Competition", color: "#f59e0b" },
      { title: "AI Music Fest Microsoft", desc: "Microsoft Gurgaon event", date: "Jun 15", icon: Award, category: "Event", color: "#3b82f6" },
      { title: "Google Arcade Facilitator", desc: "Program facilitation", date: "Aug", icon: Users, category: "Facilitation", color: "#f97316" },
      { title: "XR Creator Hackathon", desc: "Delhi meetup", date: "Oct", icon: Zap, category: "Hackathon", color: "#06b6d4" }
    ],
    2025: [
      { title: "IIIT HackFinance", desc: "Top 30 Fintech Hackathon", date: "Jan", icon: Trophy, category: "Achievement", color: "#f59e0b" },
      { title: "MarQing Minds Competition", desc: "MDI Gurgaon case study", date: "Feb 13", icon: BarChart3, category: "Competition", color: "#8b5cf6" },
      { title: "CodeHers 2025", desc: "Walmart Global Tech", date: "Apr 15", icon: Code, category: "Competition", color: "#3b82f6" },
      { title: "Unstop Talent Park", desc: "Cleared 2 rounds", date: "May 30", icon: Award, category: "Achievement", color: "#10b981" },
      { title: "Wipro TalentNext Java", desc: "Full Stack training", date: "Aug", icon: Code, category: "Training", color: "#3b82f6" },
      { title: "GFG 160 Days Code", desc: "Coding challenge", date: "Jul", icon: Target, category: "Challenge", color: "#10b981" },
      { title: "AWS Cloud Foundation", desc: "Cloud computing course", date: "Aug", icon: Globe, category: "Cloud", color: "#06b6d4" }
    ]
  };

  const years = Object.keys(activitiesByYear).reverse();

  const scrollHorizontal = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    const cardWidth = 340; // card + gap
    const scrollAmount = direction === 'right' ? cardWidth : -cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => container.removeEventListener('scroll', handleScroll);
  }, [selectedYear]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [selectedYear]);

  const ActivityCard = ({ activity }) => (
    <div className="group flex-none w-[320px] h-64 bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:bg-white">
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"
        style={{ backgroundColor: activity.color + '20' }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-gray-900/10 to-white/20 group-hover:scale-110 transition-all duration-300">
              <activity.icon className="w-6 h-6" style={{ color: activity.color }} />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-gray-900 to-gray-800 group-hover:from-orange-600 group-hover:to-orange-500 transition-all duration-300">
              {activity.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">{activity.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{activity.desc}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="font-medium">{activity.date}</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="activities" className="py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-7 h-7 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-700 via-gray-800 to-orange-700 bg-clip-text text-transparent">
              Co-Curricular Activities
            </h2>
            <Award className="w-7 h-7 text-orange-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Journey of achievements, competitions, and skill development (2022 - Present)</p>
        </div>

        {/* Year Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border-2 ${
                selectedYear === year
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-white/50 border-gray-200 hover:border-orange-300 hover:bg-white hover:shadow-md text-gray-800'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex items-start gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {activitiesByYear[selectedYear].map((activity, index) => (
              <ActivityCard key={`${selectedYear}-${index}`} activity={activity} />
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scrollHorizontal('left')}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-xl ${
              !canScrollLeft ? 'opacity-30 cursor-not-allowed hover:scale-100' : ''
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollHorizontal('right')}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/20 backdrop-blur-xl ${
              !canScrollRight ? 'opacity-30 cursor-not-allowed hover:scale-100' : ''
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Year Summary */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Briefcase className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">
              {activitiesByYear[selectedYear].length} Activities in {selectedYear}
            </span>
            <Calendar className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
      `}</style>
    </section>
  );
};

export default Activities;
