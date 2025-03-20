"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const menuVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  }

  const menuItemVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  }

  const menuItems = [
    { name: "Film portfolio", path: "/work" },
    { name: "Media-kit", path: "/media-kit" },
    { name: "About Me", path: "/about" },
    { name: "Contacts", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="text-white font-serif text-2xl tracking-wider z-50 mix-blend-difference">
          Stephanie 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`text-white mix-blend-difference text-sm uppercase tracking-widest hover:text-orange transition-colors duration-300 ${
                    pathname === item.path ? "border-b border-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button - Only show hamburger, not X */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`md:hidden text-white z-50 mix-blend-difference ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button - Only one X in the overlay */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6 text-white"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>

            <nav className="text-center">
              <ul className="space-y-12">
                {menuItems.map((item, i) => (
                  <motion.li key={item.path} custom={i} variants={menuItemVariants}>
                    <Link
                      href={item.path}
                      className="font-serif text-5xl md:text-7xl text-white hover:text-orange transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

