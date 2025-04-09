"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, Eye, Clock, Calendar, Award } from "lucide-react"
import { useState } from "react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Updated project data to match your portfolio
  const projects = [
    {
      title: "Abeke",
      category: "Films",
      slug: "abeke",
      heroImage: "/assets/images/abeke2.jpg",
      client: "Nollywood Productions",
      year: "2024",
      description: "A compelling Nigerian drama that explores tradition and modernity.",
      overview: "As the colorist for Abeke, I focused on enhancing the rich cultural elements while maintaining a contemporary aesthetic that bridges traditional and modern storytelling.",
      videoUrl: "https://www.youtube.com/embed/bZQm-V8Do-g?si=70bbjLK0LrEmUwX5&autoplay=1",
      services: ["Color Grading", "Look Development", "Color Consultation"],
    },
    {
      title: "Efue",
      category: "Films",
      slug: "efue",
      heroImage: "/assets/images/efue.jpg",
      client: "Nigerian Filmmakers Collective",
      year: "2023",
      description: "A powerful narrative showcasing Nigerian storytelling at its finest.",
      overview: "The color palette for Efue was carefully crafted to enhance the emotional depth of the story, using subtle gradients and controlled contrast to maintain the authenticity of the narrative.",
      videoUrl: "https://www.youtube.com/embed/7iZK8WiiyUw?si=hixMQoDHVl3DM1Vn&autoplay=1",
      services: ["Color Grading", "Final Color", "DI"],
    },
    {
      title: "Brand Evolution",
      category: "Brand Identity",
      slug: "brand-evolution",
      heroImage: "/assets/images/spacemen.jpg",
      client: "Spacemen",
      year: "2024",
      description: "A brand identity project showcasing visual innovation.",
      overview: "Created a distinctive visual identity through careful color grading and visual consistency.",
      videoUrl: "https://www.youtube.com/embed/YXcgCGR4oCw?si=DEhvVBSwqg9Fgbrd&autoplay=1",
      services: ["Brand Identity", "Color Grading"],
    },
    {
      title: "Inciting",
      category: "Commercials",
      slug: "inciting",
      heroImage: "/assets/images/inciting.jpg",
      client: "Brand Name",
      year: "2024",
      description: "A dynamic commercial that pushes creative boundaries.",
      overview: "The color grade for Inciting was designed to create a bold, memorable look that aligns with the brand's identity while maintaining a premium feel.",
      videoUrl: "https://www.youtube.com/embed/-aKed-YfpYA?si=F4F0csoO8S3ykLGY&autoplay=1",
      services: ["Commercial Color", "Brand Color Consistency"],
    },
    {
      title: "Holy Land",
      category: "Music Videos",
      slug: "holy-land",
      heroImage: "/assets/images/hollyland.jpg",
      client: "Music Artist",
      year: "2024",
      description: "A visually stunning music video blending spiritual elements.",
      overview: "Created an ethereal atmosphere through careful color treatment while maintaining the vibrancy of performance scenes.",
      videoUrl: "https://www.youtube.com/embed/_2WlxJifLL8?si=zLR3IndapZIVj9y6&autoplay=1",
      services: ["Music Video Color", "Look Development"],
    },
    {
      title: "Timeless",
      category: "Music Videos",
      slug: "timeless",
      heroImage: "/assets/images/timeless.jpg",
      client: "Music Artist",
      year: "2024",
      description: "A timeless piece showcasing artistic excellence.",
      overview: "Developed a unique color palette that emphasizes the timeless nature of the music and visuals.",
      videoUrl: "https://www.youtube.com/embed/yOg-wJpdaA4?si=rnBUA6DjJCPtRdgn&autoplay=1",
      services: ["Music Video Color", "Color Grading"],
    },
    {
      title: "We Are All We Have",
      category: "Music Videos",
      slug: "we-are-all-we-have",
      heroImage: "/assets/images/weareall.jpg",
      client: "Music Artist",
      year: "2024",
      description: "An emotional journey through visual storytelling.",
      overview: "Created a cohesive visual narrative through careful color treatment and mood enhancement.",
      videoUrl: "https://www.youtube.com/embed/psJ9hD42AeA?si=d_cjkYYAKI3XmN1z&autoplay=1",
      services: ["Music Video Color", "Look Development"],
    },
  ]

  const project = projects.find((p) => p.slug === params.slug)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  if (!project) return null

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Full-screen background image or video */}
        <div className="absolute inset-0">
          {!isVideoPlaying ? (
            <>
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </>
          ) : (
            <div className="relative w-full h-full">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
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

          {!isVideoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="w-20 h-20 rounded-full bg-turquoise/80 flex items-center justify-center hover:bg-turquoise transition-colors duration-300"
              >
                <Play className="h-8 w-8 text-white ml-1" />
              </button>
            </div>
          )}

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {[...Array(10)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-video relative rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm">
                  {/* Placeholder for cover images */}
                  <div className="w-full h-full flex items-center justify-center text-white/30">
                    Cover {index + 1}
                  </div>
                </div>
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

