import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const lastScrollY = useRef(0);

  // =========================================================
  // NAVIGATION ITEMS
  // =========================================================

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  // =========================================================
  // SCROLL DETECTION
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Navbar background state
      setScrolled(currentY > 20);

      // Scroll progress
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScrollProgress(
        docHeight > 0
          ? (currentY / docHeight) * 100
          : 0
      );

      // =====================================================
      // AUTO HIDE / SHOW NAVBAR
      // =====================================================

      if (isOpen) {
        setIsVisible(true);
      } else if (currentY <= 40) {
        setIsVisible(true);
      } else if (
        currentY > lastScrollY.current + 8 &&
        currentY > 80
      ) {
        setIsVisible(false);
      } else if (
        currentY < lastScrollY.current - 8
      ) {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;

      // =====================================================
      // ACTIVE SECTION
      // =====================================================

      const sections = navItems.map((item) =>
        item.href.slice(1)
      );

      for (
        let i = sections.length - 1;
        i >= 0;
        i--
      ) {
        const element =
          document.getElementById(sections[i]);

        if (
          element &&
          element.getBoundingClientRect().top <= 160
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [isOpen]);

  // =========================================================
  // LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // =========================================================
  // NAVIGATION HANDLER
  // =========================================================

  const handleNavClick = useCallback((href) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  // =========================================================
  // MOBILE MENU
  // =========================================================

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}

      <div
        className="
          fixed
          top-0
          left-0
          z-[70]

          h-[2px]

          bg-emerald-400

          shadow-[0_0_12px_rgba(52,211,153,0.9)]

          transition-all
          duration-150
          ease-out
        "
        style={{
          width: `${scrollProgress}%`,
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0

          z-50

          px-3.5
          sm:px-6
          md:px-8
          lg:px-12

          pointer-events-none

          transition-all
          duration-500
          ease-in-out

          ${isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }

          ${scrolled
            ? "pt-2.5 sm:pt-3"
            : "pt-3.5 sm:pt-4 md:pt-5"
          }
        `}
      >

        {/* ===================================================
            NAVBAR CONTAINER
        =================================================== */}

        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`
            pointer-events-auto

            mx-auto
            max-w-6xl
            w-full

            min-h-[64px]
            sm:min-h-[68px]
            md:min-h-[70px]

            rounded-2xl

            px-4
            sm:px-6
            md:px-8

            py-2.5
            sm:py-3

            flex
            items-center
            justify-between

            border

            transition-all
            duration-500

            ${scrolled
              ? `
                  bg-black/90
                  backdrop-blur-2xl

                  border-emerald-400/25

                  shadow-[0_10px_45px_rgba(0,0,0,0.65)]
                `
              : `
                  bg-[#030504]/85
                  backdrop-blur-xl

                  border-emerald-400/15

                  shadow-[0_8px_35px_rgba(0,0,0,0.45)]
                `
            }
          `}
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="
              flex
              items-center
              gap-3

              shrink-0
              group
              py-1
            "
            aria-label="Saravanan - Portfolio Home"
          >

            {/* Logo Mark */}

            <div
              className="
                relative

                w-10
                h-10

                rounded-xl

                flex
                items-center
                justify-center

                bg-emerald-400

                text-black

                font-black
                text-sm
                sm:text-base

                tracking-tight

                shadow-[0_0_20px_rgba(52,211,153,0.22)]

                transition-all
                duration-300

                group-hover:-rotate-6
                group-hover:scale-105

                group-hover:shadow-[0_0_30px_rgba(52,211,153,0.45)]
              "
            >
              SK
            </div>

            {/* Brand Name */}

            <div
              className="
                flex
                items-center

                tracking-tight
              "
            >
              <span
                className="
                  font-bold
                  text-white

                  text-base
                  sm:text-lg
                "
              >
                Saravanan
              </span>

              <span
                className="
                  font-bold
                  text-emerald-400

                  text-base
                  sm:text-lg

                  ml-1
                "
              >
                K
              </span>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden
              md:flex

              items-center

              gap-1.5
              lg:gap-2
            "
          >
            {navItems.map((item) => {
              const isActive =
                activeSection ===
                item.href.slice(1);

              return (
                <button
                  key={item.label}
                  onClick={() =>
                    handleNavClick(item.href)
                  }
                  className={`
                    relative

                    px-3.5
                    py-2

                    min-h-[40px]

                    rounded-xl

                    text-sm
                    font-medium

                    flex
                    items-center
                    gap-1.5

                    transition-all
                    duration-300
                    ease-out

                    ${isActive
                      ? `
                          text-emerald-300

                          bg-emerald-400/10

                          border
                          border-emerald-400/20

                          shadow-[0_0_18px_rgba(52,211,153,0.08)]
                        `
                      : `
                          text-gray-400

                          border
                          border-transparent

                          hover:text-white

                          hover:bg-emerald-400/5

                          hover:border-emerald-400/10
                        `
                    }
                  `}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >

                  {/* Active Indicator */}

                  {isActive && (
                    <span
                      className="
                        w-1.5
                        h-1.5

                        rounded-full

                        bg-emerald-400

                        shrink-0

                        shadow-[0_0_9px_rgba(52,211,153,0.95)]
                      "
                    />
                  )}

                  <span>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              LET'S TALK BUTTON
          ================================================= */}

          <div
            className="
              hidden
              md:flex

              items-center
              shrink-0
            "
          >
            <button
              onClick={() =>
                handleNavClick("#contact")
              }
              className="
                group

                inline-flex
                items-center
                gap-2

                px-5
                py-2.5

                min-h-[44px]

                rounded-xl

                font-semibold
                text-sm

                text-black

                bg-emerald-400

                border
                border-emerald-300/50

                shadow-[0_0_22px_rgba(52,211,153,0.18)]

                transition-all
                duration-300

                hover:bg-emerald-300

                hover:-translate-y-0.5

                hover:shadow-[0_0_32px_rgba(52,211,153,0.4)]

                active:translate-y-0
                active:scale-95
              "
            >
              <span>
                Let's Talk
              </span>

              <FaArrowRight
                className="
                  text-xs

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="
              md:hidden

              flex
              items-center
              justify-center

              w-11
              h-11

              rounded-xl

              text-emerald-400

              bg-emerald-400/5

              border
              border-emerald-400/20

              transition-all
              duration-300

              hover:bg-emerald-400/10

              hover:border-emerald-400/40

              hover:shadow-[0_0_18px_rgba(52,211,153,0.15)]

              active:scale-95

              shrink-0
            "
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* ===================================================
            MOBILE NAVIGATION
        =================================================== */}

        <div
          id="mobile-menu"
          className={`
            pointer-events-auto

            md:hidden

            mx-auto
            max-w-6xl

            mt-2

            rounded-2xl

            overflow-hidden

            bg-[#030504]/95

            backdrop-blur-2xl

            border
            border-emerald-400/20

            shadow-[0_20px_60px_rgba(0,0,0,0.75)]

            transition-all
            duration-300
            ease-out

            ${isOpen
              ? `
                  opacity-100
                  translate-y-0
                  pointer-events-auto
                `
              : `
                  opacity-0
                  -translate-y-3
                  pointer-events-none
                `
            }
          `}
          style={{
            maxHeight:
              "calc(100vh - 6rem)",
            overflowY: "auto",
          }}
          aria-hidden={!isOpen}
        >
          <div
            className="
              flex
              flex-col

              gap-1.5

              p-3.5
              sm:p-4
            "
          >

            {/* Mobile Navigation Items */}

            {navItems.map((item) => {
              const isActive =
                activeSection ===
                item.href.slice(1);

              return (
                <button
                  key={item.label}
                  onClick={() =>
                    handleNavClick(item.href)
                  }
                  className={`
                    w-full

                    text-left

                    min-h-[48px]

                    py-3
                    px-4

                    rounded-xl

                    font-medium

                    transition-all
                    duration-300

                    flex
                    items-center
                    justify-between

                    ${isActive
                      ? `
                          bg-emerald-400/10

                          text-emerald-300

                          border
                          border-emerald-400/20
                        `
                      : `
                          text-gray-300

                          border
                          border-transparent

                          hover:bg-emerald-400/5

                          hover:text-emerald-300

                          hover:border-emerald-400/10
                        `
                    }
                  `}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  <span>
                    {item.label}
                  </span>

                  {isActive && (
                    <span
                      className="
                        w-2
                        h-2

                        rounded-full

                        bg-emerald-400

                        shadow-[0_0_10px_rgba(52,211,153,0.95)]
                      "
                    />
                  )}
                </button>
              );
            })}

            {/* Mobile CTA */}

            <div
              className="
                pt-2.5
                mt-1

                border-t
                border-emerald-400/10
              "
            >
              <button
                onClick={() =>
                  handleNavClick("#contact")
                }
                className="
                  w-full

                  min-h-[48px]

                  py-3.5

                  rounded-xl

                  font-semibold

                  text-sm
                  sm:text-base

                  text-black

                  bg-emerald-400

                  shadow-[0_0_22px_rgba(52,211,153,0.18)]

                  hover:bg-emerald-300

                  transition-all
                  duration-300

                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <span>
                  Let's Talk
                </span>

                <FaArrowRight
                  className="text-xs"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE BACKDROP
        =================================================== */}

        <div
          className={`
            md:hidden

            fixed
            inset-0

            bg-black/75

            backdrop-blur-sm

            transition-opacity
            duration-300

            ${isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }
          `}
          style={{
            zIndex: -1,
          }}
          onClick={() =>
            setIsOpen(false)
          }
          aria-hidden="true"
        />
      </header>
    </>
  );
}