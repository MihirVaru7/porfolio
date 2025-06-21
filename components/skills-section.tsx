"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Blender", level: 80, category: "Software" },
  { name: "Premiere Pro", level: 75, category: "Software" },
  { name: "After Effects", level: 45, category: "Software" },
  { name: "Photoshop", level: 60, category: "Software" },
  { name: "Nuke", level: 35, category: "Software" },
];

const tools = [
  "After Effects",
  "Premiere Pro",
  "Blender",
  "Photoshop",
  "Nuke",
  "OBS Studio",
  "Audacity",
];

function CircularProgress({
  skill,
  isInView,
}: {
  skill: (typeof skills)[0];
  isInView: boolean;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-700"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: isInView ? strokeDashoffset : circumference,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-cyan-400">{progress}%</span>
        <span className="text-xs text-gray-300 text-center">{skill.name}</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mastering the tools and techniques that bring creative visions to
            life
          </p>
        </motion.div>

        {/* Circular Progress Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center"
            >
              <CircularProgress skill={skill} isInView={isInView} />
              <span className="mt-2 text-sm text-cyan-400 font-semibold">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
