import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Send } from "@boxicons/react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setSent(false);

        emailjs
            .send(
                "service_8f8aohf",
                "template_jpbuyp5",
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                "kiSLFzTeJ7sZRpueO"
            )

            .then(() => {
                return emailjs.send(
                    "service_8f8aohf",
                    "template_ap32cka",
                    {
                        from_name: form.name,
                        from_email: form.email,
                        message: form.message,
                    },
                    "kiSLFzTeJ7sZRpueO"
                );
            })

            .then(() => {
                setLoading(false);
                setSent(true);

                setForm({
                    name: "",
                    email: "",
                    message: "",
                });

                setTimeout(() => setSent(false), 3000);
            })

            .catch((err) => {
                console.log("ERROR:", err);
                setLoading(false);
                alert("Something went wrong. Try again.");
            });
    };
    const sendWhatsApp = () => {
        const phone = "919176806209";

        const message = `Hi Saravanan 👋

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    const sendMailDirect = () => {
  const subject = `Project Inquiry from ${form.name}`;

  const body = `Hi Saravanan,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

  const mailtoLink = `mailto:ksaravanan2922@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

    return (
        <section className="min-h-screen py-12 px-5 bg-gray-100">

            {/* HEADER */}
            <h2 className="text-3xl font-bold text-center mb-2">
                Get in touch
            </h2>
            <p className="text-center text-gray-500 mb-10">
                Contact Me
            </p>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                        Talk To Me
                    </h3>

                    <div className="flex flex-col gap-6">

                        {/* EMAIL */}
                        <div className="bg-white p-5 rounded-xl shadow text-center">
                            <FaEnvelope className="mx-auto text-xl mb-2" />
                            <h4 className="font-semibold">Email</h4>
                            <p className="text-gray-500 text-sm">
                                ksaravanan2922@email.com
                            </p>
                            <a
                                href="mailto:ksaravanan2922@gmail.com"
                                className="text-sm text-blue-500"
                                onClick={sendMailDirect}
                            >
                                Write me →
                            </a>
                        </div>

                        {/* WHATSAPP */}
                        <div className="bg-white p-5 rounded-xl shadow text-center">
                            <FaWhatsapp className="mx-auto text-xl mb-2" />
                            <h4 className="font-semibold">Whatsapp</h4>
                            <p className="text-gray-500 text-sm">
                                +91 91768 06209
                            </p>
                            <a
                                href="https://wa.me/919176806209"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-500"
                                onClick={{sendWhatsApp}}
                            >
                                Write me →
                            </a>
                        </div>

                        {/* LINKEDIN */}
                        <div className="bg-white p-5 rounded-xl shadow text-center">
                            <FaLinkedin className="mx-auto text-xl mb-2" />
                            <h4 className="font-semibold">LinkedIn</h4>
                            <p className="text-gray-500 text-sm">
                                saravanankhere
                            </p>
                            <a
                                href="https://www.linkedin.com/in/saravanankhere/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-blue-500"
                            >
                                Write me →
                            </a>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                        Write me your project
                    </h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* NAME */}
                        <div>
                            <label className="text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Insert your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-3 mt-1 outline-none focus:border-black"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="text-sm text-gray-600">Mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Insert your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-3 mt-1 outline-none focus:border-black"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <label className="text-sm text-gray-600">Project</label>
                            <textarea
                                name="message"
                                placeholder="Write your project"
                                rows="4"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg p-3 mt-1 outline-none focus:border-black"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-black text-white py-3 rounded-lg mt-2 hover:bg-gray-800 transition flex justify-center gap-2 disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <Send size={20} />
                        </button>

                        {/* PREMIUM SUCCESS MESSAGE */}
                        <AnimatePresence>
                            {sent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-4 bg-white border border-green-200 rounded-lg p-4 flex items-center gap-3 shadow-sm"
                                >
                                    <div className="text-green-500 text-xl">✔</div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Message sent successfully
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            I’ll get back to you soon.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactPage;