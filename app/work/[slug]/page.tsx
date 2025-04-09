"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Eye, Clock, Calendar, Award } from "lucide-react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the project data based on the slug
  const project = projects.find((p) => p.slug === params.slug) || projects[0]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Full-screen background image */}
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="absolute top-6 left-6 z-20">
            <Link
              href="/work"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Link>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-turquoise/80 flex items-center justify-center hover:bg-turquoise transition-colors duration-300">
              <Play className="h-8 w-8 text-white ml-1" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-turquoise/20 rounded-full text-sm">
                  {project.category}
                </span>
                <span className="text-white/50">•</span>
                <span className="text-white/70">{project.year}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">{project.title}</h1>
              <p className="text-xl text-white/70 max-w-2xl">{project.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-lg mb-2">{stat.label}</h3>
                <p className="text-2xl text-turquoise">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-start mb-24"
          >
            <div>
              <h2 className="font-serif text-3xl mb-6">Project Overview</h2>
              <div className="prose prose-invert">
                <p className="text-white/70">{project.overview}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg mb-2">Client</h3>
                <p className="text-white/70">{project.client}</p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/70"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Sample project data
const projects = [
  {
    title: "Echoes of Tomorrow",
    category: "Feature Film",
    slug: "echoes-of-tomorrow",
    heroImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80",
    client: "Independent Productions",
    year: "2022",
    description: "A science fiction drama exploring themes of memory and identity in a near-future setting.",
    overview: "I developed a desaturated, cool palette for the present timeline and a warmer, golden look for memory sequences, helping the audience navigate the complex narrative structure.",
    services: ["Direction", "DP", "Colorist", "Editor"],
  },
  {
    title: "Neon Dreams",
    category: "Music Video",
    slug: "neon-dreams",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80",
    client: "Electro Band",
    year: "2023",
    description: "A vibrant music video exploring themes of urban nightlife through a neon-colored lens.",
    overview: "For this project, I created a high-contrast look with saturated neons against deep blacks to emphasize the electronic music's energy and create a dreamlike atmosphere.",
    services: ["Direction", "DP", "Colorist", "Editor"],
  },
  {
    title: "Urban Luxury",
    category: "Commercial",
    slug: "urban-luxury",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80",
    client: "Elegance Fashion",
    year: "2023",
    description: "A high-end fashion commercial showcasing the latest urban luxury collection.",
    overview: "I created a sophisticated, high-contrast look with rich blacks and subtle color accents to highlight the textures and details of the luxury garments.",
    services: ["Direction", "DP", "Colorist", "Editor"],
  },
]

// Sample project stats
const projectStats = [
  {
    icon: <Eye className="h-6 w-6 text-turquoise" />,
    label: "Views",
    value: "1,234,567",
  },
  {
    icon: <Clock className="h-6 w-6 text-turquoise" />,
    label: "Duration",
    value: "2:34:56",
  },
  {
    icon: <Calendar className="h-6 w-6 text-turquoise" />,
    label: "Date",
    value: "June 15, 2023",
  },
  {
    icon: <Award className="h-6 w-6 text-turquoise" />,
    label: "Awards",
    value: "Best Music Video",
  },
]

