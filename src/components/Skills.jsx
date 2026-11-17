
import React, { useEffect, useRef, useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaDatabase,
  FaCode,
  FaBolt,
  FaGraduationCap,
  FaLayerGroup,
  FaTerminal,
  FaRocket,
  FaCogs,
  FaLaptopCode,
  FaAws,
  FaCheckCircle,
  FaShieldAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiNextdotjs,
  SiRedis,
  SiPostgresql,
  SiSocketdotio,
  SiJsonwebtokens,
  SiDocker,
  SiSpringboot,
  SiMysql,
  SiRailway,
  SiNetlify,
  SiNestjs
} from "react-icons/si";

import { HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const sectionRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Cloud & Deployment",
  ];

  const skills = [
    {
      name: "React.js",
      icon: <FaReact />,
      color: "#61DAFB",
      category: "Frontend",
      role: "Components & Hooks",
    },
    {
      name: "JavaScript (ES6+)",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      category: "Frontend",
      role: "Core Logic & Async",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
      category: "Frontend",
      role: "Type Safety & Interfaces",
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: <SiRedux />,
    //   color: "#764ABC",
    //   category: "Frontend",
    //   role: "Global State Management",
    // },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
      category: "Frontend",
      role: "Modern Design Systems",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
      category: "Backend",
      role: "Runtime & Microservices",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "#1F2937",
      category: "Backend",
      role: "REST Framework",
    },
    // {
    //   name: "Java",
    //   icon: <FaJava />,
    //   color: "#007396",
    //   category: "Backend",
    //   role: "Object Oriented Language",
    // },
    // {
    //   name: "SpringBoot",
    //   icon: <SiSpringboot />,
    //   color: "#339933",
    //   category: "Backend",
    //   role: "REST Framework",
    // },
    {
      name: "REST APIs",
      icon: <FaServer />,
      color: "#4F46E5",
      category: "Backend",
      role: "Endpoint Architecture",
    },
    {
      name: "JWT Auth",
      icon: <SiJsonwebtokens />,
      color: "#D63AFF",
      category: "Backend",
      role: "Stateless Security & Tokens",
    },
    // {
    //   name: "Socket.IO",
    //   icon: <SiSocketdotio />,
    //   color: "#111827",
    //   category: "Backend",
    //   role: "Real-Time Bi-Directional Events",
    // },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#47A248",
      category: "Database",
      role: "NoSQL & Aggregations",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#4169E1",
      category: "Database",
      role: "Relational ACID Schema",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
      category: "Database",
      role: "Relational ACID Schema",
    },
    // {
    //   name: "Redis",
    //   icon: <SiRedis />,
    //   color: "#DC382D",
    //   category: "Database",
    //   role: "In-Memory Caching & Queues",
    // },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F05032",
      category: "Tools",
      role: "Version Control & Branching",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "#111827",
      category: "Tools",
      role: "CI/CD & Open Source",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "#FF6C37",
      category: "Tools",
      role: "API Testing & Mocking",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      color: "#2496ED",
      category: "Tools",
      role: "Containerization & Compose",
    },
    {
  name: "AWS EC2",
  icon: <FaAws />,
  color: "#FF9900",
  category: "Cloud & Deployment",
  role: "Cloud Computing & Virtual Servers",
},
{
  name: "AWS S3",
  icon: <FaAws />,
  color: "#FF9900",
  category: "Cloud & Deployment",
  role: "Object Storage & File Management",
},
    {
      name: "VS Code",
      icon: <FaCode />,
      color: "#007ACC",
      category: "Tools",
      role: "Developer Environment",
    },
    {
      name: "Railway",
      icon: <SiRailway />,
      color: "#F4F2F1",
      category: "Cloud & Deployment",
      role: "Cloud Hosting Platform",
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      color: "#00C7B7",
      category: "Cloud & Deployment",
      role: "Frontend Hosting & CI/CD",
    },
  ];

  const currentlyLearning = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    desc: "App Router, Server Components, SSR, and full-stack React development.",
    color: "#EEE7D8",
    tag: "Frontend & Full Stack",
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    color: "#E0234E",
    desc: "Modular backend architecture, dependency injection, decorators, and scalable REST APIs.",
    tag: "Backend Development",
  },
  {
    name: "Redis",
    icon: <SiRedis />,
    color: "#DC382D",
    desc: "In-memory caching, session management, and high-performance data access.",
    tag: "Caching & Performance",
  },
  {
    name: "System Design & Architecture",
    icon: <FaLayerGroup />,
    color: "#4F46E5",
    desc: "Scalable application design, database architecture, load balancing, and caching strategies.",
    tag: "System Architecture",
  },
  {
    name: "Microservices Architecture",
    icon: <FaCogs />,
    color: "#06B6D4",
    desc: "Service decomposition, inter-service communication, API gateways, and distributed systems.",
    tag: "Distributed Systems",
  },
];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-[#050505] border-t border-emerald-500/10"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Ambient Emerald Glow */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
            <HiSparkles className="text-emerald-400 text-xs sm:text-sm" />

            <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Technical Arsenal & Architecture
            </span>
          </div>

          <span className="font-script text-emerald-400 block text-2xl sm:text-3xl md:text-4xl mb-1">
            Tools & engineering paradigms
          </span>

          <h2
            className="font-editorial font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Skills &{" "}
            <span className="text-emerald-400">Technologies</span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-gray-400 leading-relaxed px-2 sm:px-0"
            style={{
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
            }}
          >
            A curated breakdown of modern programming languages, backend
            frameworks, relational and document databases, and developer
            tooling I use to build production software.
          </p>
        </motion.div>

        {/* Category Selector Filter */}
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 15 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
              }}
              aria-pressed={activeCategory === cat}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.08)] font-bold"
                  : "border-white/10 bg-[#0b0b0b] text-gray-400 hover:border-emerald-400/30 hover:text-emerald-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - ALL SKILLS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 mb-16 sm:mb-20 lg:mb-24"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={
                  prefersReducedMotion ? {} : { y: -4 }
                }
                className="group relative"
              >
                <div className="relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 sm:p-5 text-center transition-all duration-200 hover:border-emerald-400/30 hover:shadow-[0_10px_35px_rgba(16,185,129,0.08)] overflow-hidden flex flex-col items-center justify-between min-h-[145px] sm:min-h-[160px]">
                  {/* Top Hover Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500 transition-all duration-300" />

                  {/* Icon Container */}
                  <div className="relative mx-auto mt-1 mb-2">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] group-hover:bg-emerald-400/10 transition-all duration-300 flex items-center justify-center text-xl sm:text-2xl border border-white/10 group-hover:border-emerald-400/20 shadow-2xs"
                      style={{
                        color:
                          skill.name === "GitHub" ||
                          skill.name === "Express.js"
                            ? "#E5E7EB"
                            : skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>
                  </div>

                  {/* Name & Role Badge */}
                  <div className="w-full">
                    <h3 className="text-gray-100 font-bold text-xs sm:text-sm mb-1 group-hover:text-emerald-400 transition-colors duration-200 truncate">
                      {skill.name}
                    </h3>

                    <span className="text-xs text-gray-300 font-medium block truncate">
                      {skill.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Active Specialization & Learning Section */}
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          {/* Section Divider & Headline */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <FaGraduationCap className="text-emerald-400 text-sm sm:text-base" />

              <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">
                Current Technical Focus
              </span>
            </div>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Learning Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={item.name}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: prefersReducedMotion
                    ? 0
                    : index * 0.07,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={
                  prefersReducedMotion ? {} : { y: -4 }
                }
                className="group relative"
              >
                <div className="relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 sm:p-6 transition-all duration-200 hover:border-emerald-400/30 hover:bg-[#0e0e0e] hover:shadow-[0_10px_35px_rgba(16,185,129,0.08)] flex flex-col justify-between h-full">
                  <div>
                    {/* Top Status & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-xl shadow-2xs group-hover:scale-105 transition-transform"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                        <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                          In Progress
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-gray-100 font-bold text-sm sm:text-base mb-1.5 group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Tag */}
                  <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-gray-300 text-xs font-medium">
                    <FaLaptopCode className="text-emerald-400 shrink-0" />
                    <span className="truncate">{item.tag}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
