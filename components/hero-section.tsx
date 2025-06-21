"use client";

import { useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import ParticleBackground from "@/components/particle-background";

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-br from-cyan-900/20 to-purple-900/20" />
    ),
  },
);

const OrbitControls = dynamic(
  () =>
    import("@react-three/drei").then((mod) => ({ default: mod.OrbitControls })),
  {
    ssr: false,
  },
);

const Sphere = dynamic(
  () => import("@react-three/drei").then((mod) => ({ default: mod.Sphere })),
  {
    ssr: false,
  },
);

const MeshDistortMaterial = dynamic(
  () =>
    import("@react-three/drei").then((mod) => ({
      default: mod.MeshDistortMaterial,
    })),
  {
    ssr: false,
  },
);

function AnimatedSphere() {
  return (
    <Suspense fallback={null}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Suspense>
  );
}

function Scene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Suspense>
  );
}

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Typing animation effect
  const text = "Video Editor | VFX | 3D Artist";
  const element = document.getElementById("typing-text");

  if (!element) return;

    element.textContent = ""; // ✅ Reset on mount
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < text.length) {
        element.textContent += text.charAt(idx++);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const screenW = typeof window !== "undefined" ? window.innerWidth : 1920;
  const screenH = typeof window !== "undefined" ? window.innerHeight : 1080;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground ref={bgRef} />
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas gl={{ antialias: false, alpha: true }} dpr={[1, 1.5]}>
          <Scene />
        </Canvas>
      </div>

      {/* Glowing particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [
                null,
                Math.random() *
                  (typeof window !== "undefined" ? window.innerHeight : 1080),
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            Shubham
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          >
            Bhushan Kumkar
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-8"
        >
          <p
            id="typing-text"
            className="text-2xl md:text-3xl text-cyan-400 font-mono min-h-[2rem]"
          />
          <motion.div
            className="w-0.5 h-8 bg-cyan-400 inline-block ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Aspiring filmmaker and visual storyteller specializing in video
          editing, VFX, and 3D design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00ffff" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
