import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

import profileImg from "../assets/SaravananK_Img.jpeg";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/shrxvx29",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/saravanankhere/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/shrxvx",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SaravananK_Resume.pdf";
    link.download = "SaravananK_Resume.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white text-black lg:h-[100svh]">

      {/* ==================================================
          BACKGROUND
      ================================================== */}

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

        {/* Soft Left Glow */}

        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-black/[0.025] blur-[120px]" />

        {/* Soft Right Glow */}

        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-black/[0.035] blur-[120px]" />
      </div>

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:min-h-0 lg:px-12 lg:pb-4 lg:pt-24">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >

            {/* =========================
                AVAILABILITY
            ========================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.06, rotate: -1.5, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group mb-6 inline-flex cursor-default items-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-shadow hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] sm:text-sm lg:mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-70 group-hover:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              Available for Opportunities
            </motion.div>

            {/* =========================
                MAIN HEADING
            ========================= */}

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[4rem]">

              Hi, I'm{" "}

              <span className="relative inline-block">
                Saravanan

                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-gray-200" />
              </span>

              <br />

              <span className="text-gray-500">
                Full Stack
              </span>

              <br />

              Developer.
            </h1>

            {/* =========================
                ROLE
            ========================= */}

            <div className="mt-6 flex min-h-[30px] items-center gap-3 lg:mt-4">

              <span className="h-px w-8 bg-black" />

              <TypeAnimation
                sequence={[
                  "Java Full Stack Developer",
                  2500,
                  "Spring Boot Developer",
                  2500,
                  "React Developer",
                  2500,
                  "Full Stack Developer",
                  2500,
                ]}
                speed={45}
                repeat={Infinity}
                className="text-sm font-bold sm:text-lg"
              />
            </div>

            {/* =========================
                DESCRIPTION
            ========================= */}

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 lg:mt-4">
              I build responsive, user-focused web applications
              with clean interfaces and practical functionality.
              Currently expanding my frontend experience into
              Java-based full stack development.
            </p>

            {/* ==================================================
                STATS
            ================================================== */}

            <div className="mt-8 flex max-w-lg divide-x divide-black/10 lg:mt-5">

              {/* PROJECTS */}

              <div className="pr-7 sm:pr-9">
                <p className="text-2xl font-black sm:text-3xl">
                  7+
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-xs">
                  Projects
                </p>
              </div>

              {/* TECHNOLOGIES */}

              <div className="px-7 sm:px-9">
                <p className="text-2xl font-black sm:text-3xl">
                  15+
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-xs">
                  Technologies
                </p>
              </div>

              {/* GRADUATION */}

              <div className="pl-7 sm:pl-9">
                <p className="text-2xl font-black sm:text-3xl">
                  2026
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-xs">
                  Graduate
                </p>
              </div>

            </div>

            {/* ==================================================
                CTA
            ================================================== */}

            <div className="mt-9 flex flex-wrap gap-3 lg:mt-5">

              {/* VIEW PROJECTS */}

              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-gray-800"
              >
                View My Work

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              {/* RESUME */}

              <motion.button
                onClick={handleDownload}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:border-black hover:bg-gray-50"
              >
                <FiDownload size={17} />

                Download Resume
              </motion.button>

            </div>

            {/* ==================================================
                SOCIALS
            ================================================== */}

            <div className="mt-7 flex items-center gap-3 lg:mt-4">

              <span className="mr-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Connect
              </span>

              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1,
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white text-gray-500 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}

            </div>
          </motion.div>

          {/* ==================================================
              RIGHT PROFILE
          ================================================== */}

          {/* ==================================================
    RIGHT PROFILE
================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: 30,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.8,
    delay: 0.15,
  }}
  className="order-1 flex justify-center lg:order-2"
>
  <div className="relative">

    {/* ==================================================
        SOFT HALO
    ================================================== */}

    <motion.div
      animate={{
        scale: [1, 1.04, 1],
        opacity: [0.25, 0.4, 0.25],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute inset-[-35px] rounded-full bg-gray-200 blur-3xl"
    />

    {/* ==================================================
        OUTER ORBIT
    ================================================== */}

    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -inset-5 rounded-full border border-dashed border-black/15"
    />

    {/* ==================================================
        INNER ORBIT
    ================================================== */}

    <motion.div
      animate={{
        rotate: -360,
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -inset-2 rounded-full border border-black/5"
    />

    {/* ==================================================
        PROFILE IMAGE
    ================================================== */}

    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        relative
        h-72
        w-72
        overflow-hidden
        rounded-full
        border-[5px]
        border-black
        bg-gray-100
        shadow-[0_25px_70px_rgba(0,0,0,0.15)]
        sm:h-80
        sm:w-80
        lg:h-[370px]
        lg:w-[370px]
      "
    >

      <img
        src={profileImg}
        alt="Saravanan"
        className="
          h-full
          w-full
          object-cover
          object-center
          grayscale
          transition-all
          duration-700
          hover:grayscale-0
        "
      />

      {/* Bottom subtle gradient */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />

    </motion.div>

    {/* ==================================================
        JAVA + REACT BADGE
    ================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        x: -15,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.7,
      }}
      className="
        absolute
        left-[-18px]
        top-10
        hidden
        items-center
        gap-2
        rounded-2xl
        border
        border-black/10
        bg-black
        px-4
        py-3
        text-white
        shadow-xl
        sm:flex
      "
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-black text-black">
        &lt;/&gt;
      </span>

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
          Stack
        </p>

        <p className="mt-0.5 text-xs font-bold">
          Java + React
        </p>
      </div>
    </motion.div>

    {/* ==================================================
        OPEN TO WORK
    ================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.8,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        absolute
        bottom-3
        right-[-8px]
        flex
        items-center
        gap-2
        rounded-full
        border
        border-black/10
        bg-white
        px-4
        py-2.5
        text-xs
        font-bold
        shadow-xl
        sm:bottom-6
        sm:right-[-22px]
      "
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute h-full w-full animate-ping rounded-full bg-black/30" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-black" />
      </span>

      Open to Work
    </motion.div>

    {/* ==================================================
        FLOATING CODE SYMBOL
    ================================================== */}

    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 4, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        right-[-8px]
        top-[-20px]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-black/10
        bg-white
        text-sm
        font-black
        text-black
        shadow-lg
        sm:right-[-20px]
      "
    >
      &lt;/&gt;
    </motion.div>

  </div>
</motion.div>

        </div>
      </div>

      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-black/10 bg-white px-3 py-2 text-gray-400 shadow-sm transition hover:border-black hover:text-black md:block"
        aria-label="Scroll to About"
      >
        ↓
      </motion.a>

    </section>
  );
};

export default Hero;
