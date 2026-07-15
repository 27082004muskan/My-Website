import React from "react";
import { Code, Linkedin, Github, Mail, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Activities", path: "/activities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative mt-auto border-t border-orange-500/25 bg-[#181c24] text-gray-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="text-left">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15">
                <Code className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <span className="block text-lg font-semibold text-white">
                  Muskan Gupta
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Creovate
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Full Stack Developer & Data Analytics Enthusiast building
              responsive, scalable, and user-focused web applications.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/muskan-gupta-639065250/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#222833] p-2.5 text-gray-400 transition duration-200 hover:bg-orange-500/20 hover:text-orange-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/27082004muskan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#222833] p-2.5 text-gray-400 transition duration-200 hover:bg-orange-500/20 hover:text-orange-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:gmuskan.2708@gmail.com"
                className="rounded-lg bg-[#222833] p-2.5 text-gray-400 transition duration-200 hover:bg-orange-500/20 hover:text-orange-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 transition duration-200 hover:text-orange-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Get In Touch
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>gmuskan.2708@gmail.com</p>
              <p>India</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#222833] px-3 py-1.5 text-xs text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Open to opportunities
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center">
          <p className="flex items-center text-sm text-gray-500">
            © 2026 Muskan Gupta. Made with
            <Heart className="mx-1 h-4 w-4 text-orange-400" />
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-lg bg-[#222833] px-4 py-2 text-sm text-gray-300 transition duration-200 hover:bg-orange-500/20 hover:text-orange-200"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
