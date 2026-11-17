import React, { useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLayerGroup,
  FaBolt,
  FaHeart,
  FaArrowRight
} from 'react-icons/fa';
import {
  HiSparkles,
  HiArrowNarrowRight,
  HiArrowNarrowDown
} from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../public/images/profile.webp';

/**
 * Production-Level Hero Section Component
 * - Black + premium green color theme
 * - Four value proposition capability cards
 * - Layered profile card with slight rotation and floating geometric accents
 * - Responsive two-column composition with zero horizontal overflow
 */
export default function Hero() {
  const { personal } = portfolioData;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Respect user's motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) =>
      setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener('change', handler);

    return () =>
      mediaQuery.removeEventListener(
        'change',
        handler
      );
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion
          ? 'auto'
          : 'smooth',
        block: 'start',
      });
    }
  };

  const animationClass = (base) =>
    prefersReducedMotion ? '' : base;

  const valueProps = [
    {
      title: 'Clean Code',
      desc: 'Maintainable & Scalable',
      icon: FaCode,
    },
    {
      title: 'Modern Stack',
      desc: 'MERN · React · Node.js',
      icon: FaLayerGroup,
    },
    {
      title: 'Performance',
      desc: 'Speed & Scale Focused',
      icon: FaBolt,
    },
    {
      title: 'User Focused',
      desc: 'Real Impact & UX',
      icon: FaHeart,
    },
  ];

  return (
    <section
      id="home"
      className="
        w-full
        min-h-[100svh]
        flex
        items-center
        justify-center

        pt-28
        sm:pt-32
        md:pt-36

        pb-12
        sm:pb-16
        lg:pb-20

        relative
        overflow-hidden

        bg-[#020504]
        text-white
      "
    >
      {/* Background Decorative Ambient Radial Glow */}

      <div
        className="
          absolute
          top-24
          right-1/4

          w-[450px]
          sm:w-[650px]

          h-[450px]
          sm:h-[650px]

          rounded-full
          opacity-35
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)',
        }}
      />

      <div
        className="
          absolute
          bottom-12
          left-8

          w-80
          h-80

          rounded-full
          opacity-25
          pointer-events-none
          hidden
          sm:block
        "
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle Background Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          pointer-events-none
        "
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Background Geometric Plus & Dot Accents */}

      <div className="absolute top-36 left-[8%] text-emerald-400/40 text-lg font-mono pointer-events-none hidden lg:block select-none">
        +
      </div>

      <div className="absolute bottom-28 left-[14%] text-emerald-400/35 text-xl font-mono pointer-events-none hidden lg:block select-none">
        +
      </div>

      <div className="absolute top-48 right-[10%] text-emerald-400/40 text-lg font-mono pointer-events-none hidden lg:block select-none">
        +
      </div>

      <div className="absolute top-1/2 right-[6%] w-2.5 h-2.5 rounded-full bg-emerald-400/70 shadow-[0_0_12px_rgba(52,211,153,0.6)] pointer-events-none hidden lg:block" />

      {/* Main Hero Container */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* LEFT COLUMN */}

          <div
            className={`lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center ${animationClass(
              'animate-fade-in'
            )}`}
          >

            {/* Availability Status Badge */}

            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3.5 sm:mb-4 bg-emerald-400/10 border border-emerald-400/20 w-fit ${animationClass(
                'animate-slide-down'
              )}`}
            >
              <span
                className={`w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] ${animationClass(
                  'animate-pulse'
                )}`}
              />

              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap text-emerald-300">
                Available for work
              </span>
            </div>

            {/* Handwritten Script Introduction */}

            <div className="font-script text-2xl sm:text-3xl lg:text-[2rem] text-emerald-400 font-bold leading-none mb-1.5 sm:mb-2 select-none">
              Hi, I&apos;m
            </div>

            {/* Main Headline */}

            <h1
              className={`font-editorial font-extrabold tracking-tight text-white leading-[1.05] mb-2 sm:mb-3 ${animationClass(
                'animate-slide-up'
              )}`}
              style={{
                fontSize:
                  'clamp(2.4rem, 5.2vw, 4.35rem)',
              }}
            >
              <span>SARAVANAN </span>

              <span
                style={{
                  background:
                    'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                K
              </span>
            </h1>

            {/* Professional Title */}

            <h2 className="font-garamond text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-gray-200 tracking-tight mb-3.5 sm:mb-4 leading-snug">
              MERN Stack & Full Stack Developer
            </h2>

            {/* Professional Hero Description */}

            <p
              className={`leading-relaxed mb-6 sm:mb-7 max-w-xl text-gray-400 ${animationClass(
                'animate-fade-in'
              )}`}
              style={{
                fontSize:
                  'clamp(0.95rem, 1.4vw, 1.1rem)',
              }}
            >
              I build clean, scalable, and
              high-performance web applications
              with modern architectures.
              Passionate about solving real-world
              problems and delivering seamless
              digital experiences.
            </p>

            {/* Four Value-Proposition Capability Blocks */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              {valueProps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      p-3
                      sm:p-3.5

                      rounded-xl

                      bg-white/[0.025]

                      border
                      border-emerald-400/15

                      hover:border-emerald-400/40
                      hover:bg-emerald-400/[0.04]

                      transition-all
                      duration-300

                      flex
                      flex-col
                      justify-between

                      group
                    "
                  >
                    <div
                      className="
                        w-7
                        h-7

                        rounded-lg

                        bg-emerald-400/10

                        border
                        border-emerald-400/20

                        flex
                        items-center
                        justify-center

                        text-emerald-400

                        text-xs

                        mb-2

                        group-hover:bg-emerald-400
                        group-hover:text-black

                        group-hover:shadow-[0_0_15px_rgba(52,211,153,0.35)]

                        transition-all
                        duration-300
                      "
                    >
                      <Icon size={12} />
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-300 font-medium leading-tight mt-1 truncate">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}

            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-7 ${animationClass(
                'animate-slide-up'
              )}`}
            >
              <button
                onClick={() =>
                  scrollToSection('#projects')
                }
                className="
                  group

                  px-6
                  sm:px-8

                  py-3
                  sm:py-3.5

                  rounded-xl

                  font-semibold

                  text-sm
                  sm:text-base

                  text-black

                  bg-emerald-400

                  hover:bg-emerald-300

                  shadow-[0_0_20px_rgba(52,211,153,0.15)]

                  hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]

                  transition-all
                  duration-300

                  ease-out

                  hover:-translate-y-0.5
                  active:translate-y-0

                  min-h-[48px]

                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <span>View My Work</span>

                <HiArrowNarrowRight className="text-base group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() =>
                  scrollToSection('#contact')
                }
                className="
                  group

                  px-6
                  sm:px-8

                  py-3
                  sm:py-3.5

                  rounded-xl

                  font-semibold

                  text-sm
                  sm:text-base

                  text-emerald-400

                  bg-transparent

                  border
                  border-emerald-400/30

                  hover:border-emerald-400/60
                  hover:bg-emerald-400/10

                  shadow-[0_0_15px_rgba(52,211,153,0.03)]

                  hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]

                  transition-all
                  duration-300

                  ease-out

                  hover:-translate-y-0.5
                  active:translate-y-0

                  min-h-[48px]

                  flex
                  items-center
                  justify-center
                  gap-1.5
                "
              >
                <span>Get In Touch</span>

                <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Social Links */}

            <div
              className={`flex items-center gap-3 sm:gap-4 ${animationClass(
                'animate-slide-up'
              )}`}
            >
              {[
                {
                  href: personal.github,
                  icon: FaGithub,
                  label: 'GitHub',
                },
                {
                  href: personal.linkedin,
                  icon: FaLinkedin,
                  label: 'LinkedIn',
                },
                {
                  href: `mailto:${personal.email}`,
                  icon: FaEnvelope,
                  label: 'Email',
                },
              ].map(
                ({
                  href,
                  icon: Icon,
                  label,
                }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="
                      w-11
                      h-11

                      flex
                      items-center
                      justify-center

                      rounded-xl

                      text-lg

                      transition-all
                      duration-300

                      ease-out

                      hover:-translate-y-0.5

                      bg-white/[0.025]

                      border
                      border-emerald-400/20

                      text-gray-400

                      hover:bg-emerald-400/10

                      hover:border-emerald-400/50

                      hover:text-emerald-400

                      hover:shadow-[0_0_18px_rgba(52,211,153,0.12)]

                      min-w-[44px]
                      min-h-[44px]
                    "
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <figure className="relative select-none">

              {/* Soft Ambient Radial Glow */}

              <div
                className={`
                  absolute
                  -inset-6
                  sm:-inset-8

                  rounded-[2.5rem]

                  blur-3xl
                  opacity-30

                  bg-emerald-400/20

                  pointer-events-none

                  ${animationClass(
                  'animate-pulse'
                )}
                `}
              />

              {/* Layered Background Frame */}

              <div
                className="
                  absolute
                  inset-0

                  -rotate-[3.5deg]

                  bg-emerald-400/[0.04]

                  border
                  border-emerald-400/20

                  rounded-[2rem]

                  shadow-[0_0_30px_rgba(52,211,153,0.06)]

                  -z-10

                  transition-transform
                  duration-300

                  group-hover:-rotate-[4.5deg]
                "
              />

              {/* Floating Green Accent Block */}

              <div
                className="
                  absolute

                  -top-3.5
                  -left-3.5

                  sm:-top-4
                  sm:-left-4

                  w-9
                  h-9

                  sm:w-10
                  sm:h-10

                  rounded-xl

                  bg-emerald-400

                  text-black

                  shadow-[0_0_25px_rgba(52,211,153,0.35)]

                  rotate-12

                  flex
                  items-center
                  justify-center

                  z-20
                "
                aria-hidden="true"
              >
                <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Decorative Dotted Pattern */}

              <div
                className="
                  absolute

                  -top-6
                  -right-6

                  w-20
                  h-20

                  opacity-30

                  pointer-events-none

                  -z-10
                "
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(52,211,153,0.7) 1.5px, transparent 1.5px)',
                  backgroundSize:
                    '10px 10px',
                }}
              />

              {/* Main Profile Image Card */}

              <div
                className="
                  relative

                  rounded-[2rem]

                  overflow-hidden

                  shadow-2xl

                  max-w-full

                  rotate-[1.5deg]

                  border-4
                  sm:border-[6px]

                  border-[#050806]

                  ring-1
                  ring-emerald-400/30

                  bg-[#050806]
                "
                style={{
                  width:
                    'clamp(16rem, 32vw, 26.5rem)',

                  height:
                    'clamp(19rem, 38vw, 31rem)',

                  boxShadow:
                    '0 25px 50px -12px rgba(52, 211, 153, 0.18)',
                }}
              >
                {/* Loading skeleton */}

                {!imageLoaded && (
                  <div className="absolute inset-0 bg-[#0a100d] animate-pulse rounded-[2rem]" />
                )}

                <img
                  src={profileImage}
                  alt="SARAVANAN K - MERN Stack & Full Stack Developer"
                  className={`
                    w-full
                    h-full
                    object-cover

                    transition-opacity
                    duration-500

                    ${imageLoaded
                      ? 'opacity-100'
                      : 'opacity-0'
                    }
                  `}
                  onLoad={() =>
                    setImageLoaded(true)
                  }
                  loading="eager"
                />

                {/* Green Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/25
                    via-transparent
                    to-emerald-400/[0.03]

                    pointer-events-none
                  "
                />
              </div>

              {/* Floating Open To Work Badge */}

              <div
                className="
                  absolute

                  bottom-3
                  right-3

                  sm:bottom-4
                  sm:right-4

                  px-3.5
                  sm:px-4

                  py-1.5
                  sm:py-2

                  rounded-full

                  shadow-[0_0_25px_rgba(52,211,153,0.15)]

                  bg-[#050806]/95

                  backdrop-blur-xl

                  border
                  border-emerald-400/25

                  flex
                  items-center
                  gap-2

                  z-20
                "
              >
                <span
                  className={`w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] ${animationClass(
                    'animate-pulse'
                  )}`}
                />

                <span className="text-xs sm:text-sm font-bold whitespace-nowrap text-white tracking-tight">
                  Open to Work
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}

      <div
        className={`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 ${animationClass(
          'animate-bounce'
        )} hidden md:flex`}
      >
        <button
          onClick={() =>
            scrollToSection('#about')
          }
          className="
            w-9
            h-9

            flex
            items-center
            justify-center

            rounded-full

            text-emerald-400

            bg-black/60

            backdrop-blur-md

            border
            border-emerald-400/25

            shadow-[0_0_15px_rgba(52,211,153,0.08)]

            hover:bg-emerald-400/10

            hover:border-emerald-400/50

            transition-all
            duration-300

            ease-out

            hover:-translate-y-0.5
          "
          aria-label="Scroll to About section"
        >
          <HiArrowNarrowDown className="text-base" />
        </button>
      </div>
    </section>
  );
}
