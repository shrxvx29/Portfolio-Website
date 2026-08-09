import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCode,
  FiMapPin,
  FiArrowUpRight,
  FiLayers,
  FiDatabase,
  FiMonitor,
} from "react-icons/fi";

import IntroImg from "../assets/SaravananK_Intro.jpeg";

const IntroPic = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // =========================================================
  // AUTO FLIP EVERY 3 SECONDS
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="w-full lg:w-[360px]"
      style={{
        perspective: "1400px",
        WebkitPerspective: "1400px",
      }}
    >
      {/* =====================================================
          3D CARD
      ===================================================== */}

      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative w-full transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >

        {/* =====================================================
            FRONT SIDE
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[1.6rem]
            border
            border-black/[0.08]
            bg-white
            shadow-lg
            sm:shadow-[0_20px_55px_rgba(0,0,0,0.08)]
            transform-gpu
          "
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >

          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-gray-100
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-48
              w-48
              rounded-full
              bg-gray-100
              blur-3xl
            "
          />

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              justify-between
              border-b
              border-black/[0.07]
              px-4
              py-3.5
            "
          >

            {/* Profile identity */}

            <div className="flex items-center gap-2.5">

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-black
                  text-white
                "
              >
                <FiCode size={15} />
              </div>

              <div>

                <p className="text-xs font-bold tracking-tight text-black">
                  Saravanan K
                </p>

                <p
                  className="
                    mt-0.5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-gray-400
                  "
                >
                  Developer Profile
                </p>

              </div>

            </div>

            {/* Open to work */}

            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-black/[0.08]
                bg-gray-50
                px-2.5
                py-1.5
              "
            >

              <span className="relative flex h-1.5 w-1.5">

                <span
                  className="
                    absolute
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-black/20
                  "
                />

                <span className="relative h-1.5 w-1.5 rounded-full bg-black" />

              </span>

              <span
                className="
                  hidden
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-gray-500
                  sm:block
                "
              >
                Open to Work
              </span>

            </div>

          </div>

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-3
              mt-3
              overflow-hidden
              rounded-[1.25rem]
              bg-gray-100
              transform-gpu
            "
          >

            <div className="aspect-[1.25/1]">

              <img
                src={IntroImg}
                alt="Saravanan K"
                draggable="false"
                className="
                  h-full
                  w-full
                  transform-gpu
                  object-cover
                  object-center
                  grayscale
                  transition-all
                  duration-700
                  hover:scale-[1.025]
                  hover:grayscale-0
                "
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              />

            </div>

            {/* Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-2/3
                bg-gradient-to-t
                from-black/80
                via-black/25
                to-transparent
              "
            />

            {/* Image content */}

            <div
              className="
                absolute
                bottom-3
                left-3
                right-3
              "
            >

              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/60
                "
              >
                Full Stack Developer
              </p>

              <p
                className="
                  mt-1
                  text-lg
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                Building for the web.
              </p>

            </div>

            {/* Arrow */}

            <div
              className="
                absolute
                right-3
                top-3
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                border
                border-white/20
                bg-black/40
                text-white
                backdrop-blur-md
              "
            >
              <FiArrowUpRight size={14} />
            </div>

          </div>

          {/* =================================================
              DETAILS
          ================================================= */}

          <div className="relative z-10 px-4 pb-4 pt-3">

            {/* Role + Location */}

            <div
              className="
                flex
                flex-col
                gap-2
                border-b
                border-black/[0.07]
                pb-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              {/* Role */}

              <div className="flex items-center gap-2.5">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-100
                    text-black
                  "
                >
                  <FiBriefcase size={14} />
                </div>

                <div>

                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-gray-400
                    "
                  >
                    Role
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-black">
                    Full Stack Developer
                  </p>

                </div>

              </div>

              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-[9px]
                  font-semibold
                  text-gray-500
                "
              >
                <FiMapPin size={12} />
                Chennai, India
              </div>

            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-3
                divide-x
                divide-black/[0.08]
                py-3
              "
            >

              {/* Projects */}

              <div className="pr-2">

                <p className="text-lg font-black leading-none">
                  5+
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-gray-400
                  "
                >
                  Projects
                </p>

              </div>

              {/* Tools */}

              <div className="px-2">

                <p className="text-lg font-black leading-none">
                  10+
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.06em]
                    text-gray-400
                  "
                >
                  Tools & Tech
                </p>

              </div>

              {/* Graduate */}

              <div className="pl-2 text-right">

                <p className="text-lg font-black leading-none">
                  2026
                </p>

                <p
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-gray-400
                  "
                >
                  Graduate
                </p>

              </div>

            </div>

            {/* =================================================
                CURRENT FOCUS
            ================================================= */}

            <div
              className="
                rounded-xl
                border
                border-black/[0.08]
                bg-gray-50
                p-3
              "
            >

              {/* Header */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-1.5">

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-md
                      bg-black
                      text-white
                    "
                  >
                    <FiCode size={11} />
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-gray-500
                    "
                  >
                    Current Focus
                  </span>

                </div>

                <span
                  className="
                    rounded-full
                    bg-black
                    px-2
                    py-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-white
                  "
                >
                  Learning
                </span>

              </div>

              {/* MERN */}

              <div className="mt-3">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xs font-bold text-black">
                      MERN Stack
                    </h3>

                    <p className="mt-0.5 text-[8px] text-gray-400">
                      MongoDB · Express · React · Node
                    </p>

                  </div>

                  <span className="text-xs font-black text-black">
                    30%
                  </span>

                </div>

                {/* Progress bar */}

                <div
                  className="
                    mt-2
                    h-1
                    overflow-hidden
                    rounded-full
                    bg-gray-200
                  "
                >

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-black"
                  />

                </div>

                <div className="mt-1.5 flex items-center justify-between">

                  <span className="text-[7px] text-gray-400">
                    Currently learning
                  </span>

                  <span className="text-[7px] font-bold text-black">
                    30% complete
                  </span>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            BACK SIDE
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[1.6rem]
            border
            border-black
            bg-black
            p-4
            text-white
            shadow-lg
            sm:shadow-[0_20px_55px_rgba(0,0,0,0.2)]
            transform-gpu
          "
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(0)",
            willChange: "transform",
          }}
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-white/[0.04]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-48
              w-48
              rounded-full
              bg-white/[0.03]
              blur-3xl
            "
          />

          <div className="relative flex h-full flex-col">

            {/* =================================================
                BACK HEADER
            ================================================= */}

            <div className="flex items-start justify-between">

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-black
                "
              >
                <FiLayers size={16} />
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-white/15
                  px-2.5
                  py-1
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white/60
                "
              >
                Developer Snapshot
              </span>

            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <div className="mt-7">

              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                "
              >
                What I'm working towards
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                "
              >
                Becoming a better
                <br />
                full stack developer.
              </h3>

              <p
                className="
                  mt-3
                  text-[10px]
                  leading-5
                  text-white/55
                "
              >
                Building real applications, improving backend
                knowledge and strengthening the fundamentals
                required to become a complete developer.
              </p>

            </div>

            {/* =================================================
                DEVELOPMENT AREAS
            ================================================= */}

            <div className="mt-6 space-y-2">

              {/* Frontend */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-3
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-black
                  "
                >
                  <FiMonitor size={15} />
                </div>

                <div>

                  <p className="text-xs font-bold">
                    Frontend
                  </p>

                  <p className="mt-0.5 text-[8px] text-white/45">
                    React · JavaScript · Tailwind CSS
                  </p>

                </div>

              </div>

              {/* Backend */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-3
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-black
                  "
                >
                  <FiCode size={15} />
                </div>

                <div>

                  <p className="text-xs font-bold">
                    Backend & APIs
                  </p>

                  <p className="mt-0.5 text-[8px] text-white/45">
                    Java · Spring Boot · REST APIs
                  </p>

                </div>

              </div>

              {/* Database */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-3
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    text-black
                  "
                >
                  <FiDatabase size={15} />
                </div>

                <div>

                  <p className="text-xs font-bold">
                    Databases
                  </p>

                  <p className="mt-0.5 text-[8px] text-white/45">
                    MySQL · MongoDB
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                BOTTOM
            ================================================= */}

            <div className="mt-auto pt-5">

              <div className="border-t border-white/10 pt-3.5">

                <div className="flex items-center justify-between">

                  <div>

                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/35
                      "
                    >
                      Current Direction
                    </p>

                    <p className="mt-1 text-xs font-bold">
                      Frontend → Full Stack
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.05]
                    "
                  >
                    <FiArrowUpRight size={14} />
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default IntroPic;