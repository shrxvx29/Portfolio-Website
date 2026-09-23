import React, { useEffect, useMemo, useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaChevronRight,
  FaLaptopCode,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi";

import { motion } from "framer-motion";

import { portfolioData } from "../data/portfolioData";

import {
  isExternalHttpUrl,
  sanitizeHref,
} from "../utils/security";

/* ============================================================
   PROJECT IMAGE
============================================================ */

function ProjectImage({ project }) {
  const imageSrc = project?.image || "";

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [imageSrc]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-lg group/image">
      {/* Browser Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#101010] border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>

        <span className="text-[10px] sm:text-[11px] text-gray-500 font-mono truncate max-w-[180px]">
          {project?.title || "project"}
        </span>

        <div className="w-10" />
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] bg-[#0d0d0d] overflow-hidden">
        {!loaded && !error && imageSrc && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#191919] to-[#111] animate-pulse" />
        )}

        {imageSrc && !error ? (
          <img
            src={imageSrc}
            alt={`${project.title} project preview`}
            className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover/image:scale-[1.04] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setLoaded(false);
              setError(true);
            }}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <FaLaptopCode className="text-4xl text-emerald-400/30 mb-3" />

            <p className="text-xs text-gray-500">
              {error
                ? "Project image could not be loaded"
                : project?.title || "Project"}
            </p>
          </div>
        )}

        {/* Image Overlay */}
        {!error && imageSrc && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
        )}

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-400/20 text-emerald-400 shadow-lg">
            <FaStar className="text-[9px]" />

            <span className="text-[10px] font-bold uppercase tracking-wider">
              Featured
            </span>
          </div>
        )}

        {/* Technology Preview */}
        {project?.technologies?.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center gap-1.5 flex-wrap">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-white text-[10px] font-semibold"
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md border border-emerald-400/20 text-emerald-300 text-[10px] font-semibold">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  project,
  index,
  prefersReducedMotion,
}) {
  const sourceHref = sanitizeHref(project?.github);
  const liveHref = sanitizeHref(project?.live);

  const sourceIsExternal = isExternalHttpUrl(sourceHref);
  const liveIsExternal = isExternalHttpUrl(liveHref);

  const liveUnavailable =
    !liveHref || liveHref === "#";

  const projectIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion
          ? 0
          : (index % 3) * 0.08,
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              y: -7,
            }
      }
      className="group relative rounded-3xl p-4 sm:p-5 lg:p-6 bg-[#0b0b0b] border border-white/10 hover:border-emerald-400/30 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>

          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 truncate">
            {project?.category || "Web Application"}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${
              liveUnavailable
                ? "bg-white/5 border border-white/10 text-gray-500"
                : "bg-emerald-400/10 border border-emerald-400/20 text-emerald-400"
            }`}
          >
            {!liveUnavailable && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            )}

            {liveUnavailable ? "Completed" : "Live"}
          </span>

          <span className="text-xs font-mono font-bold text-gray-600 group-hover:text-emerald-400 transition-colors">
            #{projectIndex}
          </span>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-5">
        <ProjectImage project={project} />
      </div>

      {/* Project Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-white text-lg sm:text-xl leading-tight group-hover:text-emerald-400 transition-colors">
            {project?.title}
          </h3>

          <FaChevronRight className="w-3 h-3 mt-1 text-gray-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
        </div>

        {/* Highlight */}
        {project?.highlight && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-[11px] font-semibold mb-3 max-w-full">
            <HiSparkles className="text-emerald-400 shrink-0" />

            <span className="truncate">
              {project.highlight}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project?.description}
        </p>

        {/* Technologies */}
        {project?.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech, techIndex) => (
              <span
                key={`${tech}-${techIndex}`}
                className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold border border-white/10 bg-white/[0.03] text-gray-400 group-hover:border-emerald-400/20 group-hover:bg-emerald-400/5 transition-colors"
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <div
          className="flex items-center gap-2"
          onClick={(event) => event.stopPropagation()}
        >
          {/* GitHub */}
          {sourceHref && sourceHref !== "#" && (
            <a
              href={sourceHref}
              target={
                sourceIsExternal
                  ? "_blank"
                  : undefined
              }
              rel={
                sourceIsExternal
                  ? "noopener noreferrer"
                  : undefined
              }
              referrerPolicy={
                sourceIsExternal
                  ? "no-referrer"
                  : undefined
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-emerald-400/30 text-gray-300 hover:text-emerald-400 text-xs font-semibold transition-all"
              aria-label={`View ${project.title} source code`}
            >
              <FaGithub className="text-xs" />
              <span>Code</span>
            </a>
          )}

          {/* Live App */}
          {!liveUnavailable && (
            <a
              href={liveHref}
              target={
                liveIsExternal
                  ? "_blank"
                  : undefined
              }
              rel={
                liveIsExternal
                  ? "noopener noreferrer"
                  : undefined
              }
              referrerPolicy={
                liveIsExternal
                  ? "no-referrer"
                  : undefined
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-400/20 text-emerald-400 text-xs font-semibold transition-all"
              aria-label={`View ${project.title} live application`}
            >
              <span>Live App</span>
              <FaExternalLinkAlt className="text-[9px]" />
            </a>
          )}
        </div>

        <span className="text-[10px] text-gray-600 font-mono">
          {String(projectIndex)}
        </span>
      </div>
    </motion.article>
  );
}

/* ============================================================
   MAIN PROJECTS COMPONENT
============================================================ */

export default function Projects() {
  const projects = portfolioData?.projects || [];

  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false);

  /* ============================================================
     CATEGORY CONFIG
  ============================================================ */

  const categories = [
    "All",
    "Full Stack",
    "AI Powered Full Stack",
    "Frontend",
  ];

  const getProjectCategory = (category = "") => {
    const normalized = category.toLowerCase().trim();

    if (
      normalized.includes("ai") &&
      (normalized.includes("full stack") ||
        normalized.includes("full-stack"))
    ) {
      return "AI Powered Full Stack";
    }

    if (
      normalized.includes("frontend") ||
      normalized.includes("front-end") ||
      normalized.includes("front end")
    ) {
      return "Frontend";
    }

    if (
      normalized.includes("full stack") ||
      normalized.includes("full-stack")
    ) {
      return "Full Stack";
    }

    return null;
  };

  /* ============================================================
     REDUCED MOTION
  ============================================================ */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  /* ============================================================
     CATEGORY FILTER
  ============================================================ */

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        getProjectCategory(project?.category) === selectedCategory
    );
  }, [projects, selectedCategory]);

  /* ============================================================
     TOP 5 / ALL PROJECTS
  ============================================================ */

  const visibleProjects = useMemo(() => {
    if (showAll) {
      return filteredProjects;
    }

    return filteredProjects.slice(0, 5);
  }, [filteredProjects, showAll]);

  const hasMoreProjects = filteredProjects.length > 5;

  /* ============================================================
     CHANGE CATEGORY
  ============================================================ */

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  /* ============================================================
     ANIMATION
  ============================================================ */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  /* ============================================================
     JSX
  ============================================================ */

  return (
    <section
      id="projects"
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden border-t border-emerald-500/10 bg-[#050505]"
    >
      {/* ========================================================
          BACKGROUND GRID
      ======================================================== */}

      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl h-[450px] bg-gradient-to-b from-emerald-500/10 via-emerald-950/5 to-transparent blur-3xl pointer-events-none" />

      {/* ========================================================
          CONTENT
      ======================================================== */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
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
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5 border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 shadow-sm">
            <HiSparkles className="w-3.5 h-3.5" />

            <span className="uppercase tracking-wider">
              Selected Work
            </span>
          </div>

          {/* Script Heading */}
          <span className="font-script text-emerald-400 block text-2xl sm:text-3xl md:text-4xl mb-1">
            Built with purpose, designed for impact
          </span>

          {/* Main Heading */}
          <h2
            className="font-editorial font-bold text-white leading-tight mb-4 tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            My{" "}
            <span className="text-emerald-400">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p
            className="max-w-2xl mx-auto text-gray-400 leading-relaxed px-2 sm:px-0"
            style={{
              fontSize:
                "clamp(0.9375rem, 1.5vw, 1.125rem)",
            }}
          >
            A collection of full-stack applications,
            AI-powered solutions, frontend experiences,
            and practical projects built using modern
            technologies.
          </p>

          {/* ====================================================
              CATEGORY FILTER
          ==================================================== */}

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    relative px-4 sm:px-5 py-2.5 rounded-xl
                    text-xs sm:text-sm font-semibold
                    border transition-all duration-300
                    ${
                      isActive
                        ? "bg-emerald-500 text-black border-emerald-500 shadow-lg shadow-emerald-500/20"
                        : "bg-white/[0.03] text-gray-400 border-white/10 hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/5"
                    }
                  `}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Counter */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-emerald-400 font-bold text-lg">
              {filteredProjects.length}
            </span>

            <span className="text-gray-500 text-sm">
              {selectedCategory === "All"
                ? "Projects Built"
                : `${selectedCategory} Projects`}
            </span>
          </div>
        </motion.div>

        {/* ======================================================
            PROJECT GRID
        ====================================================== */}

        {visibleProjects.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${showAll}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </motion.div>
        ) : (
          /* ====================================================
              EMPTY CATEGORY STATE
          ==================================================== */

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <FaLaptopCode className="text-4xl text-emerald-400/30 mb-4" />

            <h3 className="text-white font-bold text-lg mb-2">
              No Projects Found
            </h3>

            <p className="text-gray-500 text-sm">
              No projects are currently available in this category.
            </p>
          </motion.div>
        )}

        {/* ======================================================
            VIEW ALL PROJECTS
        ====================================================== */}

        {hasMoreProjects && (
          <motion.div
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="flex flex-col items-center justify-center mt-12 sm:mt-14"
          >
            {/* Divider */}
            <div className="flex items-center gap-4 w-full max-w-md mb-7">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600 font-bold">
                {showAll
                  ? "All Projects"
                  : `${filteredProjects.length - 5} More Projects`}
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() =>
                setShowAll((current) => !current)
              }
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all duration-300 hover:-translate-y-1"
              aria-expanded={showAll}
            >
              <span>
                {showAll
                  ? "Show Less"
                  : "View All Projects"}
              </span>

              {showAll ? (
                <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <FaArrowDown className="text-xs group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>

            {!showAll && (
              <p className="text-gray-600 text-xs mt-3">
                Explore all {filteredProjects.length}{" "}
                {selectedCategory === "All"
                  ? "projects"
                  : `${selectedCategory.toLowerCase()} projects`}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}