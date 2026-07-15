import React from "react";
import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Tech Computer Science at KIET Group of Institutions",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    icon: Briefcase,
    title: "Internships",
    text: "Fintech & export-import platforms with real product ownership",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: Code2,
    title: "Stack",
    text: "MERN, Python, Java, Power BI, Tableau & SQL",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Trophy,
    title: "Highlights",
    text: "350+ DSA problems · Top 30 at HackFinance IIITD",
    accent: "from-amber-500/20 to-transparent",
  },
];



const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0f131a] py-24 text-white"
    >
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/8 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Stats */}
        

        {/* Main Grid */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">
              <Sparkles className="h-4 w-4" />
              About Me
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
              Turning ideas into{" "}
              <span className="text-orange-400">
                clean, scalable
              </span>{" "}
              products
            </h1>

            <div className="mt-10 max-w-2xl space-y-6 border-l-2 border-orange-400/40 pl-6 text-lg leading-8 text-gray-300">

              <p>
                I'm a Computer Science student who loves building practical
                applications with the MERN stack — from polished interfaces to
                reliable backend systems that hold up in the real world.
              </p>

              <p>
                My projects span fintech, ESG investing, learning platforms,
                and data analytics dashboards. I care about pairing technical
                depth with design clarity and business relevance.
              </p>

            </div>

            <blockquote className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-[#161b24] p-6">

              <p className="text-lg italic leading-8 text-gray-200">
                "I build technology that feels simple on the surface and
                strong underneath — the kind people actually want to use."
              </p>

            </blockquote>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="inline-flex items-center gap-2 rounded-full bg-[#161b24] px-4 py-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-orange-400" />
                India
              </span>

              <span className="rounded-full bg-green-400/10 px-4 py-2 text-sm text-green-300">
                Open to internships & freelance
              </span>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#161b24] p-8">
                          <h2 className="text-2xl font-semibold text-white">
                Quick Overview
              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-orange-400"></div>
                  <div>
                    <h3 className="font-semibold text-white">
                      MERN Development
                    </h3>
                    <p className="mt-1 text-gray-400 leading-7">
                      Building responsive full-stack web applications using
                      React, Node.js, Express and MongoDB.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-blue-400"></div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Data Analytics
                    </h3>
                    <p className="mt-1 text-gray-400 leading-7">
                      Creating dashboards and extracting business insights
                      using SQL, Power BI and Tableau.
                    </p>
                  </div>
                </div>

            
              </div>
            </div>

          </div>

        </div>

        {/* Highlights */}

        <div className="mt-24">

          <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.28em] text-gray-500">
            What defines my work
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">

          
            {highlights.map(({ icon: Icon, title, text, accent }) => (

              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161b24] p-7 transition duration-300 hover:border-orange-400/30"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                />

                <div className="relative">

                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;