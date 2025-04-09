"use client"

import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden bg-white border border-beige-100 shadow-md h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <Image
          src={product.image || "/placeholder.webp"}
          alt={product.name}
          fill
          sizes="100%"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-2 right-2 bg-beige-100 text-beige-700 hover:bg-beige-200">
          {product.category}
        </Badge>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-medium text-lg text-beige-800">{product.name}</h3>
        <p className="text-beige-600 text-sm mt-1 mb-4">{product.description}</p>

        <div className="pt-4 border-t border-beige-100 mt-auto">
          <h4 className="text-sm font-medium text-beige-800 mb-3">Beli Melalui:</h4>
          <div className="grid grid-cols-2 gap-2">
            <a
              href={product.shopLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-green-500 text-white py-2 px-3 rounded-md hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="h-3 w-3" />
              WhatsApp
            </a>
            <a
              href={product.shopLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-black text-white py-2 px-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              <FaTiktok className="h-3 w-3" />
              TikTok
            </a>
            <a
              href={product.shopLinks.shopee1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-orange-500 text-white py-2 px-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              <ShoppingBag className="h-3 w-3" />
              Shopee 1
            </a>
            <a
              href={product.shopLinks.shopee2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-orange-500 text-white py-2 px-3 rounded-md hover:bg-orange-600 transition-colors"
            >
              <ShoppingBag className="h-3 w-3" />
              Shopee 2
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
