import React from "react";
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Services() {
  const { services } = portfolioData;

  const icons = [
    <FaCode key="code" />,
    <FaServer key="server" />,
    <FaLaptopCode key="laptop" />,
  ];

  return (
    <section
      id="services"
      className="w-full py-24 border-t border-white/10 relative overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            SERVICES
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-4 text-white">
            What I Can Build
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Modern web solutions using the MERN Stack and
            latest frontend technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 bg-[#0b0b0b] border border-white/10 shadow-xl shadow-black/20 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-emerald-500/20 bg-gradient-to-br from-emerald-500 to-emerald-400 text-black group-hover:scale-105 transition-transform">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="leading-8 mb-6 text-gray-400">
                {service.description}
              </p>

              {/* Bottom */}
              <div className="flex items-center gap-2 font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Learn More</span>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div
          className="mt-20 rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden border border-emerald-500/20"
          style={{
            background:
              "linear-gradient(135deg, #07100c 0%, #0b1712 50%, #10251a 100%)",
          }}
        >
          {/* CTA glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Have a Project Idea?
            </h3>

            <p className="max-w-2xl mx-auto mb-8 text-gray-400">
              Let&apos;s work together to create a modern,
              scalable, and user-friendly web application.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-md bg-emerald-500 text-black hover:bg-emerald-400"
            >
              Contact Me
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}