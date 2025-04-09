"use client"

import { motion } from "framer-motion"
import { Tag, GraduationCap, Sparkles } from "lucide-react"; 


export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="tentang" className="py-16 bg-beige-600 text-beige-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Tentang HT Amalia Hijab</h2>
          <p className="text-lg mb-8">
            HT Amalia Hijab hadir sebagai supplier hijab berkualitas dengan harga grosir yang terjangkau. Kami
            mengkhususkan diri dalam hijab sekolah dan pashmina dengan berbagai pilihan bahan dan model untuk memenuhi
            kebutuhan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-[color-mix(in_oklch,var(--beige-500)_50%,transparent)] p-6 rounded-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-beige-100 text-beige-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Harga Grosir</h3>
              <p>Dapatkan harga spesial untuk pembelian dalam jumlah banyak.</p>
            </motion.div>
            <motion.div
              className="bg-[color-mix(in_oklch,var(--beige-500)_50%,transparent)] p-6 rounded-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-beige-100 text-beige-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hijab Sekolah</h3>
              <p>Spesialis hijab sekolah yang nyaman dan sesuai dengan standar seragam sekolah.</p>
            </motion.div>
            <motion.div
              className="bg-[color-mix(in_oklch,var(--beige-500)_50%,transparent)] p-6 rounded-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-beige-100 text-beige-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pashmina Cantik</h3>
              <p>Koleksi pashmina dengan berbagai bahan dan warna untuk melengkapi gaya Anda.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
