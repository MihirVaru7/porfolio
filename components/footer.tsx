"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Heart } from "lucide-react"

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Video Editing & Post Production", href: "#" },
    { name: "VFX & Compositing", href: "#" },
    { name: "3D Modeling & Rendering", href: "#" },
    { name: "YouTube Content Creation", href: "#" },
    { name: "Brand Promotional Videos", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/shubham_kumkar_", external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/shubham-kumkar", external: true },
  ],
}

const contactInfo = [
  {
    icon: Mail,
    label: "shubhamkumkar2012@gmail.com",
    href: "mailto:shubhamkumkar2012@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 9833440489",
    href: "tel:+919833440489",
  },
  {
    icon: MapPin,
    label: "Mumbai, Maharashtra, India",
    href: "https://maps.google.com/?q=Mumbai,India",
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Shubham Bhushan Kumkar
              </h3>
              <p className="text-gray-300 leading-relaxed">
                19-year-old aspiring filmmaker specializing in video editing, VFX, and 3D design. Currently pursuing
                formal education in filmmaking.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-all group"
                  >
                    <Icon className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{info.label}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                >
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
            <div className="space-y-3">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="block text-gray-300 hover:text-cyan-400 transition-all"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            {/* <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-cyan-500/20 rounded-l-lg text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-r-lg text-white text-sm hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-cyan-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Shubham Bhushan Kumkar. All rights reserved.</p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>in India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
