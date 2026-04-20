import React from 'react'
import { motion } from "framer-motion";
import { File } from '@boxicons/react';


const Intro = () => {

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/SaravananK_Resume.pdf";
  link.download = "Saravanan_CV.pdf";
  link.click();
};

  return (
    <div className="w-full md:w-1/2 space-y-5">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        About Me
      </h2>

      {/* PARAGRAPH 1 */}
      <p className="text-gray-600 leading-relaxed">
        I’m Saravanan, an aspiring full stack developer with a strong focus on frontend development.
        I build clean, structured, and scalable web applications instead of just basic interfaces.
      </p>

      {/* PARAGRAPH 2 */}
      <p className="text-gray-600 leading-relaxed">
        My work revolves around React and Tailwind CSS, creating responsive UI with smooth interactions.
        I focus on real-world projects to understand how applications actually work.
      </p>

      {/* PARAGRAPH 3 */}
      <p className="text-gray-600 leading-relaxed">
        Currently, I’m working towards mastering full stack development and building production-level
        applications that solve real problems.
      </p>

      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="mt-6 flex items-center justify-center md:justify-start gap-2 bg-black text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-800 transition mx-auto md:mx-0"
        onClick={handleDownload}
      >
        Download CV
        <File />
      </motion.button>

    </div>
  )
}

export default Intro