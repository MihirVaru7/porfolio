"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Years Experience", value: 5, suffix: "" },
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  VFX Artist | Video Editor | 3D Generalist
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm Shubham Bhushan Kumkar, a 19-year-old aspiring filmmaker
                  currently pursuing formal education in filmmaking. With a
                  strong passion for visual storytelling and digital creativity,
                  I specialize in video editing, VFX, and 3D design.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Over the past few years, I have developed hands-on experience
                  with industry-standard software, including over 3 years of
                  expertise in Adobe Premiere Pro and Blender, 2+ years with
                  Adobe Photoshop, and 1 year with Adobe After Effects.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I've been doing YouTube for 4 years, starting with gameplay
                  edits for my own channel. Professionally, I've worked on VFX
                  for three commercial advertisements and edited numerous
                  promotional videos for various brands. I've also created
                  high-quality 3D renders for companies such as Natural Veneer,
                  Fabdecor, Ultimo, and Gravity Studios.
                </p>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                >
                  Download Resume
                </motion.button> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
