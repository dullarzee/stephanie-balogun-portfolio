"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText, Image as ImageIcon, Package } from "lucide-react"

export default function MediaKit() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        {/* Gradient Effects */}
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-turquoise/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-orange/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Media Kit</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Download official assets, bio, and press materials.
            </p>
          </motion.div>

          {/* Quick Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          >
            {quickDownloads.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mb-4 group-hover:bg-turquoise/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm mb-4">{item.description}</p>
                <button className="text-turquoise hover:text-white transition-colors duration-300 text-sm flex items-center">
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </motion.div>

          {/* Press Photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-24"
          >
            <h2 className="font-serif text-3xl mb-8">Press Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                >
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-turquoise text-black px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300 flex items-center">
                      Download High-Res
                      <Download className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Brand Guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
          >
            <h2 className="font-serif text-3xl mb-6">Brand Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-4 text-turquoise">Color Palette</h3>
                <div className="grid grid-cols-4 gap-4">
                  {brandColors.map((color, index) => (
                    <div key={index} className="space-y-2">
                      <div
                        className="w-full aspect-square rounded-lg"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <p className="text-sm text-white/70">{color.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4 text-turquoise">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/70 mb-2">Primary Font</p>
                    <p className="font-serif text-2xl">Playfair Display</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-2">Secondary Font</p>
                    <p className="text-2xl">Inter</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const quickDownloads = [
  {
    title: "Press Release",
    description: "Latest company news and announcements",
    icon: <FileText className="h-6 w-6 text-turquoise" />,
  },
  {
    title: "Brand Assets",
    description: "Logos, icons, and brand guidelines",
    icon: <Package className="h-6 w-6 text-turquoise" />,
  },
  {
    title: "Photo Pack",
    description: "High-resolution press photos",
    icon: <ImageIcon className="h-6 w-6 text-turquoise" />,
  },
  {
    title: "Media Kit",
    description: "Complete media package",
    icon: <Download className="h-6 w-6 text-turquoise" />,
  },
]

const pressPhotos = [
  {
    url: "/placeholder.svg",
    alt: "Studio Shot 1",
  },
  {
    url: "/placeholder.svg",
    alt: "Studio Shot 2",
  },
  {
    url: "/placeholder.svg",
    alt: "Studio Shot 3",
  },
]

const brandColors = [
  { hex: "#00A0B0" }, // Turquoise
  { hex: "#FF8C42" }, // Orange
  { hex: "#FFFFFF" }, // White
  { hex: "#000000" }, // Black
]

