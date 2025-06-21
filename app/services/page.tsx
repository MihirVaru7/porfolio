"use client";

import { motion } from "framer-motion";
import {
  Film,
  Palette,
  Box,
  Zap,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: "video-editing",
    icon: Film,
    title: "Video Editing & Post Production",
    description:
      "Professional video editing and post-production services to enhance your footage.",
    features: [
      "Cutting & Assembly",
      "Color Correction & Grading",
      "Audio Mixing & Mastering",
      "Motion Graphics Integration",
      "Visual Effects",
      "Titles & Transitions",
    ],
    pricing: "Starting from ₹5,000",
    deliveryTime: "2-5 days",
  },
  {
    id: "vfx",
    icon: Palette,
    title: "VFX & Compositing",
    description:
      "High-quality visual effects and compositing to bring your imagination to life.",
    features: [
      "Green Screen Removal",
      "Rotoscoping",
      "Tracking & Stabilization",
      "Compositing Elements",
      "Creating Visual Effects",
      "Clean Up",
    ],
    pricing: "Starting from ₹7,000",
    deliveryTime: "3-7 days",
  },
  {
    id: "3d-modeling",
    icon: Box,
    title: "3D Modeling & Rendering",
    description:
      "Realistic 3D models and renderings for product visualization and animation.",
    features: [
      "3D Modeling",
      "Texturing",
      "Lighting",
      "Rendering",
      "Product Visualization",
      "Architectural Visualization",
    ],
    pricing: "Starting from ₹6,000",
    deliveryTime: "5-10 days",
  },
  {
    id: "youtube-content",
    icon: Zap,
    title: "YouTube Content Creation",
    description:
      "Engaging YouTube content creation services to grow your channel.",
    features: [
      "Concept Development",
      "Script Writing",
      "Filming",
      "Video Editing",
      "Thumbnail Design",
      "SEO Optimization",
    ],
    pricing: "Starting from ₹4,000",
    deliveryTime: "2-5 days",
  },
  {
    id: "brand-videos",
    icon: Clock,
    title: "Brand Promotional Videos",
    description:
      "Compelling brand promotional videos to showcase your products or services.",
    features: [
      "Script Writing",
      "Filming",
      "Video Editing",
      "Motion Graphics",
      "Music & Sound Effects",
      "Call to Action",
    ],
    pricing: "Starting from ₹5,000",
    deliveryTime: "3-7 days",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your project requirements, timeline, and creative vision",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Detailed project planning with storyboards, style frames, and technical specifications",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Creating your visual content with regular updates and client feedback integration",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Final delivery with revisions, source files, and ongoing support",
  },
];

export default function ServicesPage() {
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
            My Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional VFX, motion graphics, and 3D services to bring your
            creative vision to life
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-4">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.05 * featureIndex,
                        }}
                        className="flex items-center text-gray-300"
                      >
                        <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-cyan-500/20">
                    <div>
                      <p className="text-cyan-400 font-semibold">
                        {service.pricing}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Delivery: {service.deliveryTime}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            My Process
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's discuss your vision and create something amazing together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
            >
              Get Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
