"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Dynamically import components that use 3D
const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-cyan-400 text-xl">Loading...</div>
    </div>
  ),
});

const ParticleBackground = dynamic(
  () => import("@/components/particle-background"),
  {
    ssr: false,
    loading: () => null,
  },
);

// Import other components normally
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import WorkflowSection from "@/components/workflow-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
    >
      <ParticleBackground />

      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #0f172a 0%, #000000 100%)",
          y: backgroundY,
        }}
      />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <WorkflowSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
        <div className="relative z-20">
      <Footer />
      </div>
    </div>
  );
}
