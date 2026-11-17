import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaCopy,
  FaCheck,
  FaDownload,
  FaBriefcase,
  FaCode,
  FaBolt,
} from "react-icons/fa";
import { HiSparkles, HiOutlineMail } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

import resumePdf from "../public/SaravananK_FullStack.pdf";

import {
  getRemainingCooldown,
  isExternalHttpUrl,
  rememberSubmission,
  sanitizeHref,
} from "../utils/security";

// Formspree Form Endpoint
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_ID;
const LAST_SUBMISSION_STORAGE_KEY = "portfolio-contact-last-submission";
const SUBMISSION_COOLDOWN_MS = 60_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  name: "",
  email: "",
  subject: "Job / Hiring Opportunity",
  message: "",
  website: "",
};

const TOPIC_PRESETS = [
  { label: "💼 Job / Hiring Offer", value: "Job / Hiring Opportunity" },
  { label: "🚀 Project Collaboration", value: "Project Collaboration" },
  { label: "⚡ Freelance / Contract", value: "Freelance / Contract Work" },
  { label: "☕ Tech Discussion", value: "General Tech Discussion" },
];

function normalizeFormData(formData) {
  return {
    name: formData.name.trim(),
    email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
    website: formData.website.trim(),
  };
}

function validateFormData(formData) {
  if (formData.name.length < 2 || formData.name.length > 80) {
    return "Please enter a name between 2 and 80 characters.";
  }

  if (!EMAIL_PATTERN.test(formData.email) || formData.email.length > 254) {
    return "Please enter a valid email address.";
  }

  if (formData.subject.length < 3 || formData.subject.length > 120) {
    return "Please enter a subject between 3 and 120 characters.";
  }

  if (formData.message.length < 10 || formData.message.length > 500) {
    return "Please keep your message between 10 and 500 characters.";
  }

  return null;
}

export default function Contact() {
  const { personal, social } = portfolioData;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError(null);
  };

  const handleSelectPreset = (presetValue) => {
    setFormData((prev) => ({
      ...prev,
      subject: presetValue,
    }));

    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedFormData = normalizeFormData(formData);
    const validationError = validateFormData(normalizedFormData);

    if (validationError) {
      setError(validationError);
      return;
    }

    const remainingCooldown = getRemainingCooldown(
      LAST_SUBMISSION_STORAGE_KEY,
      SUBMISSION_COOLDOWN_MS
    );

    if (remainingCooldown > 0) {
      setError(
        `Please wait ${Math.ceil(
          remainingCooldown / 1000
        )} seconds before sending another message.`
      );
      return;
    }

    if (normalizedFormData.website) {
      setSubmitted(true);
      setFormData(EMPTY_FORM);
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          cache: "no-store",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            name: normalizedFormData.name,
            _replyto: normalizedFormData.email,
            email: normalizedFormData.email,
            subject: normalizedFormData.subject,
            message: normalizedFormData.message,
          }),
        }
      );

      if (response.ok) {
        rememberSubmission(LAST_SUBMISSION_STORAGE_KEY);
        setSubmitted(true);
        setFormData(EMPTY_FORM);
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      setError(
        "Failed to send message. Please try again or email me directly at ksaravanan2922@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0b0b0b] border outline-none transition-all duration-200 text-white placeholder-gray-600 text-sm sm:text-base ${
      focusedField === fieldName
        ? "border-emerald-500 bg-[#101510] shadow-xs ring-3 ring-emerald-500/10"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section
      id="contact"
      className="w-full relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-[#050505] border-t border-white/10"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <HiSparkles className="text-emerald-400 text-xs sm:text-sm" />

            <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Recruiter & Client Hub
            </span>
          </div>

          <span className="font-script text-emerald-400 block text-2xl sm:text-3xl md:text-4xl mb-1">
            Let&apos;s build something together
          </span>

          <h2
            className="font-editorial font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Have a Role or Project in{" "}
            <span className="text-emerald-400">Mind?</span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-gray-300 leading-relaxed px-2 sm:px-0"
            style={{
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
            }}
          >
            I&apos;m actively interviewing for{" "}
            <strong className="text-gray-200">
              MERN Stack & Full Stack Developer
            </strong>{" "}
            roles. Whether you&apos;re a recruiter, hiring manager, or
            founder — I&apos;d love to connect.
          </p>
        </motion.div>

        {/* Main Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, x: -25 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Recruiter Hiring Card */}
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-emerald-500/20 bg-emerald-500/5 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>

                  <span className="text-white font-bold text-sm sm:text-base">
                    Open to Work / Actively Interviewing
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-sm text-gray-300 leading-relaxed">
                <div className="flex items-center gap-2 text-gray-200 font-medium">
                  <FaBriefcase className="text-emerald-400 shrink-0" />
                  <span>
                    Target Roles:{" "}
                    <strong className="text-gray-200">
                      MERN Stack / Full Stack Developer
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-400 shrink-0" />
                  <span>
                    Based in{" "}
                    <strong className="text-gray-200">
                      Chennai, India
                    </strong>{" "}
                    (Open to Remote / Relocation)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="text-emerald-400 shrink-0" />
                  <span>
                    Response Time:{" "}
                    <strong className="text-gray-200">
                      Within 24 Hours
                    </strong>
                  </span>
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-2">
                <a
                  href={resumePdf}
                  download="Saravanan_K_FullStack_Developer_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs sm:text-sm hover:bg-emerald-400 shadow-2xs hover:shadow-emerald-500/20 transition-all duration-200"
                >
                  <FaDownload className="text-xs" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#0b0b0b] hover:border-emerald-500/30 shadow-2xs transition-all duration-200 flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg shrink-0">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider block">
                      Direct Email
                    </span>

                    <a
                      href={`mailto:${personal.email}`}
                      className="text-white font-bold text-sm sm:text-base hover:text-emerald-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 text-gray-400 hover:text-emerald-400 transition-all text-xs font-semibold flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <FaCheck className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#0b0b0b] hover:border-emerald-500/30 shadow-2xs transition-all duration-200 flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 text-lg group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <div className="min-w-0">
                    <span className="text-xs text-gray-300 font-semibold uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>

                    <a
                      href={`tel:${personal.phone}`}
                      className="text-white font-bold text-sm sm:text-base hover:text-emerald-400 transition-colors truncate block"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personal.phone}`}
                  className="shrink-0 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 text-gray-300 hover:text-emerald-400 transition-all text-xs font-semibold"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Social Developer Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={sanitizeHref(social.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-[#0b0b0b] hover:border-emerald-500/30 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-emerald-500/10 text-gray-300 group-hover:text-emerald-400 flex items-center justify-center text-lg transition-colors shrink-0">
                  <FaGithub />
                </div>

                <div className="min-w-0">
                  <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors block">
                    GitHub
                  </span>

                  <span className="text-xs text-gray-300 truncate block">
                    @saravanank
                  </span>
                </div>
              </a>

              <a
                href={sanitizeHref(social.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-[#0b0b0b] hover:border-emerald-500/30 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-emerald-500/10 text-gray-300 group-hover:text-emerald-400 flex items-center justify-center text-lg transition-colors shrink-0">
                  <FaLinkedin />
                </div>

                <div className="min-w-0">
                  <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors block">
                    LinkedIn
                  </span>

                  <span className="text-xs text-gray-300 truncate block">
                    Saravanan K
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, x: 25 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#0b0b0b] border border-white/10 shadow-xl shadow-black/20 relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, scale: 0.95 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, scale: 0.95 }
                    }
                    className="py-12 sm:py-16 text-center space-y-4"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400 text-3xl sm:text-4xl shadow-sm">
                      <FaCheckCircle />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Message Delivered!
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out,{" "}
                      <strong className="text-gray-200">
                        {formData.name || "there"}
                      </strong>
                      . I have received your note and will get back to you
                      within 24 hours.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 text-gray-300 hover:text-emerald-400 font-semibold text-sm transition-all"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          Send a Direct Message
                        </h3>

                        <p className="text-sm text-gray-300 mt-1">
                          Have an opening or project query? Drop a message
                          right into my inbox.
                        </p>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-base shrink-0">
                        <HiOutlineMail className="text-lg" />
                      </div>
                    </div>

                    {/* Topic Preset Buttons */}
                    <div className="mb-6">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-300 block mb-2.5">
                        What is this regarding?
                      </label>

                      <div className="grid grid-cols-2 gap-2">
                        {TOPIC_PRESETS.map((preset) => (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() =>
                              handleSelectPreset(preset.value)
                            }
                            className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all duration-200 border truncate ${
                              formData.subject === preset.value
                                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-2xs font-semibold"
                                : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:bg-white/5"
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Error Feedback */}
                    {error && (
                      <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                        <span>⚠️</span>
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Form Fields */}
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-5"
                    >
                      <div className="sr-only" aria-hidden="true">
                        <label htmlFor="website">Website</label>

                        <input
                          id="website"
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                            Your Name / Company{" "}
                            <span className="text-emerald-400">*</span>
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="e.g. Alex "
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            autoComplete="name"
                            maxLength={80}
                            className={inputClasses("name")}
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-gray-300 block mb-1.5">
                            Email Address{" "}
                            <span className="text-emerald-400">*</span>
                          </label>

                          <input
                            type="email"
                            name="email"
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            autoComplete="email"
                            maxLength={254}
                            className={inputClasses("email")}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-semibold text-gray-300 block">
                            Your Message{" "}
                            <span className="text-emerald-400">*</span>
                          </label>

                          <span className="text-[11px] text-gray-600">
                            {formData.message.length}/500 chars
                          </span>
                        </div>

                        <textarea
                          rows="4"
                          name="message"
                          placeholder="Tell me about the role, tech stack, or project requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          required
                          maxLength={500}
                          className={`${inputClasses(
                            "message"
                          )} resize-none`}
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed min-h-[50px] sm:min-h-[54px] shadow-sm hover:shadow-md bg-emerald-500 hover:bg-emerald-400 text-black text-sm sm:text-base"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            <span>Dispatching Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FaPaperPlane className="text-xs sm:text-sm" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
