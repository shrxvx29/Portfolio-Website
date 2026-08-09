import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJava,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/SaravananK_Resume.pdf";
    link.download = "SaravananK_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="w-full max-w-none"    >

      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-black
          px-3.5
          py-1.5
          text-white
          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
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
              bg-white/50
            "
          />

          <span className="relative h-1.5 w-1.5 rounded-full bg-white" />

        </span>

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
          "
        >
          About Me
        </span>
      </motion.div>


      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="
          max-w-[600px]
          text-4xl
          font-black
          leading-[1.02]
          tracking-[-0.045em]
          text-black
          sm:text-5xl
          lg:text-[3.65rem]
        "
      >
        Turning ideas into{" "}

        <span className="relative inline-block">

          real

          <span
            className="
              absolute
              bottom-0.5
              left-0
              -z-10
              h-2.5
              w-full
              bg-gray-200
              sm:h-3
            "
          />

        </span>

        <br />

        web applications.
      </motion.h2>


      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className="mt-6 max-w-[590px] space-y-3"
      >

        <p className="text-base leading-7 text-gray-600 sm:text-[17px]">
          I'm{" "}
          <span className="font-semibold text-black">
            Saravanan
          </span>
          , a full stack developer focused on building
          practical applications with clean interfaces and
          thoughtful user experiences.
        </p>

        <p className="text-sm leading-6 text-gray-500 sm:text-[15px]">
          My foundation is in frontend development with React
          and JavaScript. I'm expanding into backend development
          with Java, Spring Boot, REST APIs and databases.
        </p>

      </motion.div>


      {/* =====================================================
          DEVELOPMENT FOCUS
      ===================================================== */}

      <div className="mt-6 grid w-full max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2">

        {/* =================================================
            FRONTEND
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="
            group
            rounded-xl
            border
            border-black/[0.08]
            bg-gray-50
            p-4
            transition-all
            duration-300
            hover:border-black/15
            hover:bg-white
            hover:shadow-lg
          "
        >

          <div className="mb-3 flex items-center justify-between">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-black
                text-white
              "
            >
              <FaReact size={17} />
            </div>

            <FiCode
              size={16}
              className="
                text-gray-300
                transition-colors
                group-hover:text-black
              "
            />

          </div>

          <h3 className="text-sm font-bold text-black">
            Frontend Development
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-gray-500">
            React, JavaScript and Tailwind CSS for
            responsive and modern interfaces.
          </p>

        </motion.div>


        {/* =================================================
            BACKEND
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          className="
            group
            rounded-xl
            border
            border-black/[0.08]
            bg-gray-50
            p-4
            transition-all
            duration-300
            hover:border-black/15
            hover:bg-white
            hover:shadow-lg
          "
        >

          <div className="mb-3 flex items-center justify-between">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-black
                text-white
              "
            >
              <FaJava size={17} />
            </div>

            <FiLayers
              size={16}
              className="
                text-gray-300
                transition-colors
                group-hover:text-black
              "
            />

          </div>

          <h3 className="text-sm font-bold text-black">
            Backend & APIs
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-gray-500">
            Java, Spring Boot and REST APIs for
            backend application development.
          </p>

        </motion.div>

      </div>


      {/* =====================================================
          ACTION BUTTONS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        viewport={{ once: true }}
        className="mt-6 flex flex-wrap items-center gap-2.5"
      >

        {/* LET'S TALK */}

        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-black
            px-5
            py-3
            text-xs
            font-bold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:bg-gray-800
            hover:shadow-lg
            sm:text-sm
          "
        >
          Let's Talk

          <FiArrowUpRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

        </motion.a>


        {/* RESUME */}

        <motion.button
          onClick={handleDownload}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            border-black/10
            bg-white
            px-5
            py-3
            text-xs
            font-semibold
            text-black
            transition-all
            duration-300
            hover:border-black
            hover:bg-gray-50
            hover:shadow-md
            sm:text-sm
          "
        >
          <FiDownload size={15} />

          Download Resume

        </motion.button>

      </motion.div>


      {/* =====================================================
          SOCIAL LINKS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="mt-5 flex items-center gap-2.5"
      >

        <span
          className="
            mr-1
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-gray-400
          "
        >
          Connect
        </span>

        {socialLinks.map((social) => {

          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-black/10
                bg-white
                text-gray-600
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white
              "
            >
              <Icon size={16} />
            </motion.a>
          );

        })}

      </motion.div>

    </motion.div>
  );
};

export default Intro;