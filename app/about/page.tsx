"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function About() {
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
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">About Me</h1>
            <div className="h-1 w-20 bg-turquoise mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/full.JPG"
                  alt="Stephanie Balogun"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl text-turquoise">Stephanie Balogun</h2>
              <p className="text-xl text-white/80">Professional Film Colorist</p>
              <div className="h-px w-16 bg-orange"></div>
              <p className="text-white/70">
              Stephanie Balogun is a Nigerian-based filmmaker who specializes in cinematography and coloring. Scratch that, let me talk about me. I have always had a passion and an interest in visual art. It started with a love for acting and photography, and then it morphed into a love for the art of filmmaking- I no longer wanted to simply be in movies, I wanted to tell stories. 
I was a student at the renowned Identity School of Acting, the former home to John Boyega, Damson Idris, and Simone Ashley. I also featured in a widely popular web series (which I hope you never find), and all of these contributed to the passion I now have for filmmaking. (It’s one thing to love food, and it’s another thing to love cooking food; it was time for me to be a chef). 

              </p>
              <p className="text-white/70">
              I have always been imaginative, so it's easy for me to come up with clear-mind images of what I want a scene to feel and look like. In 2022, I started pursuing my filmmaking career fully, working as an intern under Clan Yujo- A company that has worked on different films, music videos, and commercials and is also affiliated with Hollywood personalities like JJ Abrams, Morgan Freeman, Idris Elba, and many others. 
              Learning and working on cinematography exposed me to the world of coloring, which I developed a love for on my journey. Now, cinematography and color have become my forte because I want to take full control of how images look from the start to the finished product. The final look of an image starts with cinematography and ends with color. 

              </p>
              <p className="text-white/70">
              My goal as a cinematographer and colorist is to create images that look and feel surreal. I have since become a Davinci Resolve certified colorist with a long list of verifiable projects credited to my name. 
              I believe that my knowledge as a cinematographer gives me an upper hand as a colorist because I am able to imitate and bring to life exactly what any cinematographer or director I work with intended for the image.

              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl mb-16 text-center"
          >
            Experience & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-turquoise/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl mb-4 text-turquoise">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl mb-16 text-center"
          >
            Tools & Software
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-colors duration-300"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg text-turquoise">{tool.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-turquoise/20 to-orange/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl mb-8"
          >
            Ready to Collaborate?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 mb-12"
          >
            Let's create something extraordinary together. I'm always excited to take on new projects
            and challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-turquoise text-black px-8 py-3 rounded-lg hover:bg-white transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const expertise = [
  {
    title: "Color Grading",
    description: "Expert in creating distinctive looks and maintaining consistency across projects.",
    icon: (
      <svg
        className="w-6 h-6 text-turquoise"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Technical Expertise",
    description: "Proficient in industry-standard color grading software and workflows.",
    icon: (
      <svg
        className="w-6 h-6 text-turquoise"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "Strong communication skills and experience working with diverse creative teams.",
    icon: (
      <svg
        className="w-6 h-6 text-turquoise"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
]

const tools = [
  {
    name: "DaVinci Resolve",
    logo: "/placeholder.svg",
  },
  {
    name: "Adobe Premiere Pro",
    logo: "/placeholder.svg",
  },
  {
    name: "Baselight",
    logo: "/placeholder.svg",
  },
  {
    name: "FilmLight",
    logo: "/placeholder.svg",
  },
]

