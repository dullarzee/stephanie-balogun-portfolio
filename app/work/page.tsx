"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category.toLowerCase() === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Portfolio</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              A collection of my work in Films, commercials, and music videos.
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden group">
              <Image
                src="/placeholder.svg"
                alt="Featured Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-turquoise/80 flex items-center justify-center hover:bg-turquoise transition-colors duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-serif text-3xl mb-2">Echoes of Tomorrow</h2>
                <p className="text-white/70">Feature Film • 2024</p>
              </div>
            </div>
          </motion.div>

          {/* Project Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <button className="w-full text-left p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-300">
                  <h3 className="font-serif text-xl mb-2 text-turquoise">{category.name}</h3>
                  <p className="text-white/70 mb-4">{category.count} Projects</p>
                  <ArrowRight className="h-5 w-5 text-turquoise transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                      <p className="text-white/70">{project.category}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Categories for filtering
const categories = [
  { name: "Films", count: 8 },
  { name: "Commercials", count: 15 },
  { name: "Music Videos", count: 12 },
]

// Sample project data
const allProjects = [
  {
    title: "Echoes of Tomorrow",
    category: "Feature Film",
    slug: "echoes-of-tomorrow",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Neon Dreams",
    category: "Music Video",
    slug: "neon-dreams",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Urban Luxury",
    category: "Commercial",
    slug: "urban-luxury",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Whispers in the Dark",
    category: "Feature Film",
    slug: "whispers-in-the-dark",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Rhythm & Soul",
    category: "Music Video",
    slug: "rhythm-and-soul",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Fresh Perspective",
    category: "Commercial",
    slug: "fresh-perspective",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Electric Pulse",
    category: "Music Video",
    slug: "electric-pulse",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "The Last Journey",
    category: "Feature Film",
    slug: "the-last-journey",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Morning Brew",
    category: "Commercial",
    slug: "morning-brew",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Midnight Serenade",
    category: "Music Video",
    slug: "midnight-serenade",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Beyond the Horizon",
    category: "Feature Film",
    slug: "beyond-the-horizon",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
  {
    title: "Tech Innovation",
    category: "Commercial",
    slug: "tech-innovation",
    thumbnail: "/placeholder.svg?height=720&width=1280",
  },
]

