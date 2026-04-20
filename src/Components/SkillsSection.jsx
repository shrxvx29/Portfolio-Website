import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind-css-.png";
import react from "../assets/react.svg";
import sql from "../assets/mysql.png";
import figma from "../assets/figma.png";

const skills = [
  { name: "HTML", icon: html, level: 85 },
  { name: "CSS", icon: css, level: 80 },
  { name: "JavaScript", icon: js, level: 75 },
  { name: "Bootstrap", icon: bootstrap, level: 70 },
  { name: "Tailwind", icon: tailwind, level: 75 },
  { name: "React", icon: react, level: 70 },
  { name: "MySQL", icon: sql, level: 60 },
  { name: "Figma", icon: figma, level: 65 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SkillsSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-5">
      <h2 className="text-3xl font-bold text-center mb-10">
        Technical Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>

            {/* Skill Bar */}
            <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>

            <p className="text-right text-sm mt-1 font-medium">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;