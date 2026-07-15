import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import Resume from "../assets/Resume.pdf";

const useTypewriter = (
  texts,
  typeSpeed = 90,
  deleteSpeed = 55,
  pauseTime = 1800
) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typeSpeed, deleteSpeed, pauseTime]);

  return texts[textIndex].slice(0, charIndex);
};

const Hero = () => {
  const typedText = useTypewriter(
    [
      "Full Stack Developer",
      "MERN Stack Builder",
      "Data Analytics Enthusiast",
    ],
    90,
    55,
    1800
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0d12] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            {/* <div className="mb-6 inline-flex w-fit items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md lg:self-start">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span>Available for internships & freelance work</span>
            </div> */}

            {/* <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-orange-300/80">
              Portfolio 2026
            </p> */}

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I’m <span className="text-orange-400">Muskan Gupta</span>
            </h1>

            <div className="mt-4 h-12 text-xl font-medium text-gray-200 sm:text-2xl">
              <span>{typedText}</span>
              <span className="ml-1 animate-pulse text-orange-400">|</span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I build responsive, scalable, and user-focused web applications
              using React, Node.js, Express, and MongoDB, with growing interest in
              analytics-driven products and modern digital experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
              <a
                href={Resume}
                download="Muskan-Gupta-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-orange-400"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:scale-[1.03] hover:border-orange-400/40 hover:bg-white/10"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/muskan-gupta-639065250/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:text-white"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/27082004muskan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:text-white"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-2xl border border-orange-400/20 bg-orange-400/10 blur-2xl sm:block" />
              <div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-2xl border border-blue-400/20 bg-blue-400/10 blur-2xl sm:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-gray-400">
                      Developer Snapshot
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Crafting modern web experiences
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300">
                    MERN
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-[#11151c] p-4">
                    <p className="text-sm text-gray-400">Core Stack</p>
                    <p className="mt-2 text-lg font-medium text-white">
                      React • Node.js • Express • MongoDB
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-[#11151c] p-4">
                      <p className="text-sm text-gray-400">Focus</p>
                      <p className="mt-2 font-medium text-white">
                        Full Stack Apps
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#11151c] p-4">
                      <p className="text-sm text-gray-400">Interest</p>
                      <p className="mt-2 font-medium text-white">
                        Data Analytics
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-4">
                    <p className="text-sm text-gray-300">
                      Building practical products with clean UI, strong backend
                      logic, and real-world usability.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-sm text-gray-400">
                    Open to collaboration and new opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;