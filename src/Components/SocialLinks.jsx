import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/saravanankhere/",
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/shrxvx?igsh=MTE4MXBpOWZkZDl4Zw==",
    color: "hover:text-pink-500",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/shrxvx29",
    color: "hover:text-gray-900",
  },
];

function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ staggerChildren: 0.15 }}
      className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5"
    >
      {socialLinks.map((item, i) => (
        <motion.a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          title={item.name}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 flex items-center justify-center rounded-full border-none text-black transition duration-300 ${item.color}`}
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg" />
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SocialLinks;