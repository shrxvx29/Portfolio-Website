
import React from "react";
import { portfolioData } from "../data/portfolioData";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="w-full py-24 border-t border-gray-200"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span
            className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider bg-indigo-50 border border-indigo-100 text-indigo-700"
          >
            EXPERIENCE
          </span>

          <h2
            className="text-5xl md:text-6xl font-bold mt-6 mb-4 text-gray-900"
          >
            Professional Journey
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            My journey in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 top-0 w-1 h-full hidden md:block bg-gradient-to-b from-indigo-300 via-indigo-200 to-transparent"
          />

          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-16 mb-12"
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center shadow-sm shadow-indigo-600/30 bg-gradient-to-br from-indigo-600 to-indigo-500"
              >
                <FaBriefcase
                  className="text-lg text-white"
                />
              </div>

              {/* Experience Card */}
              <div
                className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 shadow-sm hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                  <div>
                    <h3
                      className="text-2xl font-bold text-gray-900"
                    >
                      {exp.position}
                    </h3>

                    <p
                      className="font-medium mt-1 text-indigo-600"
                    >
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className="mt-3 md:mt-0 px-4 py-2 rounded-full text-sm font-semibold bg-indigo-50 border border-indigo-100 text-indigo-700"
                  >
                    {exp.duration}
                  </span>
                </div>

                <p
                  className="leading-8 mb-6 text-gray-600"
                >
                  {exp.description}
                </p>

                {exp.achievements &&
                  exp.achievements.length > 0 && (
                    <div className="space-y-4">
                      {exp.achievements.map(
                        (achievement, idx) => (
                          <div
                            key={idx}
                            className="flex gap-3"
                          >
                            <FaCheckCircle
                              className="mt-1 text-indigo-600"
                            />

                            <p
                              className="text-gray-600"
                            >
                              {achievement}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

