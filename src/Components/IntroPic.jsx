import React from 'react'
import IntroImg from "../assets/SaravananK_Intro.jpeg"
import { motion } from "framer-motion"

const IntroPic = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        
        className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-xl border border-gray-200"
      >
        <img
          src={IntroImg}
          alt="Saravanan"
          className="w-full h-full object-cover"
        />
      </motion.div>

    </div>
  )
}

export default IntroPic