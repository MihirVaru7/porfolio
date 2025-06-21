"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shubhamkumkar2012@gmail.com",
    href: "mailto:shubhamkumkar2012@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98334 40489",
    href: "tel:+919833440489",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
    href: "https://maps.google.com/?q=Mumbai,India",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/shubham_kumkar_",
    color: "hover:text-pink-400",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@rajdeepvk8371",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shubham-kumkar",
    color: "hover:text-blue-600",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_iyqecrb",
        "template_fahrs0s",
        formRef.current,
        "j5QhF3iGj_k2xEirl",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSubmitted(true);
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section ref={ref} id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ x: 10 }}
                    className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-full text-gray-300 ${social.color} hover:border-cyan-400/40 transition-all`}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <motion.input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-black px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <motion.input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                    placeholder="Your Email"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-black px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                  placeholder="Subject"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-black px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  Subject
                </label>
              </div>

              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer resize-none"
                  placeholder="Your Message"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-black px-2 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
