import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import { HiArrowNarrowRight } from "react-icons/hi";

import resumePdf from "../../public/SaravananK_FullStack.pdf";

export default function AboutLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="lg:col-span-6 flex flex-col justify-center"
    >
      {/* Editorial Metadata Label */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <span className="font-mono text-xs font-bold tracking-widest text-emerald-400 uppercase">
          01 — ABOUT ME
        </span>

        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

        <span className="text-xs text-gray-500 font-medium">
          Based in Chennai, India
        </span>
      </div>

      {/* Dominant Editorial Heading */}
      <h2
        className="font-editorial font-bold text-white leading-[1.08] sm:leading-[1.1] mb-5 sm:mb-6 tracking-tight"
        style={{
          fontSize: "clamp(2.35rem, 4.6vw, 3.65rem)",
        }}
      >
        Building software with{" "}
        <span
          className="text-emerald-400 italic"
          style={{
            background:
              "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          purpose
        </span>
        , not just code.
      </h2>

      {/* Concise, Scannable Narrative */}
      <div className="space-y-3.5 mb-7 sm:mb-8 max-w-xl">
        <p className="text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
          I’m a Backend & Full Stack Developer focused on building reliable,
          scalable web applications and the systems behind them.
        </p>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          My work spans modern frontend experiences, production-ready APIs,
          database architecture, authentication, caching, and
          performance-focused backend systems.
        </p>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          I care about more than making software work — I focus on clean
          architecture, maintainable code, and products that solve real
          problems.
        </p>
      </div>

      {/* CTA Buttons & Social Links */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Download Resume */}
        <a
          href={resumePdf}
          download
          className="
            inline-flex
            items-center
            gap-2
            px-6
            sm:px-7
            py-3
            sm:py-3.5
            rounded-xl
            bg-emerald-500
            text-black
            font-semibold
            text-sm
            sm:text-base
            hover:bg-emerald-400
            transition-all
            duration-200
            ease-out
            hover:-translate-y-0.5
            active:translate-y-0
            shadow-[0_0_25px_rgba(16,185,129,0.15)]
            hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]
            min-h-[48px]
          "
        >
          <FaDownload className="text-xs sm:text-sm" />

          <span>Download Resume</span>
        </a>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-2
            px-6
            sm:px-7
            py-3
            sm:py-3.5
            rounded-xl
            bg-[#0c0c0c]
            border
            border-white/10
            text-gray-300
            font-semibold
            text-sm
            sm:text-base
            hover:border-emerald-400/50
            hover:text-emerald-400
            hover:bg-emerald-400/5
            transition-all
            duration-200
            ease-out
            hover:-translate-y-0.5
            active:translate-y-0
            shadow-sm
            min-h-[48px]
            group
          "
        >
          <span>Let's Talk</span>

          <HiArrowNarrowRight
            className="
              text-base
              group-hover:translate-x-1
              transition-transform
              duration-200
            "
          />
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-2.5 sm:ml-2">
          {/* GitHub */}
          <a
            href="https://github.com/shrxvx29"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11
              h-11
              rounded-xl
              bg-[#0c0c0c]
              border
              border-white/10
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-emerald-400
              hover:border-emerald-400/40
              hover:bg-emerald-400/5
              transition-all
              duration-200
              ease-out
              hover:-translate-y-0.5
              shadow-sm
              min-w-[44px]
              min-h-[44px]
            "
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saravanankhere/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11
              h-11
              rounded-xl
              bg-[#0c0c0c]
              border
              border-white/10
              flex
              items-center
              justify-center
              text-gray-400
              hover:text-emerald-400
              hover:border-emerald-400/40
              hover:bg-emerald-400/5
              transition-all
              duration-200
              ease-out
              hover:-translate-y-0.5
              shadow-sm
              min-w-[44px]
              min-h-[44px]
            "
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
