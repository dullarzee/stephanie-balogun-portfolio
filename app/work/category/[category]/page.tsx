"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Play } from "lucide-react"

// Project data organized by category
const categoryData = {
  'films': {
    title: "Films",
    description: "Feature films and short film projects",
    projects: [
      {
        title: "Abeke",
        year: "2024",
        description: "A compelling story of tradition and modernity",
        thumbnail: "/assets/images/abeke2.jpg",
      },
      {
        title: "Blood for Blood",
        year: "2023",
        description: "An intense drama of revenge and redemption",
        thumbnail: "/assets/images/Bloodforblood.jpg",
      }
    ]
  },
  'commercials': {
    title: "Commercials",
    description: "Brand and advertising projects",
    projects: [
      {
        title: "Inciting",
        year: "2024",
        description: "A dynamic commercial showcasing innovation",
        thumbnail: "/assets/images/inciting.jpg",
      }
    ]
  },
  'music-videos': {
    title: "Music Videos",
    description: "Visual storytelling through music",
    projects: [
      {
        title: "Holy Land",
        year: "2024",
        description: "A visually stunning music video experience",
        thumbnail: "/assets/images/hollyland.jpg",
      },
      {
        title: "Holy Land II",
        year: "2023",
        description: "The anticipated follow-up visual piece",
        thumbnail: "/assets/images/hollyland.jpg",
      },
      {
        title: "Rhythm Flow",
        year: "2023",
        description: "An energetic visual performance",
        thumbnail: "/assets/images/efue.jpg",
      },
      {
        title: "Urban Beat",
        year: "2023",
        description: "Street culture meets modern aesthetics",
        thumbnail: "/assets/images/abeke3.jpg",
      },
      {
        title: "Neon Dreams",
        year: "2023",
        description: "A colorful journey through sound",
        thumbnail: "/assets/images/inciting.jpg",
      },
      {
        title: "Echo Chamber",
        year: "2023",
        description: "Experimental visuals meet contemporary sound",
        thumbnail: "/assets/images/Bloodforblood.jpg",
      }
    ]
  }
}

export default function CategoryPage({ params }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const category = params.category
  const categoryInfo = categoryData[category]

  if (!categoryInfo) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              href="/work"
              className="inline-flex items-center text-turquoise hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Work
            </Link>
          </motion.div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">
              {categoryInfo.title}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryInfo.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      className="w-16 h-16 rounded-full bg-white/20 group-hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                      aria-label={`Play ${project.title}`}
                    >
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <p className="text-turquoise text-sm uppercase tracking-wider font-medium mb-2">
                  {project.year}
                </p>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 