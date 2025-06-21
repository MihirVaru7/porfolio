"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send me an email anytime",
    value: "shubham.kumkar@gmail.com",
    href: "mailto:shubham.kumkar@gmail.com",
    available: "24/7",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call for urgent projects",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    available: "9 AM - 8 PM IST",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Quick chat and updates",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    available: "9 AM - 10 PM IST",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in Mumbai, India",
    value: "Mumbai, Maharashtra",
    href: "https://maps.google.com/?q=Mumbai,India",
    available: "Available for remote work",
  },
];

const socialLinks = [
  {
    name: "Behance",
    url: "https://behance.net/shubham",
    color: "hover:text-blue-400",
  },
  {
    name: "ArtStation",
    url: "https://artstation.com/shubham",
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/shubham_vfx",
    color: "hover:text-pink-400",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@shubham_vfx",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shubham-kumkar",
    color: "hover:text-blue-600",
  },
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. Simple motion graphics take 3-7 days, while complex VFX projects can take 2-4 weeks. I always provide detailed timelines during consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with clients worldwide. I'm flexible with time zones and use various communication tools to ensure smooth collaboration regardless of location.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "I deliver in industry-standard formats including MP4, MOV, AVI for videos, and provide source files in After Effects, Cinema 4D, or Blender formats as needed.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, I include 2-3 rounds of revisions in my standard packages. Additional revisions can be accommodated based on project requirements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to bring your creative vision to life? Let's discuss your
            project and create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all group text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-cyan-400 font-semibold mb-2">
                    {method.value}
                  </p>
                  <div className="flex items-center justify-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{method.available}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            Start Your Project
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                  placeholder="Your Name"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  Your Name *
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                  placeholder="Your Email"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  Your Email *
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                  placeholder="Phone Number"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                  placeholder="Company Name"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  Company Name
                </label>
              </div>

              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                >
                  <option value="">Select Project Type</option>
                  <option value="vfx">VFX & Compositing</option>
                  <option value="motion-graphics">Motion Graphics</option>
                  <option value="3d-modeling">3D Modeling & Animation</option>
                  <option value="character-animation">
                    Character Animation
                  </option>
                  <option value="post-production">Post Production</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                >
                  <option value="">Select Budget Range</option>
                  <option value="5k-15k">₹5,000 - ₹15,000</option>
                  <option value="15k-30k">₹15,000 - ₹30,000</option>
                  <option value="30k-50k">₹30,000 - ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k+">₹1,00,000+</option>
                </select>
              </div>

              <div className="relative">
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-all"
                >
                  <option value="">Select Timeline</option>
                  <option value="urgent">ASAP (Rush Job)</option>
                  <option value="1-2weeks">1-2 Weeks</option>
                  <option value="2-4weeks">2-4 Weeks</option>
                  <option value="1-2months">1-2 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="referral"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer"
                  placeholder="How did you find me?"
                />
                <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                  How did you find me?
                </label>
              </div>
            </div>

            <div className="relative mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-all peer resize-none"
                placeholder="Project Details"
              />
              <label className="absolute left-4 -top-2.5 text-sm text-cyan-400 bg-gray-900 px-2 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-cyan-400">
                Tell me about your project *
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitted || isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-gray-400 text-sm text-center mt-4">
              I'll get back to you within 24 hours. For urgent projects, please
              call directly.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 text-cyan-400"
          >
            Connect With Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mb-8"
          >
            Follow my work and stay updated with the latest projects
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-full text-gray-300 ${social.color} hover:border-cyan-400/40 transition-all`}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
