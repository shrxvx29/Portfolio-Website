import React from "react";
import { projects } from "../utils/Project";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectList = () => {
  return (
    <section className="min-h-screen py-10 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >

            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div
                className="
                  absolute inset-0 bg-black/50 
                  opacity-100 md:opacity-0 
                  md:group-hover:opacity-100 
                  flex items-center justify-center gap-6 
                  transition
                "
              >
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink />
                  </a>
                )}

                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {project.description}
              </p>
            </div>

          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default ProjectList;