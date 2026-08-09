import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";

const FooterPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-black px-5 pb-6 pt-14 text-white sm:px-8 sm:pt-20 lg:px-12">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute left-1/2 top-[-200px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================
            CTA
        ========================= */}

        <div className="relative overflow-hidden rounded-3xl bg-white p-7 text-black sm:p-10 lg:p-12">

          {/* Decorative Circle */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gray-100" />

          <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Have a project in mind?
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to build something?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Let's collaborate and turn your idea into a
                practical digital experience.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
            >
              Get in Touch

              <FiArrowUpRight
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
              />
            </a>
          </div>
        </div>

        {/* =========================
            FOOTER CONTENT
        ========================= */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* =========================
              BRAND
          ========================= */}

          <div className="lg:col-span-1">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
                SK
              </span>

              <div>
                <p className="text-lg font-extrabold tracking-wider">
                  SARAVANAN
                </p>

                <p className="text-[10px] font-semibold tracking-[0.3em] text-gray-500">
                  DEVELOPER
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
              Aspiring Full Stack Developer building modern
              web applications and learning through real-world
              projects.
            </p>

            {/* Socials */}

            <div className="mt-6 flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:bg-white hover:text-black"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saravanankhere/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:bg-white hover:text-black"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ksaravanan2922@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:bg-white hover:text-black"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================= */}

          <div>

            <h3 className="mb-5 text-sm font-bold">
              Quick Links
            </h3>

            <div className="space-y-3">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Academics", "#academics"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="block text-sm text-gray-500 transition-colors hover:text-white"
                >
                  {name}
                </a>
              ))}

            </div>
          </div>

          {/* =========================
              CONTACT
          ========================= */}

          <div>

            <h3 className="mb-5 text-sm font-bold">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:ksaravanan2922@gmail.com"
                className="flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-white"
              >
                <FaEnvelope className="mt-1 shrink-0" />

                <span>
                  ksaravanan2922@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/919176806209"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-white"
              >
                <span className="mt-0.5">
                  WhatsApp
                </span>

                <span>
                  +91 91768 06209
                </span>
              </a>

              <p className="text-sm text-gray-500">
                Chennai, Tamil Nadu, India
              </p>

            </div>
          </div>

          {/* =========================
              AVAILABILITY
          ========================= */}

          <div>

            <h3 className="mb-5 text-sm font-bold">
              Availability
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />

                <span className="text-sm font-bold">
                  Open to Work
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-gray-500">
                Currently open to internships, junior developer
                roles and full-stack opportunities.
              </p>

            </div>

            <p className="mt-4 text-xs text-gray-600">
              Response time:{" "}
              <span className="text-gray-300">
                Within 24 hours
              </span>
            </p>
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="border-t border-white/10 py-6">

          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

            <p className="text-xs text-gray-600">
              © 2026 Saravanan K. All rights reserved.Crafted with 🤍 and lots of coffee
            </p>

            <div className="flex items-center gap-5">

              <span className="text-xs text-gray-600">
                Built with
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-gray-400">
                React + Tailwind CSS
              </span>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all hover:bg-white hover:text-black"
              >
                <FiArrowUp />
              </button>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterPage;
