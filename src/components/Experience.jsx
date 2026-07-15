import React from "react";
import {
  Calendar,
  MapPin,
  Building2,
  TrendingUp,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import PageLayout from "./PageLayout";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Greenvora Exim Pvt Ltd",
    duration: "Nov 2025 - Apr 2026",
    location: "Remote",
    impact: "Scalable Export-Import Platform",
    skills: ["MERN", "REST APIs", "UI/UX", "Email Integration"],
    achievements: [
      "Built a MERN-based export-import platform focused on business usability and scalability.",
      "Integrated email workflows to support lead generation and communication processes.",
      "Improved backend API structure for cleaner performance and future growth.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "The Fin Lit Project",
    duration: "Jun 2025 - Oct 2025",
    location: "Remote",
    impact: "Fintech Platform Revamp",
    skills: ["MERN", "Deployment", "QA Testing", "Performance"],
    achievements: [
      "Revamped key Learn and Invest modules to improve usability and product flow.",
      "Contributed to deployment with ESG-based screening functionality.",
      "Handled QA testing and performance checks to strengthen reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <PageLayout
      id="experience"
      badge="Professional Experience"
      badgeIcon={Briefcase}
      label="Work History"
      title="Internships that shaped my product thinking and engineering workflow"
      description="My experience combines full stack product development, deployment, testing, and business-focused problem solving across fintech and export-import platforms."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 lg:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:border-orange-400/20"
            >
              <div className="hidden lg:absolute lg:left-[-7px] lg:top-10 lg:block">
                <div className="h-4 w-4 rounded-full border-4 border-[#0b0d12] bg-orange-400" />
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-orange-300">
                    Experience {index + 1}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {exp.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-orange-300" />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-300" />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-300" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 text-sm font-medium text-orange-200">
                    <TrendingUp className="h-4 w-4" />
                    {exp.impact}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-[#121821] px-3 py-1.5 text-xs font-medium text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
                        <p className="text-sm leading-7 text-gray-300 sm:text-[15px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
