"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrollY > 10 ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-beige-800 z-50">
          HT Amalia Hijab
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-beige-700 hover:text-beige-600 transition-colors">
            Beranda
          </Link>
          <Link href="#tentang" className="text-beige-700 hover:text-beige-600 transition-colors">
            Tentang Kami
          </Link>
          <Link href="#katalog" className="text-beige-700 hover:text-beige-600 transition-colors">
            Katalog
          </Link>
          <Link href="#kontak" className="text-beige-700 hover:text-beige-600 transition-colors">
            Kontak
          </Link>
        </nav>

        <div className="flex items-center gap-3 z-50">
          <span className="hidden md:inline-block bg-beige-100 text-beige-800 px-3 py-1 rounded-full text-sm font-medium">
            Grosir
          </span>
          <a href="https://wa.me/6287813057256" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button variant="outline" className="border-beige-600 text-beige-700 hover:bg-beige-50">
              <FaWhatsapp className="h-4 w-4" />
              Hubungi Kami
            </Button>
          </a>
          <button
            className="md:hidden text-beige-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute top-[72px] left-0 right-0 border-t border-beige-100 shadow-lg z-40"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-beige-700 hover:text-beige-600 transition-colors py-3 px-4 rounded-md hover:bg-beige-50"
                onClick={handleLinkClick}
              >
                Beranda
              </Link>
              <Link
                href="#tentang"
                className="text-beige-700 hover:text-beige-600 transition-colors py-3 px-4 rounded-md hover:bg-beige-50"
                onClick={handleLinkClick}
              >
                Tentang Kami
              </Link>
              <Link
                href="#katalog"
                className="text-beige-700 hover:text-beige-600 transition-colors py-3 px-4 rounded-md hover:bg-beige-50"
                onClick={handleLinkClick}
              >
                Katalog
              </Link>
              <Link
                href="#kontak"
                className="text-beige-700 hover:text-beige-600 transition-colors py-3 px-4 rounded-md hover:bg-beige-50"
                onClick={handleLinkClick}
              >
                Kontak
              </Link>
              <div className="pt-4 border-t border-beige-100">
                <a href="https://wa.me/6287813057256" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-beige-600 hover:bg-beige-700 text-white">
                    <FaWhatsapp className="h-4 w-4" />
                    Hubungi Kami
                  </Button>
                </a>
              </div>
              <div className="flex justify-center">
                <span className="inline-block bg-beige-100 text-beige-800 px-3 py-1 rounded-full text-sm font-medium">
                  Grosir
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
