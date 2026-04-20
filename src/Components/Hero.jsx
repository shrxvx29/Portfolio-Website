import React from "react";
import { Send } from "@boxicons/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

import profileImg from "../assets/SaravananK_Img.jpeg";

const Hero = () => {

  const socialLinks = [
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/saravanankhere/",
      color: "hover:text-blue-600",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/shrxvx",
      color: "hover:text-pink-500",
    },
    {
      icon: faGithub,
      url: "https://github.com/shrxvx29",
      color: "hover:text-gray-900",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-evenly px-6 md:px-20 bg-white gap-10">

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="order-1 md:order-2"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-[30px] mt-8 overflow-hidden shadow-xl border border-gray-200"
        >
          <img
            src={profileImg}
            alt="Saravanan"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl order-2 md:order-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Saravanan
        </h1>

        <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
          <span className="w-10 h-0.5 bg-gray-400 hidden md:block"></span>

          <TypeAnimation
            sequence={[
              "Junior Frontend Developer",
              2800,
              "Aspiring Full Stack Developer",
              2800,
            ]}
            speed={30}
            repeat={Infinity}
            className="text-gray-600 text-sm sm:text-lg md:text-xl"
          />
        </div>

        <p className="mt-4 text-gray-500 leading-relaxed">
          I design and build responsive web apps with clean UI and smooth interactions.
          Currently focused on mastering full stack development and real-world projects.
        </p>

        <a href="#Contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex items-center justify-center md:justify-start gap-2 bg-black text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-800 transition mx-auto md:mx-0"
          >
            Say Hello
            <Send size={20} />
          </motion.button>
        </a>

        {/* MOBILE SOCIAL LINKS */}
        <div className="flex md:hidden items-center justify-center gap-5 mt-6">
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 ${item.color}`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;