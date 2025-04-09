"use client"
import AboutSection from "@/components/sections/AboutSection"
import CatalogSection from "@/components/sections/CatalogSection"
import ContactSection from "@/components/sections/ContactSection"
import HeroSection from "@/components/sections/HeroSection"
import Navbar from "@/components/Navbar"

export default function Home() {
  const shopLinks = {
    whatsapp: "https://wa.me/6287813057256",
    tiktok: "https://www.tiktok.com/@wearnebula?_t=ZS-8vMg35SnYkD&_r=1",
    shopee1: "https://id.shp.ee/2sLP6KH",
    shopee2: "https://id.shp.ee/23RMvh4",
    maps: "https://maps.app.goo.gl/TuaCCiMg7uVhT3mD9?g_st=ic",
  }
  
  const products = [
    {
      id: 1,
      name: "Arabian Voile",
      description: "Bahan premium yang ringan dan nyaman",
      image: "/arabian-voile.webp",
      category: "Pashmina",
      shopLinks: shopLinks,
    },
    {
      id: 2,
      name: "Daily Hijab Bergo Rayon",
      description: "Praktis untuk aktivitas sehari-hari",
      image: "/daily-hijab-bergo-rayon.webp",
      category: "Bergo",
      shopLinks: shopLinks,
    },
    {
      id: 3,
      name: "Hijab Sekolah Serut LX",
      description: "Nyaman untuk pelajar, mudah diatur",
      image: "/hijab-sekolah-serut-lx.webp",
      category: "Sekolah",
      shopLinks: shopLinks,
    },
    {
      id: 4,
      name: "Pashmina Ceruty",
      description: "Lembut dan jatuh, mudah dibentuk",
      image: "/pashmina-ceruty.webp",
      category: "Pashmina",
      shopLinks: shopLinks,
    },
    {
      id: 5,
      name: "Pasmina Kaos Rayon",
      description: "Nyaman untuk aktivitas sehari-hari",
      image: "/pashmina-kaos-rayon.webp",
      category: "Pashmina",
      shopLinks: shopLinks,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection shopLinks={shopLinks} />
        <AboutSection />
        <CatalogSection products={products} />
        <ContactSection shopLinks={shopLinks} />
      </main>
    </>
  )
}