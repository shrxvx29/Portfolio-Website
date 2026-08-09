import React, { useRef } from "react";
import { projects } from "../utils/Project";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";

const ProjectList = () => {
  const scrollRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector("[data-project-card]");

    if (!card) return;

    const gap = 20;
    const scrollAmount = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-5 py-12 text-black sm:px-8 sm:py-14 lg:px-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Subtle Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          {/* LEFT */}

          <div>
            {/* Section Badge */}

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.03] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-black" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Featured Projects
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Things I've{" "}
              <span className="relative inline-block">
                Built
                <span className="absolute bottom-0 left-0 -z-10 h-3 w-full bg-gray-200" />
              </span>
              .
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
              Real-world applications built through hands-on development,
              experimentation and continuous learning.
            </p>
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div className="flex items-center gap-3">
            {/* Counter */}

            <div className="mr-1 hidden items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] sm:flex">
              <span className="text-black">
                {String(projects.length).padStart(2, "0")}
              </span>

              <span className="text-gray-300">/</span>

              <span className="text-gray-400">
                Projects
              </span>
            </div>

            {/* Previous */}

            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollProjects("left")}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <FiChevronLeft size={18} />
            </motion.button>

            {/* Next */}

            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scrollProjects("right")}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              <FiChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* =========================================================
            PROJECTS
        ========================================================= */}

        <div className="relative mt-7 sm:mt-8">

          <motion.div
            ref={scrollRef}
            className="
              flex
              gap-5
              overflow-x-auto
              snap-x
              snap-mandatory
              pb-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                data-project-card
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="
                  group
                  flex
                  w-[88vw]
                  min-w-[88vw]
                  snap-start
                  flex-col
                  overflow-hidden
                  rounded-[1.7rem]
                  border
                  border-black/15
                  bg-[#090909]
                  text-white
                  shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-black
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)]
                  sm:w-[calc((100%-20px)/2)]
                  sm:min-w-[calc((100%-20px)/2)]
                  lg:w-[calc((100%-40px)/3)]
                  lg:min-w-[calc((100%-40px)/3)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative h-[210px] overflow-hidden bg-gray-900 sm:h-[220px] lg:h-[225px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.025]
                    "
                  />

                  {/* Subtle image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                  {/* Project label */}

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/75 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    Project
                  </div>

                  {/* Project number */}

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-[10px] font-bold backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Image Tech */}

                  {project.techStack?.length > 0 && (
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/15 bg-black/75 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Title */}

                  <h3 className="text-xl font-extrabold leading-tight tracking-tight sm:text-[22px]">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">
                    {project.description}
                  </p>

                  {/* =================================================
                      TECH STACK
                  ================================================= */}

                  {project.techStack?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-2.5
                            py-1
                            text-[10px]
                            font-medium
                            text-white/55
                            transition-colors
                            duration-300
                            group-hover:border-white/20
                            group-hover:text-white/75
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Divider */}

                  <div className="my-5 h-px bg-white/10" />

                  {/* =================================================
                      ACTIONS
                  ================================================= */}

                  <div className="mt-auto flex items-center justify-between">

                    {/* Links */}

                    <div className="flex items-center gap-5">

                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition-colors duration-300 hover:text-white"
                        >
                          <FaGithub size={17} />
                          <span>Source</span>
                        </a>
                      )}

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition-colors duration-300 hover:text-white"
                        >
                          <FiExternalLink size={17} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>

                    {/* Arrow */}

                    <motion.a
                      href={project.liveLink || project.repoLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.06,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        text-white/70
                        transition-all
                        duration-300
                        group-hover:border-white
                        group-hover:bg-white
                        group-hover:text-black
                      "
                      aria-label={`Open ${project.title}`}
                    >
                      <FiArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* =========================================================
              MOBILE HINT
          ========================================================= */}

          <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
            <span className="h-px w-7 bg-black/10" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Swipe to explore
            </span>

            <span className="h-px w-7 bg-black/10" />
          </div>

          {/* =========================================================
              DESKTOP HINT
          ========================================================= */}

          <div className="mt-2 hidden items-center justify-center gap-2 sm:flex">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Scroll to explore
            </span>

            <FiArrowRight
              size={12}
              className="text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;