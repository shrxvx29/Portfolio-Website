import React from "react";
import Intro from "../Components/Intro";
import IntroPic from "../Components/IntroPic";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        min-h-[calc(100vh-82px)]
        overflow-hidden
        bg-white
        px-5
        pt-6
        pb-8
        sm:px-8
        sm:pt-8
        sm:pb-10
        lg:px-10
        lg:pt-7
        lg:pb-8
      "
    >
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =========================================
          SUBTLE BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[35%]
          top-[-120px]
          h-[400px]
          w-[600px]
          rounded-full
          bg-gray-100/60
          blur-[100px]
        "
      />

      {/* =========================================
          MAIN CONTENT

          Desktop:
          LEFT  ≈ 65%
          RIGHT ≈ 35%
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-120px)]
          w-full
          max-w-[1400px]
          flex-col
          justify-center
          gap-10
          lg:grid
          lg:grid-cols-[minmax(0,1fr)_480px]
          lg:items-center
          lg:gap-10
        "
      >

        {/* =======================================
            LEFT — ABOUT CONTENT
        ======================================= */}

        <div className="min-w-0">
          <Intro />
        </div>


        {/* =======================================
            RIGHT — DEVELOPER CARD
        ======================================= */}

        <div className="flex w-full justify-center lg:justify-end">
          <IntroPic />
        </div>

      </div>
    </section>
  );
};

export default About;