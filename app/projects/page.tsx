"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Play, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

const projects = [
  {
    id: 1,
    title: "Smoke simulation",
    category: "3D",
    year: "2022",
    client: "Personal Project",
    description:
      "A surreal 3D simulation where smoke emerges from a hollow human structure, blending art with atmospheric motion.",
    longDescription:
      "Breath of Form is a captivating 3D smoke simulation that visualizes ethereal motion emanating from a hollow human figure. Crafted with precision in Blender, the piece explores the contrast between stillness and movement, as soft, volumetric smoke flows from within the sculpture-like body, symbolizing the release of energy, spirit, or thought. The scene is brought to life through dynamic lighting, realistic smoke behavior, and careful attention to form and scale, creating an emotional and visually striking blend of digital artistry and symbolic storytelling.",
    image: "/smoke.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1RwRxmA0Mn3UjF7GG_NQo3S1pSr57nR6W/view?usp=sharing",
    videoUrl: "https://youtube.com/shorts/BBgDAP6Au1M?feature=share",
    featured: true,
  },
  {
    id: 2,
    title: "Ultimo Ad 1",
    category: "VFX",
    year: "2024",
    client: "Ultimo",
    description:
      " A seamless VFX showcase where walls dynamically swap to highlight a range of stunning wall design products.",
    longDescription:
      "Shifting Spaces is a visually immersive VFX sequence designed to present a variety of wall products in a dynamic and engaging way. The background features walls that fluidly transition from one design to another—ranging from textured finishes and bold patterns to sleek modern surfaces—all within the same space. These smooth, cinematic wall swaps are created using advanced visual effects techniques, ensuring natural lighting, shadows, and camera continuity throughout the scene. This creative approach not only demonstrates product versatility but also transforms the environment into a living showroom, offering viewers a captivating and practical glimpse into how each design can redefine a space.",
    image: "/u1.jpg?height=600&width=800",
    tags: ["After Effects", "Cinema 4D", "Compositing", "Particle Systems"],
    link: "https://drive.google.com/drive/folders/1zfHS9rcqRzvLr_HNh4SimRoBZTPhG8ww?usp=sharing",
    videoUrl: "https://youtube.com/shorts/EWaFqYlTpEM?feature=share",
    featured: true,
  },
  {
    id: 3,
    title: "Ultimo Ad 2",
    category: "VFX",
    year: "2024",
    client: "Ultimo",
    description:
      " A seamless VFX showcase where walls dynamically swap to highlight a range of stunning wall design products.",
    longDescription:
      "Shifting Spaces is a visually immersive VFX sequence designed to present a variety of wall products in a dynamic and engaging way. The background features walls that fluidly transition from one design to another—ranging from textured finishes and bold patterns to sleek modern surfaces—all within the same space. These smooth, cinematic wall swaps are created using advanced visual effects techniques, ensuring natural lighting, shadows, and camera continuity throughout the scene. This creative approach not only demonstrates product versatility but also transforms the environment into a living showroom, offering viewers a captivating and practical glimpse into how each design can redefine a space.",
    image: "/u2.jpg?height=600&width=800",
    tags: ["After Effects", "Cinema 4D", "Compositing", "Particle Systems"],
    link: "https://drive.google.com/drive/folders/1zfHS9rcqRzvLr_HNh4SimRoBZTPhG8ww?usp=sharing",
    videoUrl: "https://youtube.com/shorts/c7XdmipiZ-M?feature=share",
    featured: true,
  },
  {
    id: 4,
    title: "Fabric Edit 1",
    category: "Video Editing",
    year: "2023 ",
    client: "Fab Decor",
    description:
      "A vibrant reel showcasing an array of fabrics that bring texture, color, and style to life.",
    longDescription:
      "Threads of Elegance is a dynamic fabric reel designed to highlight the beauty and diversity of textile materials. Featuring close-up shots and smooth transitions, the reel captures the intricate weaves, rich textures, and vibrant colors of a carefully curated selection of fabrics.",
    image: "/f1.jpg?height=600&width=800",
    tags: ["Premiere pro"],
    link: "https://drive.google.com/drive/folders/154j9yVYiyhV4wm46QmCRaoXTY-xvGJY7",
    videoUrl: "https://youtube.com/shorts/X1rlHsr13So?feature=share",
    featured: true,
  },
  {
    id: 5,
    title: "Fabric Edit 2",
    category: "Video Editing",
    year: "2023 ",
    client: "Fab Decor",
    description:
      " A captivating reel that brings fabrics to life through rich textures, vibrant colors, and graceful movement.",
    longDescription:
      "Fabric Flow is an elegant and engaging reel that showcases a diverse collection of fabrics in stunning detail. Through smooth transitions and close-up visuals, the animation highlights the intricate textures, patterns, and colors of various textiles. Expert lighting and subtle motion emphasize the tactile qualities and luxurious feel of each fabric.",
    image: "/f2.jpg?height=600&width=800",
    tags: ["Premiere pro"],
    link: "https://drive.google.com/drive/folders/154j9yVYiyhV4wm46QmCRaoXTY-xvGJY7",
    videoUrl: "https://youtube.com/shorts/bFnewMNxT9c?feature=share",
    featured: true,
  },
  {
    id: 6,
    title: "Fabric Transformations 3",
    category: "3D",
    year: "2023 ",
    client: "Fab Decor",
    description:
      "A sleek 3D reel where sofas seamlessly switch fabrics, showcasing style, texture, and versatility in motion.",
    longDescription:
      "Fabric Transformations is a visually engaging 3D reel designed to showcase the versatility and aesthetic appeal of various fabric options on modern sofas. Through seamless transitions, the animation reveals an array of textures, colors, and materials—ranging from plush velvets to breathable linens and rich leathers—all applied to the same sofa frame.",
    image: "/sofaa.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/drive/folders/1DIdByo-ze0rhxiKVX5FeocvFvrEf5DUI?usp=sharing",
    videoUrl: "https://youtube.com/shorts/8DSK5AmfK4Q?feature=share",
    featured: true,
  },
  {
    id: 7,
    title: "Film Introduction Animation",
    category: "3D",
    year: "2022 ",
    client: "Personal Project",
    description:
      "A captivating 3D animation where a vintage projector beams the studio’s name, setting the stage with cinematic flair.",
    longDescription:
      "A meticulously crafted 3D animation created as a film intro to introduce the studio’s brand with elegance and atmosphere. The scene centers around a classic film projector that springs to life, casting a glowing beam across a textured surface .Detailed modeling and realistic lighting effects capture the nostalgic essence of old-school cinema, from the subtle flicker of the projector lamp to the gentle dust particles floating in the light.",
    image: "/film.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1MGHQXzMu5ioVq4taXFVMdWqi_ihwEj7c/view?usp=sharing",
    videoUrl: "https://youtu.be/EOKm-aJwf34",
    featured: true,
  },
  {
    id: 8,
    title: "Film End Credit animation",
    category: "3D",
    year: "2025 ",
    client: "Gravity studios",
    description:
      "A mesmerizing 3D end credits sequence where film-inspired objects float through space as the camera journeys among them.",
    longDescription:
      "Celestial Credits is an immersive 3D animation designed as an end credits sequence, where key objects symbolizing the film’s themes and story gracefully float in a vast, cosmic space. The camera smoothly navigates through this dynamic environment, weaving between carefully crafted props and elements that capture the essence of the narrative. Surrounding these objects, the rolling credits orbit and flow, integrating seamlessly with the scene’s depth and movement. Detailed lighting and atmospheric effects—such as subtle glows, shadows, and particles—enhance the sense of wonder and continuity.",
    image: "/credit.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1tKw3ju1WN1WCmtAC4I669bl3XxsrrNN2/view?usp=sharing",
    videoUrl: "https://youtu.be/SBTa-_Aw5ks",
    featured: true,
  },
  {
    id: 9,
    title: "Sikka a 3d horror shot film ",
    category: "3D",
    year: "2024",
    client: "Personal Project",
    description:
      " A 3D horror short film about a cursed coin lurking within an isolated jungle house, where darkness awakens.",
    longDescription:
      "The Haunter Coin is a suspenseful 3D horror short film set deep within a remote house surrounded by an unforgiving jungle. At the heart of the story lies an ancient, cursed coin whose malevolent presence slowly unravels the sanity of anyone who dares to possess it. Through atmospheric lighting, detailed textures, and haunting sound design, the film builds a tense, claustrophobic environment where shadows move unpredictably and unseen forces manipulate reality.",
    image: "/sik.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1oOe_fHy4HsPY9E79yJIuaJJjo64g9e6l/view?usp=sharing",
    videoUrl: "https://youtu.be/iY9Rk2hITqo",
    featured: true,
  },
  {
    id: 10,
    title: "Robot animation",
    category: "3D",
    year: "2024 ",
    client: "Personal Project",
    description:
      " Two sleek robots glide effortlessly through a confined square space, unveiling the cutting-edge technology inside the building.",
    longDescription:
      " A captivating VFX sequence designed as an advert showcasing advanced robotics in a sleek environment. The scene features two robots gliding smoothly around a perfectly geometric square space within a building, emphasizing precision, innovation, and fluid motion. With sharp reflections, detailed metallic surfaces, and dynamic lighting, the animation highlights the sophistication and seamless operation of these machines.",
    image: "/roboad.png?height=600&width=800",
    tags: ["Premiere pro", "Blender", "After effects"],
    link: "https://drive.google.com/file/d/1saxHBz0jTdn3sfnFk4UPXEfCMC2Y6DD2/view?usp=sharing",
    videoUrl: "https://youtu.be/NXSNgXyI9MM",
    featured: true,
  },
  {
    id: 11,
    title: "Cloth simulation\n",
    category: "3D",
    year: "2023",
    client: "Personal Project",
    description:
      "A smooth 3D cloth simulation showing transparent fabric falling softly over cubes",
    longDescription:
      "Gentle Fall is a beautiful 3D cloth animation where a light, see-through fabric gently falls and drapes over several cubes. The cloth moves naturally, folding and wrapping around the edges of the cubes with smooth and realistic motion. The transparent material lets you see the shapes underneath, creating a calm and pleasing visual effect.",
    image: "/cloth.jpg",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/179h0RNa7oRAkuHXiwh6Ntb55BphOVBjZ/view?usp=sharing",
    videoUrl: "https://youtu.be/ZlWmP3UblEE",
    featured: true,
  },
  {
    id: 12,
    title: "Doctor Strange\u2019s Portal effect ",
    category: "3D",
    year: "2022",
    client: "Personal Project",
    description:
      " A 3D recreation of Doctor Strange\u2019s iconic portal effect, crafted with Blender\u2019s powerful tools.",
    longDescription:
      "In this project, I set out to recreate the mesmerizing portal effect seen in Doctor Strange using Blender. The animation captures the swirling, glowing rings and intricate magical patterns that define the portal\u2019s look, combining detailed texture work with dynamic particle systems and fluid animations. Using Blender\u2019s powerful shader nodes and lighting techniques, I aimed to replicate the vivid colors and ethereal glow that give the portals their mystical feel.",
    image: "/doc.jpg?height=600&width=800",
    tags: ["Blender", "Premiere pro"],
    link: "https://drive.google.com/file/d/18sQsr6PbJeYce-4EQL154IT845j0d319/view?usp=sharing",
    videoUrl: "https://youtu.be/Og8bZmCzkDo",
    featured: true,
  },
  {
    id: 13,
    title: " IPhone Showcase in Blender",
    category: "3D",
    year: "2021",
    client: "Personal Project",
    description:
      "A detailed 3D recreation of an iPhone advertisement, crafted entirely in Blender.",
    longDescription:
      "In this project, I aimed to recreate a sleek iPhone advertisement using Blender. The animation highlights the phone\u2019s elegant design, smooth surfaces, and reflective materials with realistic lighting and shading. Through careful modeling and texturing, I captured the iconic look of the device, while dynamic camera movements showcase its features from multiple angles.",
    image: "/iphone.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1Ja0F1rUjbeOdgzmioxZoWlkSylWKAqe3/view?usp=sharing",
    videoUrl: "https://youtu.be/UvlMdgopf-M",
    featured: true,
  },
  {
    id: 14,
    title: "MonkeyHead ",
    category: "VFX",
    year: "2021",
    client: "Personal Project",
    description:
      " A VFX shot where footage is expertly tracked to seamlessly insert a 3D monkey head into the scene.",
    longDescription:
      "In this project, I created a VFX shot by carefully tracking live-action footage and integrating a 3D monkey head into the scene. The process began with precise camera tracking to match the movement and perspective of the original footage, ensuring the 3D element aligns perfectly with the environment. I modeled and textured the monkey head, then added realistic lighting and shadows to blend it naturally into the scene.",
    image: "/mon.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender", "AfterEffect"],
    link: "https://drive.google.com/file/d/1Kc2KZZeR-M5i2zYp1QaTkEvXo6H0BvtS/view?usp=sharing",
    videoUrl: "https://youtu.be/9LD-IalxFR4",
    featured: true,
  },
  {
    id: 15,
    title: " Valorant Highlights Montage",
    category: "Video Editing",
    year: "2024",
    client: "Personal Project",
    description:
      " An exciting montage showcasing epic moments and gameplay from Valorant.",
    longDescription:
      "In this project, I created a dynamic montage featuring some of the best moments from the popular tactical shooter game Valorant. The video combines intense gameplay clips, including impressive kills, strategic plays, and team coordination. Through careful editing, smooth transitions, and synced music, the montage captures the fast-paced energy and competitive spirit of the game.",
    image: "/valo.png?height=600&width=800",
    tags: [],
    link: "https://drive.google.com/file/d/13gwBwjuGD1oSSNZ8pyJQD6ntk7SVVDMH/view?usp=drive_link",
    videoUrl: "https://youtu.be/PmoetuUyRq0",
    featured: true,
  },
  {
    id: 16,
    title: "Nature",
    category: "3D",
    year: "2023",
    client: "Personal Project",
    description:
      " A peaceful 3D render of a chair in a cozy room filled with lush greenery and warm sunlight.",
    longDescription:
      "In this project, I created a detailed 3D render of a chair placed inside a small, room that blends nature and comfort. The room is filled with vibrant grass and various green plants, creating a refreshing indoor garden atmosphere. Soft sunlight streams through an unseen window, casting warm light and gentle shadows that highlight the textures of both the chair and the surrounding foliage.",
    image: "/nature.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/15U9_AY5WWVT5IVXT0CRJnl4-Y6tj_vmr/view?usp=sharing",
    videoUrl: "https://youtu.be/W_MkcRjOppU\n",
    featured: true,
  },
  {
    id: 17,
    title: " Nike in Motion",
    category: "VFX",
    year: "2024",
    client: "Personal Project",
    description:
      " A sleek 3D ad featuring Nike shoes gracefully floating within a modern architectural space.\n",
    longDescription:
      "In this project, I aimed to create a dynamic Nike advertisement using 3D animation where the shoes float effortlessly inside a stylish, spacious building. The shoes glide smoothly through the open environment, highlighting their design details from every angle. The architectural setting, with clean lines and ambient lighting, complements the modern and energetic vibe of the brand. By combining realistic materials, reflections, and subtle shadows, the animation showcases the shoes\u2019 texture and form with a polished, high-end look.",
    image: "/nike.png?height=600&width=800",
    tags: [],
    link: "https://drive.google.com/file/d/14QIltQDp5Z2c5WiMO5eEcXzmKYO0QuKF/view?usp=sharing",
    videoUrl: "https://youtu.be/5pJrIJw4zXY",
    featured: true,
  },
  {
    id: 18,
    title: "Redbull ",
    category: "3D",
    year: "2020",
    client: "Personal Project",
    description:
      " Chilled to perfection \u2014 a 3D Red Bull can surrounded by crystal-clear ice cubes for maximum refreshment.\n",
    longDescription:
      "This 3D Red Bull advertisement showcases the iconic can nestled in a bed of ultra-realistic ice cubes, emphasizing the brand's energy and cool refreshment. Created using high-resolution modeling, precise lighting, and detailed texturing, the scene captures the glistening surfaces of the ice and condensation on the can, delivering a visually striking and invigorating visual that embodies the essence of a cold, energizing boost.",
    image: "/red.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1XBZZbG3UBBRrTVfvtFDPh3hervcZ5-wX/view?usp=sharing",
    videoUrl: "https://youtu.be/Ti1s5g15sP4\n",
    featured: true,
  },
  {
    id: 19,
    title: "Vintage car animation\n",
    category: "3D",
    year: "2024",
    client: "Personal Project",
    description:
      "A timeless vintage car glides through a serene space lined with elegant white pillars.",
    longDescription:
      "This animation features a vintage car gracefully rolling through a minimalistic space adorned with tall white pillars. Rendered with careful attention to detail, the scene combines classic automotive design with a clean, modern backdrop, creating a striking contrast that emphasizes the car's timeless elegance and smooth motion.",
    image: "/car.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1uhd3Hy5yTSekRn73OZfi52_zxauHQJFE/view?usp=sharing",
    videoUrl: "https://youtu.be/aNTQDvEBoes",
    featured: true,
  },
  {
    id: 20,
    title: "Hallway Water simulation",
    category: "3D",
    year: "2020",
    client: "Personal Project",
    description:
      "A dynamic Blender simulation where water realistically floods a hallway, capturing the power and fluidity of motion.\n",
    longDescription:
      "Created in Blender, this water simulation showcases a dramatic sequence where realistic fluid dynamics bring a hallway flooding to life. With detailed splashes, reflections, and lighting, the simulation captures the powerful motion and natural behavior of water as it surges through the space, demonstrating advanced physics and cinematic rendering techniques.",
    image: "/water.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/1hYkJHteHIB2kper98-A7yPl1Y6YunNwm/view?usp=sharing",
    videoUrl: "https://youtu.be/Z4OxwDE366s",
    featured: true,
  },
  {
    id: 21,
    title: "Wooden toy car animation\n",
    category: "3D",
    year: "2025",
    client: "Personal Project",
    description:
      "A charming wooden toy car comes to life in this Blender animation, showcasing smooth motion and handcrafted detail.",
    longDescription:
      "This animation, created in Blender, features a meticulously crafted wooden toy car brought to life with smooth, realistic motion and detailed texturing. The animation highlights the natural grain of the wood, soft lighting, and subtle camera movements to evoke a sense of nostalgia and craftsmanship, showcasing both the charm of the toy and the technical precision of 3D animation.\nhttps://drive.google.com/file/d/19UoRGsnvGofG8KUg11oJsuBRAVekAopO/view?usp=sharing",
    image: "/wood.jpg?height=600&width=800",
    tags: ["Premiere pro", "Blender"],
    link: "https://drive.google.com/file/d/19UoRGsnvGofG8KUg11oJsuBRAVekAopO/view?usp=sharing",
    videoUrl: "https://youtu.be/q2GsmkUW5uw",
    featured: true,
  },
];

const categories = ["All", "VFX", "Video Editing", "3D"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my latest work in visual effects, motion graphics, and
            3D artistry
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            Featured Projects
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all"
                    >
                      <Play size={24} />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-semibold">{project.category}</span>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">+{project.tags.length - 3} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* All Projects */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            All Projects
          </motion.h2>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs bg-black/50 text-cyan-400 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={16}
                        className="text-gray-400 group-hover:text-cyan-400 transition-colors"
                      />
                    </div>

                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {project.year}
                      </span>
                      <span className="flex items-center">
                        <Tag size={12} className="mr-1" />
                        {project.client}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-cyan-500/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-400">{selectedProject.year}</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-cyan-400 mb-4">
                  Client: {selectedProject.client}
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open(selectedProject.videoUrl, "_blank")
                    }
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    View Video
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedProject.link, "_blank")}
                    className="flex items-center px-6 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Download Video
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
