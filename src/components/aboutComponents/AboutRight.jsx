import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import IdCardPic from "../../public/images/IdCardPic.jpeg";

import {
  FaServer,
  FaLayerGroup,
  FaDatabase,
  FaShieldAlt,
  FaSyncAlt,
  FaMapMarkerAlt,
  FaIdCard,
  FaFingerprint,
  FaWifi,
  FaCode,
  FaCloud,
} from "react-icons/fa";

import { FaCircleCheck } from "react-icons/fa6";

import { HiArrowNarrowRight } from "react-icons/hi";

export default function AboutRight() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // =========================================================
  // AUTO FLIP
  // =========================================================

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // =========================================================
  // MANUAL FLIP
  // =========================================================

  const toggleCard = () => {
    setIsFlipped((prev) => !prev);
  };

  // =========================================================
  // TECHNICAL CAPABILITIES
  // =========================================================

  const capabilities = [
    {
      index: "01",
      title: "Full Stack Engineering",
      desc: "Modern end-to-end web applications with scalable architecture.",
      tech: "React · Node.js · Java · Spring Boot",
      icon: FaLayerGroup,
    },
    {
      index: "02",
      title: "Backend Development",
      desc: "REST APIs, authentication, business logic and secure services.",
      tech: "Node.js · Express · Spring Boot",
      icon: FaServer,
    },
    {
      index: "03",
      title: "Data & Systems",
      desc: "Structured data modeling and database-driven applications.",
      tech: "MongoDB · MySQL · SQL",
      icon: FaDatabase,
    },
    {
      index: "04",
      title: "Production Mindset",
      desc: "Clean code, security, deployment and maintainable architecture.",
      tech: "Git · REST · Security · Deployment",
      icon: FaShieldAlt,
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      viewport={{ once: true }}
      className="lg:col-span-6 relative flex justify-center"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="absolute -inset-24 bg-emerald-500/[0.035] blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute -inset-12 bg-white/[0.012] blur-[80px] rounded-full pointer-events-none" />

      {/* =====================================================
          TECH GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* =====================================================
          CARD CONTAINER
      ===================================================== */}

      <div
        className="relative z-10 w-full max-w-[550px]"
        style={{
          perspective: "2000px",
        }}
      >
        {/* ===================================================
            INTERACTION WRAPPER
        =================================================== */}

        <div
          className="relative w-full cursor-pointer"
          onClick={toggleCard}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleCard();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={
            isFlipped
              ? "Show developer identity"
              : "Show technical profile"
          }
        >
          {/* =================================================
              3D CARD
          ================================================= */}

          <motion.div
            animate={{
              rotateY: isFlipped ? 180 : 0,
              scale: isPaused ? 1.015 : 1,
            }}
            transition={{
              rotateY: {
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: 0.35,
                ease: "easeOut",
              },
            }}
            className="relative w-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* =================================================
                FRONT SIDE
            ================================================= */}

            <div
              className="
                relative
                w-full
                min-h-[445px]
                sm:min-h-[470px]
                rounded-[32px]
                overflow-hidden
                bg-[#080909]/95
                border border-white/[0.10]
                shadow-[0_35px_120px_rgba(0,0,0,0.75)]
              "
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Premium inner border */}

              <div className="absolute inset-[1px] rounded-[31px] border border-white/[0.035] pointer-events-none" />

              {/* Top highlight */}

              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="absolute top-0 left-[22%] right-[22%] h-[2px] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent blur-[1px]" />

              {/* Ambient lighting */}

              <div className="absolute -top-40 -right-32 w-[420px] h-[420px] bg-emerald-500/[0.075] blur-[110px] rounded-full pointer-events-none" />

              <div className="absolute -bottom-48 -left-32 w-[420px] h-[420px] bg-emerald-400/[0.035] blur-[110px] rounded-full pointer-events-none" />

              {/* Micro grid */}

              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />

              {/* Main content */}

              <div className="relative p-6 sm:p-8">
                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    {/* Logo */}

                    <div className="relative">
                      <div className="absolute -inset-2 bg-emerald-400/10 blur-lg rounded-2xl" />

                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.015] border border-white/[0.10] flex items-center justify-center">
                        <span className="text-emerald-400 font-black text-sm tracking-tight">
                          SK
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[8px] text-gray-600 font-mono tracking-[0.32em] uppercase">
                        Digital Identity
                      </p>

                      <p className="text-white text-sm font-semibold tracking-[0.18em] mt-1">
                        FULL STACK DEVELOPER
                      </p>
                    </div>
                  </div>

                  {/* Status */}

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/[0.055] border border-emerald-400/15">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-50 animate-ping" />
                      <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </span>

                    <span className="text-[8px] text-emerald-400 font-mono font-bold tracking-[0.18em]">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* =================================================
                    PROFILE
                ================================================= */}

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
                  {/* PHOTO */}

                  <div className="relative shrink-0">
                    {/* Outer glow */}

                    <div className="absolute -inset-5 rounded-[25px] bg-emerald-400/[0.055] blur-2xl" />

                    {/* Photo frame */}

                    <div className="relative p-[2px] rounded-[23px] bg-gradient-to-br from-white/20 via-emerald-400/30 to-transparent">
                      <div className="relative w-[140px] h-[174px] sm:w-[150px] sm:h-[188px] rounded-[21px] overflow-hidden bg-[#101111]">
                        <img
                          src={IdCardPic}
                          alt="Saravanan K"
                          className="w-full h-full object-cover object-center"
                        />

                        {/* Cinematic overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                        {/* Scan line */}

                        <motion.div
                          animate={{
                            y: ["-120%", "500%"],
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                            absolute
                            left-0
                            right-0
                            h-[2px]
                            bg-emerald-400/60
                            shadow-[0_0_20px_rgba(16,185,129,0.9)]
                          "
                        />

                        {/* Corner markers */}

                        <span className="absolute top-2 left-2 w-4 h-4 border-l border-t border-emerald-400/60" />
                        <span className="absolute top-2 right-2 w-4 h-4 border-r border-t border-emerald-400/60" />
                        <span className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-emerald-400/60" />
                        <span className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-emerald-400/60" />

                        {/* ID watermark */}

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-[7px] font-mono text-white/45 tracking-[0.2em]">
                            VERIFIED
                          </span>

                          <FaFingerprint
                            size={12}
                            className="text-emerald-400/60"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Online badge */}

                    <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080909] border border-white/[0.10] shadow-xl">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-50 animate-ping" />

                        <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                      </span>

                      <span className="text-[8px] text-emerald-400 font-mono font-bold tracking-wider">
                        AVAILABLE
                      </span>
                    </div>
                  </div>

                  {/* IDENTITY */}

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <FaFingerprint
                        className="text-emerald-400/70"
                        size={10}
                      />

                      <span className="text-[8px] text-gray-600 font-mono tracking-[0.25em] uppercase">
                        VERIFIED PROFILE
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-[40px] font-black text-white tracking-[-0.04em] leading-none">
                      SARAVANAN
                      <span className="text-emerald-400"> K.</span>
                    </h3>

                    <p className="mt-3 text-sm text-gray-400 font-medium tracking-wide">
                      Java • Spring Boot • React • MERN
                    </p>

                    {/* Tech stack */}

                    <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-2.5
                            py-1.5
                            rounded-lg
                            bg-white/[0.025]
                            border border-white/[0.08]
                            text-[9px]
                            text-gray-400
                            font-mono
                            hover:text-emerald-400
                            hover:border-emerald-400/30
                            hover:bg-emerald-400/[0.03]
                            transition-all
                            duration-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    INFORMATION PANELS
                ================================================= */}

                <div className="mt-8 grid grid-cols-3 gap-2.5">
                  <div className="rounded-2xl bg-white/[0.025] border border-white/[0.08] p-3.5 backdrop-blur-xl">
                    <p className="text-[7px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                      Identity
                    </p>

                    <p className="text-[11px] text-gray-300 font-mono mt-2">
                      SK-2026
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.025] border border-white/[0.08] p-3.5 backdrop-blur-xl">
                    <p className="text-[7px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                      Specialization
                    </p>

                    <p className="text-[11px] text-gray-300 font-mono mt-2">
                      FULL STACK
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-400/[0.035] border border-emerald-400/15 p-3.5 backdrop-blur-xl">
                    <p className="text-[7px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                      Status
                    </p>

                    <p className="text-[11px] text-emerald-400 font-mono mt-2">
                      AVAILABLE
                    </p>
                  </div>
                </div>

                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.07]">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt
                      size={9}
                      className="text-emerald-400/60"
                    />

                    <span className="text-[8px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                      Chennai • India
                    </span>
                  </div>

                  {/* Barcode */}

                  <div className="flex items-end gap-[2px] h-5 opacity-35">
                    {[3, 6, 2, 8, 4, 7, 3, 9, 5, 2, 7, 4, 8, 3, 6, 2].map(
                      (height, index) => (
                        <span
                          key={index}
                          style={{
                            height: `${height * 2}px`
                          }}
                          className="w-[2px] bg-emerald-400"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Auto rotation indicator */}

                <div className="flex justify-center items-center gap-2 mt-5">
                  <motion.span
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaSyncAlt
                      size={9}
                      className="text-emerald-400/60"
                    />
                  </motion.span>

                  <span className="text-[8px] text-gray-600 font-mono tracking-[0.15em]">
                    AUTO ROTATING • CLICK TO FLIP
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                BACK SIDE
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                w-full
                min-h-[445px]
                sm:min-h-[470px]
                rounded-[32px]
                overflow-hidden
                bg-[#080909]/95
                border border-white/[0.10]
                shadow-[0_35px_120px_rgba(0,0,0,0.75)]
              "
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {/* Inner border */}

              <div className="absolute inset-[1px] rounded-[31px] border border-white/[0.035] pointer-events-none" />

              {/* Lighting */}

              <div className="absolute -top-44 -right-32 w-[430px] h-[430px] bg-emerald-500/[0.07] blur-[110px] rounded-full pointer-events-none" />

              <div className="absolute -bottom-48 -left-40 w-[430px] h-[430px] bg-emerald-400/[0.035] blur-[110px] rounded-full pointer-events-none" />

              {/* Grid */}

              <div
                className="absolute inset-0 opacity-[0.018] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative p-5 sm:p-7 h-full">
                {/* =================================================
                    BACK HEADER
                ================================================= */}

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[8px] text-gray-600 font-mono tracking-[0.3em] uppercase">
                      Developer Credentials
                    </p>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
                      Technical Profile
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-2 bg-emerald-400/10 blur-lg rounded-xl" />

                    <div className="relative w-11 h-11 rounded-xl bg-emerald-400/[0.06] border border-emerald-400/20 flex items-center justify-center">
                      <FaIdCard
                        className="text-emerald-400"
                        size={15}
                      />
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CAPABILITY CARDS
                ================================================= */}

                <div className="space-y-2.5">
                  {capabilities.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        animate={
                          isFlipped
                            ? {
                                opacity: 1,
                                x: 0,
                              }
                            : {
                                opacity: 0,
                                x: 25,
                              }
                        }
                        transition={{
                          duration: 0.4,
                          delay: isFlipped
                            ? 0.25 + index * 0.08
                            : 0,
                        }}
                        className="
                          group
                          relative
                          flex
                          items-center
                          gap-3
                          p-3
                          sm:p-3.5
                          rounded-2xl
                          bg-white/[0.018]
                          border border-white/[0.075]
                          hover:border-emerald-400/25
                          hover:bg-emerald-400/[0.025]
                          transition-all
                          duration-300
                        "
                      >
                        {/* Number */}

                        <div className="shrink-0 w-9 h-9 rounded-xl bg-emerald-400/[0.07] border border-emerald-400/15 flex items-center justify-center">
                          <span className="font-mono text-[10px] font-bold text-emerald-400">
                            {item.index}
                          </span>
                        </div>

                        {/* Icon */}

                        <div className="shrink-0 w-9 h-9 rounded-xl bg-white/[0.025] border border-white/[0.08] flex items-center justify-center text-gray-500 group-hover:text-emerald-400 group-hover:border-emerald-400/20 transition-all">
                          <Icon size={14} />
                        </div>

                        {/* Content */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {item.title}
                            </h4>

                            <span className="hidden sm:block text-[7px] text-gray-700 font-mono">
                              0{index + 1}
                            </span>
                          </div>

                          <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed mt-0.5">
                            {item.desc}
                          </p>

                          <p className="text-[8px] sm:text-[9px] text-emerald-400/65 font-mono mt-1">
                            {item.tech}
                          </p>
                        </div>

                        {/* Arrow */}

                        <HiArrowNarrowRight
                          className="
                            hidden
                            sm:block
                            text-gray-700
                            group-hover:text-emerald-400
                            group-hover:translate-x-1
                            transition-all
                          "
                          size={14}
                        />

                        {/* Hover accent */}

                        <div className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    );
                  })}
                </div>

                {/* =================================================
                    SYSTEM STATUS
                ================================================= */}

                <div className="mt-5 pt-4 border-t border-white/[0.07]">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.018] border border-white/[0.05]">
                      <FaWifi
                        size={9}
                        className="text-emerald-400"
                      />

                      <span className="text-[7px] text-gray-500 font-mono">
                        CONNECTED
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.018] border border-white/[0.05]">
                      <FaShieldAlt
                        size={9}
                        className="text-emerald-400"
                      />

                      <span className="text-[7px] text-gray-500 font-mono">
                        SECURE
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.018] border border-white/[0.05]">
                      <FaCircleCheck
                        size={9}
                        className="text-emerald-400"
                      />

                      <span className="text-[7px] text-gray-500 font-mono">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    BACK FOOTER
                ================================================= */}

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <FaCode
                      size={9}
                      className="text-emerald-400/60"
                    />

                    <span className="text-[8px] text-gray-600 font-mono tracking-[0.14em]">
                      BUILD • SHIP • SCALE
                    </span>
                  </div>

                  <span className="text-[8px] text-gray-700 font-mono">
                    SK / 2026
                  </span>
                </div>

                {/* Flip indicator */}

                <div className="flex justify-center items-center gap-2 mt-4">
                  <motion.span
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaSyncAlt
                      size={9}
                      className="text-emerald-400/50"
                    />
                  </motion.span>

                  <span className="text-[8px] text-gray-600 font-mono tracking-[0.15em]">
                    AUTO ROTATING • CLICK TO RETURN
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            EXTERNAL CARD FOOTER
        ======================================================= */}

        <div className="flex justify-center items-center gap-2 mt-5">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping" />

            <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          </span>

          <span className="text-[9px] text-gray-600 font-mono tracking-[0.22em] uppercase">
            Systems • Software • Scale
          </span>
        </div>
      </div>
    </motion.div>
  );
}
