import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaServer,
  FaLayerGroup,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import resumePdf from "../public/SaravananK_FullStack.pdf";


export default function About() {
  const capabilities = [
    {
      index: "01",
      title: "Backend Engineering",
      desc: "APIs, authentication, business logic.",
      tech: "Node.js · Express · REST · SpringBoot",
      icon: FaServer,
      offset: false,
    },
    {
      index: "02",
      title: "Full Stack Development",
      desc: "React, Node.js & SpringBoot end-to-end web applications.",
      tech: "React · Java · JavaScript",
      icon: FaLayerGroup,
      offset: true,
    },
    {
      index: "03",
      title: "Data & Systems",
      desc: "MongoDB, PostgreSQL, MySql,",
      tech: "MongoDB · SQL ",
      icon: FaDatabase,
      offset: false,
    },
    {
      index: "04",
      title: "Production Mindset",
      desc: "Clean architecture, testing, security & robust reliability.",
      tech: "Clean Code · Security · Scale",
      icon: FaShieldAlt,
      offset: true,
    },
  ];

  return (
    <section
      id="about"
      className="w-full relative bg-[#050505] py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden border-y border-green-500/10"
    >
      {/* =========================================================
          SUBTLE AMBIENT GREEN GLOW
      ========================================================== */}

      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[120px] opacity-25 pointer-events-none hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, rgba(57,255,136,0.07) 0%, transparent 70%)",
        }}
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================== */}

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">

          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Editorial Metadata Label */}

            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="font-mono text-xs font-bold tracking-widest text-green-400 uppercase">
                01 — ABOUT ME
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />

              <span className="text-xs text-gray-500 font-medium">
                Based in Chennai, India
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <h2
              className="font-editorial font-bold text-white leading-[1.08] sm:leading-[1.1] mb-5 sm:mb-6 tracking-tight"
              style={{
                fontSize: "clamp(2.35rem, 4.6vw, 3.65rem)",
              }}
            >
              Building software with{" "}

              <span
                className="italic"
                style={{
                  background:
                    "linear-gradient(135deg, #22C55E 0%, #39FF88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                purpose
              </span>

              , not just code.
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div className="space-y-3.5 mb-7 sm:mb-8 max-w-xl">
              <p className="text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
                I’m a Backend & Full Stack Developer focused on building
                reliable, scalable web applications and the systems behind
                them.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                My work spans modern frontend experiences, production-ready
                APIs, database architecture, authentication, caching, and
                performance-focused backend systems.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                I care about more than making software work — I focus on clean
                architecture, maintainable code, and products that solve real
                problems.
              </p>
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Download Resume */}

              <a
                href={resumePdf}
                download
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-green-500 text-black font-semibold text-sm sm:text-base hover:bg-green-400 transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-[0_8px_30px_rgba(34,197,94,0.25)] min-h-[48px]"
              >
                <FaDownload className="text-xs sm:text-sm" />

                <span>Download Resume</span>
              </a>

              {/* Let's Talk */}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#0B0F0C] border border-gray-700 text-gray-200 font-semibold text-sm sm:text-base hover:border-green-500 hover:text-green-400 hover:bg-green-500/5 transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 shadow-sm min-h-[48px] group"
              >
                <span>Let&apos;s Talk</span>

                <HiArrowNarrowRight className="text-base group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              {/* =================================================
                  SOCIAL ICONS
              ================================================== */}

              <div className="flex items-center gap-2.5 sm:ml-2">
                {/* GitHub */}

                <a
                  href="https://github.com/shrxvx29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#0B0F0C] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-200 ease-out hover:-translate-y-0.5 shadow-sm min-w-[44px] min-h-[44px]"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/saravanankhere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-[#0B0F0C] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-200 ease-out hover:-translate-y-0.5 shadow-sm min-w-[44px] min-h-[44px]"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT COLUMN — CAPABILITY CARDS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            {/* =================================================
                CONNECTION LINES
            ================================================== */}

            <div
              className="absolute inset-0 pointer-events-none hidden sm:block opacity-20"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="25%"
                  y1="20%"
                  x2="75%"
                  y2="20%"
                  stroke="#22C55E"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                <line
                  x1="50%"
                  y1="10%"
                  x2="50%"
                  y2="90%"
                  stroke="#22C55E"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* =================================================
                ASYMMETRIC 2×2 GRID
            ================================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 relative z-10">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 * idx,
                    }}
                    viewport={{ once: true }}
                    className={`p-5 sm:p-5.5 rounded-2xl bg-[#0B0F0C] border border-gray-800 shadow-sm hover:shadow-[0_12px_40px_rgba(34,197,94,0.10)] hover:border-green-500/40 transition-all duration-200 ease-out hover:-translate-y-1 flex flex-col justify-between group ${
                      item.offset
                        ? "sm:translate-y-4 lg:translate-y-6"
                        : ""
                    }`}
                  >
                    <div>
                      {/* =================================================
                          TOP ROW
                      ================================================== */}

                      <div className="flex items-center justify-between mb-3.5">
                        {/* Index Badge */}

                        <span className="font-mono text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-md">
                          {item.index}
                        </span>

                        {/* Icon */}

                        <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors duration-200">
                          <Icon size={14} />
                        </div>
                      </div>

                      {/* =================================================
                          TITLE
                      ================================================== */}

                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-green-400 transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* =================================================
                          DESCRIPTION
                      ================================================== */}

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>

                    {/* =================================================
                        TECH STACK
                    ================================================== */}

                    <div className="mt-4 pt-3 border-t border-gray-800">
                      <span className="text-[11px] font-semibold text-green-400/90 font-mono tracking-tight">
                        {item.tech}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}