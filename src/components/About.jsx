import React from "react";
import AboutLeft from "./aboutComponents/AboutLeft";
import AboutRight from "./aboutComponents/AboutRight";

export default function About() {
  return (
    <section
      id="about"
      className="
        w-full
        relative
        bg-[#050505]
        py-20
        sm:py-24
        md:py-28
        lg:py-32
        overflow-hidden
        border-y
        border-emerald-500/10
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND GLOWS
      ========================================================= */}

      {/* Right Glow */}
      <div
        className="
          absolute
          top-1/4
          right-1/4
          w-[500px]
          h-[500px]
          rounded-full
          blur-[140px]
          opacity-25
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          bottom-10
          left-10
          w-96
          h-96
          rounded-full
          blur-[120px]
          opacity-20
          pointer-events-none
          hidden
          sm:block
        "
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
        }}
      />

      {/* =========================================================
          ARCHITECTURAL GRID
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-12
            xl:gap-16
            items-center
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <AboutLeft />

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <AboutRight />
        </div>
      </div>
    </section>
  );
}