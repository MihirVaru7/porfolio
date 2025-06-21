"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Palette, Cog, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const workflowSteps = [
  {
    icon: Lightbulb,
    title: "Concept & Ideation",
    description:
      "Understanding client vision and developing creative concepts through brainstorming and research",
    details: [
      "Client consultation",
      "Mood boarding",
      "Style exploration",
      "Concept refinement",
    ],
  },
  {
    icon: Palette,
    title: "Design & Planning",
    description:
      "Creating detailed storyboards, style frames, and technical specifications for the project",
    details: [
      "Storyboarding",
      "Style frames",
      "Technical planning",
      "Asset preparation",
    ],
  },
  {
    icon: Cog,
    title: "Production & Creation",
    description:
      "Bringing concepts to life through modeling, animation, compositing, and visual effects",
    details: ["3D modeling", "Animation", "VFX creation", "Compositing"],
  },
  {
    icon: Rocket,
    title: "Finalization & Delivery",
    description:
      "Final touches, client feedback integration, and delivery of polished final products",
    details: [
      "Color grading",
      "Final compositing",
      "Client revisions",
      "Final delivery",
    ],
  },
];

export default function WorkflowSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="workflow" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Creative Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A systematic approach to transforming ideas into stunning visual
            experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 hidden lg:block" />

          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className={`relative flex items-center mb-16 lg:mb-24 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black z-10 hidden lg:block" />

                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-4">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-sm text-cyan-400 font-semibold">
                          Step {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 * index + 0.1 * detailIndex,
                          }}
                          className="flex items-center text-gray-400"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Mobile timeline indicator */}
                <div className="lg:hidden absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500" />
                <div className="lg:hidden absolute left-0 top-8 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform -translate-x-2.5" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
          >
            Start Your Project
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
