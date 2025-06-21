"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Digital Dreams Studio",
    content:
      "Shubham's work exceeded our expectations. His attention to detail and creative vision brought our project to life in ways we never imagined possible.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Film Producer",
    company: "Cinematic Visions",
    content:
      "Working with Shubham was a game-changer for our production. His VFX work seamlessly integrated with our live-action footage, creating stunning visual narratives.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Brand Innovators",
    content:
      "The motion graphics Shubham created for our campaign were absolutely phenomenal. They perfectly captured our brand essence and drove incredible engagement.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Content Creator",
    company: "YouTube Channel",
    content:
      "Shubham transformed my content with his 3D animations and visual effects. The quality and creativity he brings to every project is unmatched.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section ref={ref} id="testimonials" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl text-gray-400 mb-8">
            Trusted by leading brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="w-32 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-bold">Natural Veneer</span>
            </div>
            <div className="w-32 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-bold">Fabdecor</span>
            </div>
            <div className="w-32 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-bold">Ultimo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
