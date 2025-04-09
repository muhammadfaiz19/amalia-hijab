"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { motion } from "framer-motion"

interface HeroSectionProps {
  shopLinks: {
    whatsapp: string
  }
}

export default function HeroSection({ shopLinks }: HeroSectionProps) {
  return (
    <section id="home" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-beige-50 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-beige-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-beige-300 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/3 w-72 h-72 bg-beige-100 rounded-full opacity-60 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block bg-beige-100 text-beige-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              Grosir Hijab Berkualitas
            </motion.div>
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-beige-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Koleksi Hijab <span className="text-beige-600">Premium</span> untuk Semua
            </motion.h1>
            <motion.p
              className="text-lg text-beige-700 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Temukan koleksi hijab sekolah dan pashmina premium kami dengan harga grosir yang terjangkau. Kualitas
              terbaik untuk kenyamanan sehari-hari.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a href="#katalog">
                <Button className="bg-beige-600 hover:bg-beige-700 text-white px-6 py-6">
                  <ShoppingBag className="h-5 w-5" />
                  Lihat Katalog
                </Button>
              </a>
              <a href={shopLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-beige-600 text-beige-700 hover:bg-beige-50 px-6 py-6">
                  <FaWhatsapp className="h-5 w-5" />
                  Hubungi Kami
                </Button>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Image container - always visible */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center z-10 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full max-w-sm md:max-w-md h-72 md:h-[500px] mx-4 md:mx-o">
              <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-full h-full bg-beige-200 rounded-lg"></div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-full h-full bg-beige-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="/store.webp" 
                  alt="Toko Amalia Hijab" 
                  
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}