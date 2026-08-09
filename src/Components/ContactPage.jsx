import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const successTimer = useRef(null);

  useEffect(() => () => clearTimeout(successTimer.current), []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError(false);

    try {
      await emailjs.send(
        "service_8f8aohf",
        "template_jpbuyp5",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "kiSLFzTeJ7sZRpueO"
      );

      await emailjs.send(
        "service_8f8aohf",
        "template_ap32cka",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "kiSLFzTeJ7sZRpueO"
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSent(true);

      successTimer.current = setTimeout(() => {
        setSent(false);
      }, 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
      DIRECT EMAIL
  ========================= */

  const sendMailDirect = () => {
    const subject = form.subject || `Project Inquiry from ${form.name}`;

    const body = `Hi Saravanan,

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`;

    const mailtoLink = `mailto:ksaravanan2922@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  /* =========================
      WHATSAPP
  ========================= */

  const sendWhatsApp = () => {
    const phone = "919176806209";

    const message = `Hi Saravanan 👋

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-12 text-black sm:px-8 sm:py-16 lg:px-12"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute left-[-200px] top-[250px] h-[400px] w-[400px] rounded-full bg-black/[0.025] blur-[130px]" />

        <div className="absolute right-[-200px] bottom-[100px] h-[450px] w-[450px] rounded-full bg-black/[0.025] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/[0.03] px-5 py-2 text-sm font-semibold tracking-[0.15em]">
            <span>✦</span>
            CONTACT
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's{" "}
            <span className="relative inline-block">
              Connect

              <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-black" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Have a project in mind? I'd love to hear about it.
            Let's build something useful together.
          </p>
        </motion.div>

        {/* =========================
            CONTACT GRID
        ========================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >

            <h3 className="mb-5 text-xl font-bold">
              Get in Touch
            </h3>

            {/* EMAIL */}

            <button
              onClick={sendMailDirect}
              className="group flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                  <FaEnvelope size={18} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    ksaravanan2922@gmail.com
                  </p>
                </div>
              </div>

              <FiArrowUpRight
                className="text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                size={20}
              />
            </button>

            {/* WHATSAPP */}

            <button
              onClick={sendWhatsApp}
              className="group flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                  <FaWhatsapp size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    +91 91768 06209
                  </p>
                </div>
              </div>

              <FiArrowUpRight
                className="text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                size={20}
              />
            </button>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/saravanankhere/"
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                  <FaLinkedin size={18} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    saravanankhere
                  </p>
                </div>
              </div>

              <FiArrowUpRight
                className="text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                size={20}
              />
            </a>

            {/* LOCATION */}

            <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                <FiMapPin size={19} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* =========================
                AVAILABILITY
            ========================= */}

            <div className="rounded-2xl border border-black bg-black p-6 text-white">

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />

                <span className="text-sm font-bold">
                  Available for Opportunities
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Currently open to internships, junior developer
                roles and opportunities where I can grow as a
                full-stack developer.
              </p>
            </div>
          </motion.div>

          {/* =========================
              RIGHT FORM
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
          >

            <div className="mb-8">

              <h3 className="text-2xl font-extrabold">
                Send a Message
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form below and I'll get back to you
                as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                  />
                </div>
              </div>

              {/* SUBJECT */}

              <div>
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  maxLength={500}
                  required
                  className="w-full resize-none rounded-xl border border-black/10 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/5"
                />

                <p className="mt-2 text-right text-xs text-gray-400">
                  {form.message.length}/500
                </p>
              </div>

              {/* SEND */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-black py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <FiSend
                      className="transition-transform group-hover:translate-x-1"
                      size={17}
                    />
                  </>
                )}
              </button>

              {/* =========================
                  SUCCESS
              ========================= */}

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-black/10 bg-gray-50 p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                      <FiCheck size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Message sent successfully
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        I'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =========================
                  ERROR
              ========================= */}

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-black/10 bg-gray-50 p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                      <FiAlertCircle size={17} />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Something went wrong
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Please try again or contact me directly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
