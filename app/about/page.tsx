"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Clock, Star, Download, Play } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const achievements = [
  {
    icon: Award,
    title: "Projects Completed",
    description: "Successfully delivered creative projects",
    count: "30+ Projects",
  },
  {
    icon: Users,
    title: "Happy Clients",
    description: "Worked with brands across various industries",
    count: "15+ Clients",
  },
  {
    icon: Clock,
    title: "Experience",
    description: "Years of experience creating content ",
    count: "5+ Years",
  },
  {
    icon: Star,
    title: "Skills",
    description: "Proficient in VFX, Motion Graphics, and 3D Artistry",
    count: "Blender",
  },
];

const timeline = [
  {
    year: "2020",
    title: "YouTube Beginnings",
    description:
      "Started a YouTube channel focused on gameplay edits and creative content.",
  },
  {
    year: "2021",
    title: "Skill Development",
    description:
      "Began seriously learning Premiere Pro for video editing and Blender for 3D design.",
  },
  {
    year: "2022",
    title: "First Commercial Project",
    description:
      "Completed my first commercial VFX project, marking a significant step in my career.",
  },
  {
    year: "2023",
    title: "Brand Collaboration",
    description:
      "Started working with brands like Natural Veneer, creating visual content for their marketing efforts.",
  },
  {
    year: "2024",
    title: "Formal Education",
    description:
      "Currently pursuing formal filmmaking education to enhance my skills and knowledge in the field.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Video Editor | VFX | 3D Artist
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate visual storyteller who transforms ideas into
              stunning visual experiences through the power of VFX, motion
              graphics, and 3D artistry.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl" />
                <Image
                  src="/subh.jpg?height=300&width=400"
                  alt="Shubham Bhushan Kumkar"
                  width={400}
                  height={500}
                  className="relative rounded-lg border border-cyan-500/20"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-cyan-400">My Story</h2>
              <p className="text-gray-300 leading-relaxed">
                At 19, I'm immersed in the world of filmmaking, fueled by a
                relentless passion for visual storytelling. My journey began on
                YouTube, where I honed my editing skills creating engaging
                content. This experience sparked a deeper interest in VFX and 3D
                artistry, leading me to explore the endless possibilities of
                digital creation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I've had the opportunity to collaborate with various clients,
                crafting visual solutions that bring their visions to life. From
                dynamic motion graphics to captivating visual effects, I'm
                dedicated to delivering high-quality work that exceeds
                expectations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently, I'm pursuing formal filmmaking education to refine my
                skills and broaden my understanding of the industry. I'm excited
                to continue pushing the boundaries of creativity and innovation
                in the world of visual arts.
              </p>

              {/* <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Reel
                </motion.button>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Achievements & Milestones
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                  className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all"
                >
                  <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {achievement.count}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            My Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black z-10" />

                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/40 transition-all">
                    <span className="text-cyan-400 font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
