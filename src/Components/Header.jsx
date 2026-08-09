import React, { useEffect, useState } from "react";
import {
  Menu,
  Home,
  User,
  CodeAlt,
  Briefcase,
  Phone,
  BookOpen,
} from "@boxicons/react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    icon: Home,
    label: "Home",
    id: "home",
  },
  {
    icon: User,
    label: "About",
    id: "about",
  },
  {
    icon: CodeAlt,
    label: "Skills",
    id: "skills",
  },
  {
    icon: Briefcase,
    label: "Projects",
    id: "projects",
  },
  {
    icon: BookOpen,
    label: "Career",
    id: "career",
  },
  {
    icon: Phone,
    label: "Contact",
    id: "contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* ==================================================
     SCROLL + ACTIVE SECTION
  ================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const currentSection = navItems.find((item) => {
        const section = document.getElementById(item.id);

        if (!section) return false;

        const { top, bottom } = section.getBoundingClientRect();

        return top <= 140 && bottom > 140;
      });

      if (currentSection) {
        setActive(currentSection.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==================================================
     MOBILE MENU LOCK
  ================================================== */

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        closeOnEscape
      );
    };
  }, [menuOpen]);

  return (
    <>
      {/* ==================================================
          HEADER
      ================================================== */}

      <motion.header
        initial={{
          opacity: 0,
          y: -24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-black/10 bg-white/90 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-transparent bg-white/70 py-5 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ==================================================
              LOGO
          ================================================== */}

          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Saravanan — home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-black text-xs font-black tracking-wide text-white transition-transform duration-300 group-hover:-rotate-6">
              SK
            </span>

            <span className="text-base font-bold tracking-tight sm:text-lg">
              Saravanan
            </span>
          </a>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center rounded-full border border-black/10 bg-white/80 p-1.5 shadow-sm lg:flex"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-500 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  <Icon size={16} />

                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ==================================================
              CONTACT BUTTON
          ================================================== */}

          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-[0_10px_22px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-95 lg:inline-flex"
          >
            <Phone
              size={17}
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />

            Let's talk
          </a>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((isOpen) => !isOpen)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-black shadow-sm transition hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">
                ×
              </span>
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </motion.header>

      {/* ==================================================
          MOBILE NAVIGATION
      ================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu */}

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="fixed inset-x-5 top-[76px] z-50 rounded-3xl border border-black/10 bg-white p-3 shadow-2xl sm:inset-x-8 lg:hidden"
            >
              <div className="grid grid-cols-2 gap-2">

                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    active === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-sm font-bold transition ${
                        isActive
                          ? "bg-black text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={19} />

                      {item.label}
                    </a>
                  );
                })}

              </div>

              {/* Mobile CTA */}

              <a
                href="#contact"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="mt-3 flex items-center justify-center rounded-2xl bg-black px-4 py-3.5 text-sm font-bold text-white"
              >
                Start a conversation
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;