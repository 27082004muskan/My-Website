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
import PageLayout from './PageLayout';

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
      { title: "Unstop Talent Park", desc: "Cleared 2 rounds", date: "May 30", icon: Award, category: "Achievement", color: "#10b981" },
      { title: "GFG 160 Days Code", desc: "Coding challenge", date: "Jul", icon: Target, category: "Challenge", color: "#10b981" },
      { title: "HackCbs 8.0 ", desc: "India largest run Hackathon", date: "Nov", icon: Globe, category: "Hackathon", color: "#06b6d4" },
      { title: "Qyrus QAPI ", desc: " Hackcbs track Winner", date: "Nov", icon: Trophy, category: "Winner", color: "#06b6d4" }
    ],
    2026: [
      { title: "Rangoli Competition", desc: "1st Runner Up", date: "March", icon: Trophy, category: "Challenge", color: "#3b82f6" },
    ]
  };

  const years = Object.keys(activitiesByYear).reverse();

  const scrollHorizontal = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 340;
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
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [selectedYear]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [selectedYear]);

  const ActivityCard = ({ activity }) => {
    const Icon = activity.icon;

    return (
      <div className="group relative flex h-64 w-[320px] flex-none cursor-pointer flex-col justify-between rounded-[1.5rem] border border-violet-400/10 bg-violet-500/5 p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-400/30">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div
              className="rounded-xl p-3 transition duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${activity.color}20` }}
            >
              <Icon className="h-6 w-6" style={{ color: activity.color }} />
            </div>
            <span className="rounded-full border border-violet-400/10 bg-[#0d1528] px-3 py-1 text-xs font-medium text-slate-300 group-hover:border-violet-400/30 group-hover:text-violet-200">
              {activity.category}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-violet-300">{activity.title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{activity.desc}</p>
        </div>
        <div className="flex items-center justify-between border-t border-violet-400/10 pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{activity.date}</span>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-violet-300" />
        </div>
      </div>
    );
  };

  return (
    <PageLayout
      id="activities"
      badge="Beyond the classroom"
      badgeIcon={Star}
      label="Co-Curricular Activities"
      title="Hackathons, competitions, and growth milestones"
      description="A journey of achievements, competitions, and skill development from 2022 to present."
    >
      <div className="mb-12 flex flex-wrap justify-start gap-3">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
              selectedYear === year
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                : 'border border-violet-400/10 bg-violet-500/5 text-slate-300 hover:border-violet-400/30 hover:bg-violet-500/10'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory items-start gap-6 overflow-x-auto pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {activitiesByYear[selectedYear].map((activity, index) => (
            <ActivityCard key={`${selectedYear}-${index}`} activity={activity} />
          ))}
        </div>

        <button
          onClick={() => scrollHorizontal('left')}
          className={`absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/10 bg-[#0d1528]/90 text-white shadow-lg backdrop-blur-xl transition duration-300 hover:border-violet-400/40 hover:bg-violet-600 ${
            !canScrollLeft ? 'cursor-not-allowed opacity-30' : ''
          }`}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={() => scrollHorizontal('right')}
          className={`absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/10 bg-[#0d1528]/90 text-white shadow-lg backdrop-blur-xl transition duration-300 hover:border-violet-400/40 hover:bg-violet-600 ${
            !canScrollRight ? 'cursor-not-allowed opacity-30' : ''
          }`}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-16 border-t border-violet-400/10 pt-12">
        <div className="flex items-center gap-4">
          <Briefcase className="h-6 w-6 text-violet-400" />
          <span className="text-xl font-semibold text-white">
            {activitiesByYear[selectedYear].length} Activities in {selectedYear}
          </span>
          <Calendar className="h-6 w-6 text-violet-400" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </PageLayout>
  );
};

export default Activities;
