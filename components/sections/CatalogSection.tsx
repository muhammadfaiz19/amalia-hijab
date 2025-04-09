"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/ProductCard"
import { motion, AnimatePresence } from "framer-motion"

interface ShopLinks {
  whatsapp: string
  tiktok: string
  shopee1: string
  shopee2: string
  maps: string
}

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  shopLinks: ShopLinks
}

interface CatalogSectionProps {
  products: Product[]
}

export default function CatalogSection({ products }: CatalogSectionProps) {
  const [filter, setFilter] = useState("Semua")
  const categories = ["Semua", "Pashmina", "Sekolah", "Bergo"]

  const filteredProducts = filter === "Semua" ? products : products.filter((product) => product.category === filter)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="katalog" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-beige-800">Katalog Produk</h2>
          <p className="text-beige-700 mt-2">Temukan hijab yang sesuai dengan kebutuhan Anda</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-beige-100 p-2 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={`text-beige-800 hover:bg-beige-200 ${filter === category ? "bg-beige-200" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-beige-700">Tidak ada produk dalam kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  )
}
