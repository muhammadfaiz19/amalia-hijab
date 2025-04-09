"use client";

import Link from "next/link";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { ShoppingBag } from "lucide-react"
import { MapPin } from "lucide-react";

interface ShopLinks {
  whatsapp: string;
  tiktok: string;
  shopee1: string;
  shopee2: string;
  maps: string;
}

interface FooterProps {
  shopLinks: ShopLinks;
}

export default function Footer({ shopLinks }: FooterProps) {
  return (
    <footer className="bg-beige-800 text-beige-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">HT Amalia Hijab</h3>
            <p className="text-beige-200 leading-relaxed">
              Grosir hijab sekolah dan pashmina dengan kualitas premium dan harga terjangkau.
              Melayani reseller & dropship seluruh Indonesia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-beige-200">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:text-white transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#katalog" className="hover:text-white transition-colors">Katalog</Link>
              </li>
              <li>
                <Link href="#kontak" className="hover:text-white transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <p className="mb-4 text-beige-200 text-sm">Temukan kami di platform favorit Anda:</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={shopLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-beige-700 hover:bg-beige-600 p-3 rounded-full transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={shopLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-beige-700 hover:bg-beige-600 p-3 rounded-full transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href={shopLinks.shopee1}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shopee Toko 1"
                className="bg-beige-700 hover:bg-beige-600 p-3 rounded-full transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </a>
              <a
                href={shopLinks.shopee2}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shopee Toko 2"
                className="bg-beige-700 hover:bg-beige-600 p-3 rounded-full transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </a>
              <a
                href={shopLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokasi Toko"
                className="bg-beige-700 hover:bg-beige-600 p-3 rounded-full transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige-700 mt-12 pt-6 text-center text-beige-400 text-sm">
          &copy; {new Date().getFullYear()} HT Amalia Hijab. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
