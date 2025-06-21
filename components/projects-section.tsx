"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";

const projects = [
  // {
  //   id: 1,
  //   title: "Vintagecar animation",
  //   category: "3D Design",
  //   description: "Tested Blender car rigs with a vintage-style animation.",
  //   image: "/car.jpg?height=400&width=600",
  //   tags: ["After Effects", "Blender" ,"Premiere Pro"],
  //   link: "https://whistlingwoods-my.sharepoint.com/personal/kumkar_shubham_b23_whistlingwoods_net/_layouts/15/stream.aspx?id=%2Fpersonal%2Fkumkar%5Fshubham%5Fb23%5Fwhistlingwoods%5Fnet%2FDocuments%2FMC%2Ftimelapsmc%2Fpotfolio%2FDoctorstrange%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E50a34ec1%2Dd621%2D4c84%2D83a8%2D42af3082dac2",
  // },
  {
    id: 1,
    title: "Vintagecar animation",
    category: "3D Design",
    description: "Tested Blender car rigs with a vintage-style animation.",
    image: "/car.jpg?height=400&width=600",
    tags: ["After Effects", "Blender", "Premiere Pro"],
    link: "https://drive.google.com/file/d/1uhd3Hy5yTSekRn73OZfi52_zxauHQJFE/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/aNTQDvEBoes", // for embedded player
  },
  {
    id: 2,
    title: "RedBull Ad.",
    category: "3D Design",
    description: "RedBull for a commercial advertisement.",
    image: "/red.jpg?height=400&width=600",
    tags: ["Blender", "Premiere Pro"],
    link: "https://drive.google.com/file/d/1XBZZbG3UBBRrTVfvtFDPh3hervcZ5-wX/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/Ti1s5g15sP4", // for embedded player
  },
  {
    id: 3,
    title: "Nike Ad.",
    category: "VFX",
    description: "Nike for a commercial advertisement.",
    image: "/nike.png?height=400&width=600",
    tags: ["After Effects", "Blender", "Premiere Pro"],
    link: "https://drive.google.com/file/d/14QIltQDp5Z2c5WiMO5eEcXzmKYO0QuKF/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/5pJrIJw4zXY", // for embedded player
  },
  {
    id: 4,
    title: "Robot",
    category: "VFX",
    description:
      "A hyper-realistic robot animation with stunning visual effects.",
    image: "/roboad.png?height=400&width=600",
    tags: ["Premiere Pro", "After Effects", "Blender"],
    link: "https://drive.google.com/file/d/1saxHBz0jTdn3sfnFk4UPXEfCMC2Y6DD2/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/NXSNgXyI9MM", // for embedded player
  },
  {
    id: 5,
    title: "Wooden Car",
    category: "3D Design",
    description: "Compelling brand video for Fabdecor.",
    image: "/wood.jpg?height=400&width=600",
    tags: ["Premiere Pro", "Blender"],
    link: "https://drive.google.com/file/d/19UoRGsnvGofG8KUg11oJsuBRAVekAopO/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/q2GsmkUW5uw", // for embedded player
  },
  {
    id: 6,
    title: "Nature",
    category: "3D Design",
    description: "Detailed 3D visualization for Ultimo product.",
    image: "/nature.jpg?height=400&width=600",
    tags: ["Premiere Pro", "Blender"],
    link: "https://drive.google.com/file/d/15U9_AY5WWVT5IVXT0CRJnl4-Y6tj_vmr/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/W_MkcRjOppU", // for embedded player
  },
  {
    id: 7,
    title: "Valorant Montage",
    category: "Video Editing",
    description: "Stylized Valorant montage showcasing Adobe editing skills.",
    image: "/valo.png?height=400&width=600",
    tags: ["Premiere Pro", "Photoshop", "After Effects"],
    link: "https://drive.google.com/file/d/13gwBwjuGD1oSSNZ8pyJQD6ntk7SVVDMH/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/PmoetuUyRq0", // for embedded player
  },
  {
    id: 8,
    title: "Iphone Ad.",
    category: "3D Design",
    description: "experience the iPhone like never before in stunning 3D Ad.",
    image: "/iphone.jpg?height=400&width=600",
    tags: ["Premiere Pro", "Blender"],
    link: "https://drive.google.com/file/d/1Ja0F1rUjbeOdgzmioxZoWlkSylWKAqe3/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/UvlMdgopf-M", // for embedded player
  },
  {
    id: 9,
    title: "Water Simulation",
    category: "3D Design",
    description:
      "a captivating simulation showcasing the realism and dynamics of water.",
    image: "/water.jpg?height=400&width=600",
    tags: ["Premiere Pro", "Blender"],
    link: "https://drive.google.com/file/d/1hYkJHteHIB2kper98-A7yPl1Y6YunNwm/view?usp=sharing", // for external link
    videoUrl: "https://www.youtube.com/embed/Z4OxwDE366s", // for embedded player
  },
];

const categories = ["All", "Video Editing", "VFX", "3D Design"];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section ref={ref} id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my latest work in visual effects, motion graphics, and
            3D artistry
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4 p-2 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all"
            >
              {/* <div className="relative overflow-hidden">
                {playingId === project.id ? (
                  <iframe
                    width="100%"
                    height="256"
                    src={`${project.videoUrl}?autoplay=1&mute=0&controls=1`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 z-10"
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {playingId !== project.id && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                          onClick={() => setPlayingId(project.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all"
                        >
                          <Play size={24} />
                        </motion.button>
                      </div>
                    )}
                    {playingId === project.id && (
                      <button
                        onClick={() => setPlayingId(null)}
                        className="absolute top-2 right-2 z-10 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
                      >
                        ✕
                      </button>
                    )}
                  </div>
              </div> */}
              <div className="relative overflow-hidden">
                {playingId === project.id ? (
                  <iframe
                    width="100%"
                    height="256"
                    src={`${project.videoUrl}?autoplay=1&mute=0&controls=1`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 z-10"
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                )}

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity ${
                    playingId === project.id
                      ? "opacity-0 pointer-events-none"
                      : "group-hover:opacity-100 opacity-0"
                  }`}
                />

                {/* Play Button or Close Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                    playingId === project.id
                      ? "opacity-0 pointer-events-none"
                      : "group-hover:opacity-100 opacity-0"
                  }`}
                >
                  {playingId !== project.id && (
                    <motion.button
                      onClick={() => setPlayingId(project.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all"
                    >
                      <Play size={24} />
                    </motion.button>
                  )}
                </div>

                {/* Close Button */}
                {playingId === project.id && (
                  <button
                    onClick={() => setPlayingId(null)}
                    className="absolute top-2 right-2 z-20 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-cyan-400 font-semibold">
                    {project.category}
                  </span>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
