import React, { useState, useRef, useEffect, useMemo } from "react";
import { Calendar, Briefcase, ChevronRight, ChevronLeft, Star, Target, Award, Trophy, Users, Code, BarChart, Globe, Zap, Building, CloudRain } from "lucide-react";

const Activities = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [setScrollY] = useState(0);

  // Individual refs for each year's scroll container
  const scrollRef2022 = useRef(null);
  const scrollRef2023 = useRef(null);
  const scrollRef2024 = useRef(null);
  const scrollRef2025 = useRef(null);

  // Scroll button state tracking
  const [canScrollLeft, setCanScrollLeft] = useState({
    "2022": false,
    "2023": false,
    "2024": false,
    "2025": false
  });
  const [canScrollRight, setCanScrollRight] = useState({
    "2022": true,
    "2023": true,
    "2024": true,
    "2025": true
  });

  // Group refs in a stable object using useMemo
  const refsByYear = useMemo(
    () => ({
      "2022": scrollRef2022,
      "2023": scrollRef2023,
      "2024": scrollRef2024,
      "2025": scrollRef2025,
    }),
    []
  );

  // Define year colors separately
  const yearColors = useMemo(() => ({
    "2022": "from-blue-500 to-cyan-500",
    "2023": "from-purple-500 to-violet-500", 
    "2024": "from-pink-500 to-rose-500",
    "2025": "from-emerald-500 to-green-500"
  }), []);

  const activitiesByYear = useMemo(
    () => ({
      2022: [
        {
          title: "Mighty Minds Conference",
          description: "Attended India's Biggest Interactive Knowledge Exchange Programme",
          date: "November 2",
          icon: Target,
          category: "Conference",
          color: "from-blue-500 to-cyan-500",
        },
        {
          title: "InnoTech Participation",
          description: "Participated in technology innovation event with emerging tech ideas",
          date: "November 18",
          icon: Zap,
          category: "Innovation",
          color: "from-purple-500 to-violet-500",
        },
        {
          title: "DevTown Tinder Clone",
          description: "Built Tinder clone using HTML and CSS",
          date: "December",
          icon: Code,
          category: "Project",
          color: "from-green-500 to-emerald-500",
        },
        {
          title: "Internshala Student Partner",
          description: "Active student partner promoting career development",
          date: "December",
          icon: Users,
          category: "Partnership",
          color: "from-orange-500 to-red-500",
        },
      ],
      2023: [
        {
          title: "First Hackathon Delhi",
          description: "Participated in first hackathon experience at BPV Delhi",
          date: "June 15",
          icon: Zap,
          category: "Hackathon",
          color: "from-pink-500 to-rose-500",
        },
        {
          title: "Python to Web Bootcamp",
          description: "4-Day Data Analytics Bootcamp journey",
          date: "July",
          icon: Code,
          category: "Bootcamp",
          color: "from-yellow-500 to-amber-500",
        },
        {
          title: "AI Expert Talk by VK Panchal",
          description: "Attended Artificial Intelligence expert session",
          date: "August",
          icon: Award,
          category: "Workshop",
          color: "from-indigo-500 to-blue-500",
        },
        {
          title: "Microsoft Learn Ambassador",
          description: "Understanding of Web Servers program",
          date: "September",
          icon: Globe,
          category: "Program",
          color: "from-teal-500 to-cyan-500",
        },
        {
          title: "Git & GitHub Bootcamp",
          description: "Version control and collaboration skills development",
          date: "October",
          icon: Code,
          category: "Bootcamp",
          color: "from-violet-500 to-purple-500",
        },
        {
          title: "Japan Work Opportunities",
          description: "Orientation by Ashutosh Singh & Yumi Ishida on career prospects",
          date: "November",
          icon: Globe,
          category: "Career Talk",
          color: "from-lime-500 to-green-500",
        },
        {
          title: "Node.js Bootcamp",
          description: "Backend development with Node.js",
          date: "December",
          icon: Code,
          category: "Bootcamp",
          color: "from-emerald-500 to-teal-500",
        },
      ],
      2024: [
        {
          title: "Adobe Photoshop Bootcamp",
          description: "Graphic Designing with Adobe Photoshop",
          date: "January",
          icon: Award,
          category: "Design",
          color: "from-pink-500 to-purple-500",
        },
        {
          title: "Flipkart Runway: Season 4",
          description: "Participated in Flipkart's flagship competition program",
          date: "March 22",
          icon: Trophy,
          category: "Competition",
          color: "from-orange-500 to-red-500",
        },
        {
          title: "AI Music Fest Microsoft",
          description: "Attended AI Music Festival at Microsoft Gurgaon",
          date: "June 15",
          icon: Award,
          category: "Event",
          color: "from-blue-500 to-indigo-500",
        },
        {
          title: "Google Arcade Facilitator",
          description: "Facilitated Google Arcade program activities",
          date: "August",
          icon: Users,
          category: "Facilitation",
          color: "from-red-500 to-orange-500",
        },
        {
          title: "XR Creator Hackathon Delhi",
          description: "XR Creator Hackathon Meetup by Chhavi Garg",
          date: "October",
          icon: Zap,
          category: "Hackathon",
          color: "from-cyan-500 to-blue-500",
        },
      ],
      2025: [
        {
          title: "IIIT HackFinance",
          description: "Among Top 30 in IIIT Delhi Fintech Hackathon",
          date: "January",
          icon: Trophy,
          category: "Achievement",
          color: "from-yellow-500 to-amber-500",
        },
        {
          title: "MarQing Minds: Case Study Competition",
          description: "Management Development Institute (MDI), Gurgaon - MDI Gurgaon, Haryana",
          date: "February 13",
          icon: BarChart,
          category: "Competition",
          color: "from-purple-500 to-indigo-500",
        },
        {
          title: "CodeHers 2025",
          description: "Walmart Global Tech India - Online Competition",
          date: "April 15",
          icon: Code,
          category: "Competition",
          color: "from-blue-500 to-cyan-500",
        },
        {
          title: "Unstop Talent Park 2025",
          description: "Cleared 2 rounds in prestigious talent acquisition program",
          date: "May 30",
          icon: Award,
          category: "Achievement",
          color: "from-emerald-500 to-green-500",
        },
        {
          title: "XR Creator Hackathon Delhi",
          description: "XR Creator Hackathon Meetup by Chhavi Garg",
          date: "October",
          icon: Zap,
          category: "Hackathon",
          color: "from-cyan-500 to-blue-500",
        },
        {
          title: "Flipkart Grid 2025",
          description: "Participated in Flipkart's flagship engineering competition",
          date: "2025",
          icon: Trophy,
          category: "Competition",
          color: "from-orange-500 to-red-500",
        },
        {
          title: "Wipro TalentNext - Java Full Stack Program",
          description: "Comprehensive Java full stack development training program",
          date: "August 2025",
          icon: Code,
          category: "Training Program", 
          color: "from-blue-500 to-indigo-600",
        },
        {
          title: "GFG 160 Days of Code Challenge",
          description: "GeeksforGeeks intensive coding practice and problem solving",
          date: "July 2025",
          icon: Target,
          category: "Coding Challenge",
          color: "from-green-500 to-emerald-600",
        },
        {
          title: "AWS Academy Cloud Foundation",
          description: "AWS Skill Builder fundamental cloud computing course",
          date: "August 2025", 
          icon: CloudRain,
          category: "Cloud Computing",
          color: "from-purple-500 to-violet-600",
        },
        {
          title: "NPTEL Online Courses",
          description: "National Programme on Technology Enhanced Learning",
          date: "August 2025",
          icon: Target,
          category: "Academic Course",
          color: "from-pink-500 to-rose-600",
        }
      ],
    }),
    []
  );

  // Mouse tracking for background blob
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      window.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // FIXED: Completely new scroll function that scrolls by exactly one card width
  const scrollHorizontal = (ref, direction, year) => {
    const container = ref.current;
    if (!container) return;
    
    // Scroll by exactly one card + gap (344px total)
    const scrollAmount = 344; // 320px (card) + 24px (gap)
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    let newScrollPosition;
    
    if (direction === 'right') {
      newScrollPosition = Math.min(currentScroll + scrollAmount, maxScroll);
    } else {
      newScrollPosition = Math.max(currentScroll - scrollAmount, 0);
    }
    
    console.log(`${year} - Direction: ${direction}, Current: ${currentScroll}, New: ${newScrollPosition}, Max: ${maxScroll}`);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  // FIXED: More accurate scroll position checking
  const checkScrollPosition = (ref, year) => {
    const container = ref.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    
    console.log(`${year} - ScrollLeft: ${scrollLeft}, ScrollWidth: ${scrollWidth}, ClientWidth: ${clientWidth}, MaxScroll: ${maxScroll}`);
    
    setCanScrollLeft(prev => ({
      ...prev,
      [year]: scrollLeft > 5
    }));
    
    setCanScrollRight(prev => ({
      ...prev,
      [year]: scrollLeft < maxScroll - 5
    }));
  };

  // Set up scroll listeners for each year
  useEffect(() => {
    const refs = Object.entries(refsByYear);
    const listeners = [];

    refs.forEach(([year, ref]) => {
      const container = ref.current;
      if (container) {
        const handleScroll = () => checkScrollPosition(ref, year);
        container.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        listeners.push(() => container.removeEventListener('scroll', handleScroll));
      }
    });

    return () => {
      listeners.forEach(cleanup => cleanup());
    };
  }, [refsByYear]);

  const ActivityCard = ({ activity, uniqueKey }) => (
    <div
      className="flex-none w-80 h-64 rounded-2xl p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group cursor-pointer relative overflow-hidden border border-gray-100"
      onMouseEnter={() => setHoveredCard(uniqueKey)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        boxShadow:
          hoveredCard === uniqueKey
            ? "0 25px 50px -12px rgba(59,130,246,0.18)"
            : "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${activity.color}`}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-700 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <activity.icon className="w-10 h-10" />
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${activity.color} group-hover:scale-110 transition-all duration-300`}
            >
              {activity.category}
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3 text-gray-800">{activity.title}</h3>
          <p className="text-sm text-gray-600">{activity.description}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{activity.date}</span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );

  const ScrollButton = ({ direction, onClick, canScroll, gradientColors }) => (
    <button
      onClick={onClick}
      disabled={!canScroll}
      className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r ${gradientColors} backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg`}
    >
      {direction === 'left' ? 
        <ChevronLeft className="w-5 h-5 text-white" /> : 
        <ChevronRight className="w-5 h-5 text-white" />
      }
    </button>
  );

  const YearSection = ({ year, activities, yearColor, scrollRef }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div
          className={`inline-flex items-center gap-3 bg-gradient-to-r ${yearColor} text-white rounded-2xl px-6 py-3 mb-4 shadow-lg`}
        >
          <Target className="w-6 h-6" />
          <span className="text-2xl font-black">{year}</span>
          <Star className="w-5 h-5" />
        </div>
      </div>

      <div className="relative">
        {/* FIXED: Removed snap scroll and changed to regular overflow */}
        <div
          ref={scrollRef}
          className="flex items-start gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          {activities.map((activity, idx) => {
            const uniqueKey = `${year}-${idx}`;
            return <ActivityCard key={uniqueKey} uniqueKey={uniqueKey} activity={activity} />;
          })}
        </div>

        <ScrollButton
          direction="left"
          onClick={() => scrollHorizontal(scrollRef, 'left', year)}
          canScroll={canScrollLeft[year]}
          gradientColors={`${yearColor} opacity-80`}
        />

        <ScrollButton
          direction="right"
          onClick={() => scrollHorizontal(scrollRef, 'right', year)}
          canScroll={canScrollRight[year]}
          gradientColors={`${yearColor} opacity-80`}
        />
      </div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      id="activities"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-100/30 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl animate-float-reverse" />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(99,102,241,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Co-Curricular Activities
            <span className="block text-3xl lg:text-4xl mt-2">2022 - Present</span>
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            {["2022", "2023", "2024", "2025"].map((y, i) => (
              <div
                key={y}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                style={{ animation: `pulse 2s infinite ${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>

        {/* Render each year section */}
        {Object.entries(activitiesByYear).map(([year, activities]) => (
          <YearSection
            key={year}
            year={year}
            activities={activities}
            yearColor={yearColors[year]}
            scrollRef={refsByYear[year]}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -15px) rotate(180deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg); }
          50% { transform: translate(-15px, 15px) rotate(180deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Activities;
