import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";
import {
  FiBookOpen,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

/* =========================================================
   JOURNEY DATA
========================================================= */

const journey = [
  {
    type: "Education",
    icon: FaGraduationCap,
    year: "2023 — 2026",
    status: "Completed",
    title: "B.Sc. Computer Science with Data Science",
    organization: "St. Thomas College of Arts and Science",
    location: "Chennai, India",
    description:
      "Building a strong foundation in computer science, data science, programming, databases and software development.",
    meta: "CGPA: 7.25",
    tags: [
      "Computer Science",
      "Data Science",
      "Programming",
      "Databases",
    ],
  },

  {
    type: "Experience",
    icon: FaBriefcase,
    year: "May 2025 — Jun 2025",
    status: "Completed",
    title: "UI/UX Designer Intern",
    organization: "G-Tec Computer Education",
    location: "Anna Nagar, Chennai",
    description:
      "Worked on interface design, wireframes and user experience improvements while collaborating on practical website projects.",
    meta: "UI/UX Design",
    tags: [
      "Figma",
      "UI Design",
      "Wireframes",
      "UX",
    ],
  },

  {
    type: "Experience",
    icon: FaBriefcase,
    year: "Jan 2026 — Present",
    status: "Current",
    title: "Full Stack Developer Intern",
    organization: "BDreamz Global Solutions",
    location: "Chennai, India",
    description:
      "Working on full-stack development and strengthening practical development skills through real-world application development.",
    meta: "Full Stack Development",
    tags: [
      "JavaScript",
      "Java",
      "React",
      "REST APIs",
    ],
  },

  {
    type: "Training",
    icon: FaCode,
    year: "Jan 2026 — Present",
    status: "Learning",
    title: "Full Stack Developer Trainee",
    organization: "Besant Technologies",
    location: "Chennai, India",
    description:
      "Developing practical full-stack applications while learning backend development, REST APIs, database integration and modern web technologies.",
    meta: "Java Full Stack Development",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
    ],
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Education = () => {
  return (
    <section
      id="career"
      className="relative overflow-hidden bg-white px-5 py-14 text-black sm:px-8 sm:py-16 lg:px-12"
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute left-[-180px] top-[350px] h-[350px] w-[350px] rounded-full bg-black/[0.02] blur-[120px]" />

        <div className="absolute right-[-180px] bottom-[200px] h-[350px] w-[350px] rounded-full bg-black/[0.02] blur-[120px]" />
      </div>

      {/* ==================================================
          CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.03] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Education & Experience
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="relative inline-block">
              Journey

              <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-black" />
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            From academic foundations to hands-on design, development
            and full-stack experience.
          </p>
        </motion.div>

        {/* ==================================================
            TIMELINE
        ================================================== */}

        <div className="relative mt-12 sm:mt-14">

          {/* Desktop Timeline */}

          <div className="absolute bottom-5 left-1/2 top-5 hidden w-px -translate-x-1/2 bg-black/10 lg:block" />

          <div className="space-y-6 lg:space-y-9">

            {journey.map((item, index) => {
              const Icon = item.icon;

              const isCurrent =
                item.status === "Current" ||
                item.status === "Learning";

              const isEducation =
                item.type === "Education";

              return (
                <motion.div
                  key={`${item.title}-${item.organization}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className="relative"
                >

                  {/* ==================================================
                      TIMELINE NODE
                  ================================================== */}

                  <div className="absolute left-1/2 top-9 z-20 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-black text-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] lg:flex">
                    <Icon size={14} />
                  </div>

                  {/* ==================================================
                      CARD
                  ================================================== */}

                  <div
                    className={`relative lg:w-[calc(50%-38px)] ${
                      index % 2 === 0
                        ? "lg:mr-auto"
                        : "lg:ml-auto"
                    }`}
                  >

                    {/* Connector */}

                    <div
                      className={`absolute top-9 hidden h-px w-9 bg-black/10 lg:block ${
                        index % 2 === 0
                          ? "-right-9"
                          : "-left-9"
                      }`}
                    />

                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`group relative overflow-hidden rounded-[1.6rem] border p-5 transition-all duration-300 sm:p-6 ${
                        isCurrent
                          ? "border-black bg-black text-white shadow-[0_18px_45px_rgba(0,0,0,0.13)]"
                          : "border-black/10 bg-white text-black shadow-sm hover:border-black hover:shadow-xl"
                      }`}
                    >

                      {/* Decorative Circle */}

                      <div
                        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full transition-transform duration-700 group-hover:scale-125 ${
                          isCurrent
                            ? "bg-white/[0.04]"
                            : "bg-gray-100"
                        }`}
                      />

                      {/* ==================================================
                          TOP
                      ================================================== */}

                      <div className="relative z-10 flex items-start justify-between gap-4">

                        <div className="flex items-center gap-3">

                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                              isCurrent
                                ? "bg-white text-black"
                                : "bg-black text-white"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <div>

                            <p
                              className={`text-[9px] font-bold uppercase tracking-[0.18em] ${
                                isCurrent
                                  ? "text-white/45"
                                  : "text-gray-400"
                              }`}
                            >
                              {item.type}
                            </p>

                            <div
                              className={`mt-0.5 flex items-center gap-1.5 text-xs font-bold ${
                                isCurrent
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              <FaCalendarAlt
                                size={10}
                                className={
                                  isCurrent
                                    ? "text-white/40"
                                    : "text-gray-400"
                                }
                              />

                              {item.year}
                            </div>

                          </div>
                        </div>

                        {/* Status */}

                        <span
                          className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider ${
                            isCurrent
                              ? "border-white/15 bg-white/10 text-white"
                              : "border-black/10 bg-gray-50 text-gray-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* ==================================================
                          CONTENT
                      ================================================== */}

                      <div className="relative z-10 mt-6">

                        <h3
                          className={`text-xl font-black tracking-tight sm:text-[22px] ${
                            isCurrent
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`mt-1 text-sm font-semibold ${
                            isCurrent
                              ? "text-white/65"
                              : "text-gray-600"
                          }`}
                        >
                          {item.organization}
                        </p>

                        {/* Location */}

                        <div
                          className={`mt-3 flex items-center gap-1.5 text-xs font-medium ${
                            isCurrent
                              ? "text-white/45"
                              : "text-gray-400"
                          }`}
                        >
                          <FiMapPin size={13} />

                          {item.location}
                        </div>

                        {/* Description */}

                        <p
                          className={`mt-4 text-sm leading-6 ${
                            isCurrent
                              ? "text-white/60"
                              : "text-gray-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* ==================================================
                          META
                      ================================================== */}

                      <div
                        className={`relative z-10 mt-5 flex items-center gap-2 border-t pt-4 ${
                          isCurrent
                            ? "border-white/10"
                            : "border-black/10"
                        }`}
                      >

                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                            isCurrent
                              ? "bg-white/10 text-white"
                              : "bg-gray-100 text-black"
                          }`}
                        >
                          {isEducation ? (
                            <FiBookOpen size={14} />
                          ) : (
                            <FaCode size={13} />
                          )}
                        </div>

                        <span
                          className={`text-xs font-bold ${
                            isCurrent
                              ? "text-white/75"
                              : "text-gray-600"
                          }`}
                        >
                          {item.meta}
                        </span>

                      </div>

                      {/* ==================================================
                          TAGS
                      ================================================== */}

                      <div className="relative z-10 mt-4 flex flex-wrap gap-2">

                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                              isCurrent
                                ? "border-white/10 bg-white/[0.06] text-white/60"
                                : "border-black/10 bg-gray-50 text-gray-500"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                      {/* Current Arrow */}

                      {isCurrent && (
                        <div className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/30 group-hover:text-white">
                          <FiArrowUpRight size={15} />
                        </div>
                      )}

                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            FOOTER
        ================================================== */}

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
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-9 text-center"
        >
          <p className="text-xs font-medium text-gray-400 sm:text-sm">
            Learning through education, training and real-world development.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;