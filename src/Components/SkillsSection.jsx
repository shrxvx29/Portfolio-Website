import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind-css-.png";
import react from "../assets/React.png";
import sql from "../assets/mysql.png";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import spring from "../assets/SpringbootIcon.png";
import railway from "../assets/railway1.png";
import vercel from "../assets/Vercel.png";
import netlify from "../assets/NetlifyLogo.png";
import postman from "../assets/Postman.png";
import restApi from "../assets/restapi.png";
import cloudinary from "../assets/Cloudinary.png";
/* =========================================================
   SKILLS DATA
========================================================= */

const skills = [
  // =======================================================
  // FRONTEND
  // =======================================================

  {
    name: "React.js",
    icon: react,
    category: "Frontend",
    description:
      "Building component-based interfaces and interactive web applications.",
    featured: true,
  },

  {
    name: "JavaScript",
    icon: js,
    category: "Frontend",
    description:
      "Developing dynamic applications using modern JavaScript and ES6+.",
    featured: true,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
    description:
      "Creating responsive interfaces with utility-first CSS.",
    featured: true,
  },

  {
    name: "HTML5",
    icon: html,
    category: "Frontend",
    description:
      "Building semantic, structured and accessible web pages.",
    featured: false,
  },

  {
    name: "CSS3",
    icon: css,
    category: "Frontend",
    description:
      "Creating responsive layouts, animations and modern visual styling.",
    featured: false,
  },

  {
    name: "Bootstrap",
    icon: bootstrap,
    category: "Frontend",
    description:
      "Developing responsive and mobile-first interfaces.",
    featured: false,
  },

  // =======================================================
  // BACKEND
  // =======================================================

  {
    name: "Java",
    icon: java,
    category: "Backend",
    description:
      "Object-oriented programming and backend application development.",
    featured: true,
  },

  {
    name: "Spring Boot",
    icon: spring,
    category: "Backend",
    description:
      "Building REST APIs and backend applications with Spring Boot.",
    featured: true,
  },
  {
  name: "REST APIs",
  icon: restApi,
  category: "Backend",
  description:
    "Designing and integrating RESTful APIs for full-stack web applications.",
  featured: true,
},

  // =======================================================
  // DATABASE
  // =======================================================

  {
    name: "MySQL",
    icon: sql,
    category: "Database",
    description:
      "Designing relational databases and managing application data.",
    featured: true,
  },

  // =======================================================
  // TOOLS
  // =======================================================

  {
    name: "Postman",
    icon: postman,
    category: "Tools",
    description:
      "Testing, debugging and validating REST API endpoints.",
    featured: true,
  },

  {
    name: "Figma",
    icon: figma,
    category: "Tools",
    description:
      "Designing interfaces, wireframes and user experience flows.",
    featured: false,
  },

  {
    name: "Cloudinary",
    icon: cloudinary,
    category: "Tools",
    description:
      "Managing and delivering optimized images and media assets.",
    featured: false,
  },

  // =======================================================
  // DEPLOYMENT
  // =======================================================

  {
    name: "Vercel",
    icon: vercel,
    category: "Deployment",
    description:
      "Deploying and hosting modern frontend applications.",
    featured: true,
  },

  {
    name: "Netlify",
    icon: netlify,
    category: "Deployment",
    description:
      "Deploying and managing frontend applications and websites.",
    featured: false,
  },

  {
    name: "Railway",
    icon: railway,
    category: "Deployment",
    description:
      "Deploying backend services and full-stack applications.",
    featured: true,
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Deployment",
];

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   SKILL CARD
========================================================= */

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      variants={cardVariants}
      layout
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group relative overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-300 sm:p-5 ${skill.featured
          ? "border-black/20 shadow-sm hover:border-black hover:shadow-lg"
          : "border-black/10 hover:border-black/30 hover:shadow-md"
        }`}
    >
      {/* Featured top line */}

      {skill.featured && (
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-black" />
      )}

      {/* Subtle background decoration */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gray-100 opacity-70 transition-transform duration-500 group-hover:scale-125" />

      {/* =====================================================
          TOP
      ===================================================== */}

      <div className="relative z-10 flex items-start justify-between">
        {/* Logo */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
    flex h-11 w-11
    items-center justify-center
    rounded-xl
    border border-black/10
    bg-gray-50
    transition-all duration-300
    group-hover:border-black/20
    group-hover:bg-white
    sm:h-12 sm:w-12
  "
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
          />
        </motion.div>

        {/* Category */}

        <span className="rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-500 sm:text-[9px]">
          {skill.category}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mt-5">
        <div className="flex items-center gap-1.5">
          <h3 className="text-base font-bold tracking-tight text-black sm:text-lg">
            {skill.name}
          </h3>

          {skill.featured && (
            <span className="text-xs text-black">✦</span>
          )}
        </div>

        <p className="mt-2 min-h-[42px] text-xs leading-5 text-gray-500 sm:text-[13px]">
          {skill.description}
        </p>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-black/5 pt-3">
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
          {skill.featured ? "Core Stack" : "Technology"}
        </span>

        <span className="text-xs text-gray-300 transition-colors group-hover:text-black">
          →
        </span>
      </div>
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter(
        (skill) => skill.category === activeFilter
      );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-4 py-12 text-black sm:px-6 sm:py-14 lg:px-10 lg:py-16"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Left glow */}

        <div className="absolute left-[-200px] top-[250px] h-[400px] w-[400px] rounded-full bg-black/[0.025] blur-[120px]" />

        {/* Right glow */}

        <div className="absolute right-[-200px] top-[600px] h-[400px] w-[400px] rounded-full bg-black/[0.025] blur-[120px]" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.03] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            Technical Skills
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="relative inline-block">
              Expertise
              <span className="absolute bottom-0 left-0 -z-10 h-2 w-full bg-gray-200 sm:h-3" />
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Technologies I use to build responsive interfaces,
            backend applications and practical web projects.
          </p>
        </motion.div>

        {/* ===================================================
            STATS
        =================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {/* Technologies */}

          <motion.div
            variants={cardVariants}
            className="rounded-xl border border-black/10 bg-white px-4 py-4 text-center transition-all duration-300 hover:border-black/30"
          >
            <p className="text-2xl font-black">
              15+
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Tools &Technologies
            </p>
          </motion.div>

          {/* Areas */}

          <motion.div
            variants={cardVariants}
            className="rounded-xl border border-black/10 bg-white px-4 py-4 text-center transition-all duration-300 hover:border-black/30"
          >
            <p className="text-2xl font-black">
              4
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Skill Areas
            </p>
          </motion.div>

          {/* Core */}

          <motion.div
            variants={cardVariants}
            className="rounded-xl border border-black/10 bg-black px-4 py-4 text-center text-white shadow-sm"
          >
            <p className="text-2xl font-black">
              7+
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Projects Built
            </p>
          </motion.div>

          {/* Graduate */}

          <motion.div
            variants={cardVariants}
            className="rounded-xl border border-black/10 bg-white px-4 py-4 text-center transition-all duration-300 hover:border-black/30"
          >
            <p className="text-2xl font-black">
              2026
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Graduate
            </p>
          </motion.div>
        </motion.div>

        {/* ===================================================
            CORE STACK
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 flex items-end justify-between"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
              What I work with
            </p>

            <h3 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
              Core Stack
            </h3>
          </div>

          <span className="hidden text-xs font-semibold text-gray-400 sm:block">
            {filteredSkills.length} technologies
          </span>
        </motion.div>

        {/* ===================================================
            FILTERS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 sm:px-5 sm:text-xs ${isActive
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white text-gray-500 hover:border-black/40 hover:text-black"
                  }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* ===================================================
            SKILLS GRID
        =================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ===================================================
            CURRENTLY LEARNING
        =================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12"
        >
          {/* Header */}

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Current Direction
              </p>

              <h3 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                Currently Learning
              </h3>
            </div>

            <span className="rounded-full border border-black/10 bg-gray-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-500">
              In Progress
            </span>
          </div>

          {/* MERN Card */}

          <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 bg-black p-5 text-white shadow-sm sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* Left */}

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-lg font-black text-black">
                  M
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black sm:text-xl">
                      MERN Stack
                    </h4>

                    <span className="rounded-full border border-white/15 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-white/60">
                      Learning
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-white/50 sm:text-sm">
                    MongoDB · Express · React · Node.js
                  </p>

                  <p className="mt-2 max-w-xl text-xs leading-5 text-white/60">
                    Expanding from frontend development into
                    full-stack JavaScript application development.
                  </p>
                </div>
              </div>

              {/* Percentage */}

              <div className="shrink-0 sm:text-right">
                <p className="text-3xl font-black">
                  30%
                </p>

                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Progress
                </p>
              </div>
            </div>

            {/* Progress */}

            <div className="mt-5">

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "30%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-white"
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] font-medium text-white/35">
                  Building through projects
                </span>

                <span className="text-[9px] font-bold text-white/50">
                  30% complete
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===================================================
            FOOTER LINE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 border-t border-black/10 pt-5 text-center"
        >
          <p className="text-xs text-gray-400">
            Continuously learning, building and improving.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;