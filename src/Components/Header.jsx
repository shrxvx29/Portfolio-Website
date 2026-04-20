import React, { useState, useEffect } from "react";
import { Menu, Home, User, CodeAlt, Briefcase, Phone } from "@boxicons/react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", id: "Home" },
  { icon: User, label: "About", id: "About" },
  { icon: CodeAlt, label: "Skills", id: "Skills" },
  { icon: Briefcase, label: "Projects", id: "Projects" },
  { icon: Phone, label: "Contact", id: "Contact" }
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.id);
          }
        }
      });
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  }, [menu]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300
        ${scrolled ? "bg-white/90 py-3 shadow-md" : "bg-white/70 py-5"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-lg md:text-xl font-semibold">Saravanan</h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className={`flex items-center gap-2 relative group transition
                ${active === item.id ? "text-black" : "text-gray-500 hover:text-black"}`}
              >
                <item.icon size={18} />
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300
                  ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Menu size={28} onClick={() => setMenu(true)} className="cursor-pointer" />
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menu && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenu(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 w-full bg-black z-50 rounded-t-2xl p-6 md:hidden shadow-lg"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.id}`}
                    onClick={() => setMenu(false)}
                    className="flex flex-col items-center gap-2 text-white hover:text-gray-300 transition"
                  >
                    <item.icon size={24} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;