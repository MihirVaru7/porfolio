"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of VFX: AI and Machine Learning in Visual Effects",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the VFX industry and what it means for artists and studios.",
    content:
      "The visual effects industry is undergoing a massive transformation with the integration of AI and machine learning technologies...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Creating Photorealistic 3D Renders: Tips and Techniques",
    excerpt:
      "A comprehensive guide to achieving photorealistic results in your 3D renders using modern techniques and tools.",
    content:
      "Photorealistic rendering is the holy grail of 3D artists. In this detailed guide, we'll explore the techniques...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tutorial",
    date: "2024-01-10",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Motion Graphics Trends 2024: What's Hot This Year",
    excerpt:
      "Discover the latest trends in motion graphics and how to incorporate them into your creative projects.",
    content:
      "Motion graphics continue to evolve with new trends emerging every year. Here are the top trends for 2024...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Trends",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Behind the Scenes: Creating a Cyberpunk VFX Sequence",
    excerpt:
      "A detailed breakdown of the creative process behind one of my recent cyberpunk-themed VFX projects.",
    content:
      "In this behind-the-scenes article, I'll walk you through the entire process of creating a complex cyberpunk VFX sequence...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Case Study",
    date: "2023-12-28",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Essential After Effects Plugins for VFX Artists",
    excerpt:
      "A curated list of must-have After Effects plugins that every VFX artist should have in their toolkit.",
    content:
      "After Effects is powerful on its own, but with the right plugins, you can take your VFX work to the next level...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tools",
    date: "2023-12-20",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Color Theory in VFX: Creating Mood and Atmosphere",
    excerpt:
      "Understanding how color theory applies to visual effects and how to use it to enhance your storytelling.",
    content:
      "Color is one of the most powerful tools in a VFX artist's arsenal. It can convey emotion, establish mood...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Theory",
    date: "2023-12-15",
    readTime: "9 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Technology",
  "Tutorial",
  "Trends",
  "Case Study",
  "Tools",
  "Theory",
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
            Blog & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Sharing knowledge, tutorials, and insights from the world of VFX,
            motion graphics, and 3D artistry
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            Featured Articles
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-cyan-400"
          >
            Latest Articles
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
                  className="px-6 py-2 rounded-full transition-all text-gray-300 hover:text-cyan-400"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                whileHover={{ y: -5 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/40 transition-all"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center text-gray-400 text-xs mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Subscribe to get the latest tutorials, insights, and industry
            updates
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
