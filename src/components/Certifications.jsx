import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications = [] } = portfolioData;

  return (
    <section
      id="certifications"
      className="w-full py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-emerald-400">Certifications</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id || cert.title}
              className="bg-[#0b0b0b] p-8 rounded-2xl border border-white/10 shadow-xl shadow-black/20 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-3xl text-emerald-400">
                  <FaCertificate />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Issued:</span>

                  <span className="font-semibold text-emerald-400">
                    {cert.year || cert.date}
                  </span>
                </div>

                {cert.credentialId && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      Credential ID:
                    </span>

                    <span className="font-mono text-gray-300">
                      {cert.credentialId}
                    </span>
                  </div>
                )}
              </div>

              {/* Verification Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  Verify Credential
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}