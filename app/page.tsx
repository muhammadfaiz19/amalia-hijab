"use client"
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"

export default function Home() {
  const shopLinks = {
    whatsapp: "https://wa.me/6287813057256",
    tiktok: "https://www.tiktok.com/@wearnebula?_t=ZS-8vMg35SnYkD&_r=1",
    shopee1: "https://id.shp.ee/2sLP6KH",
    shopee2: "https://id.shp.ee/23RMvh4",
    maps: "https://maps.app.goo.gl/TuaCCiMg7uVhT3mD9?g_st=ic",
  }
  
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection shopLinks={shopLinks} />
        <AboutSection />
      </main>
    </>
  )
}