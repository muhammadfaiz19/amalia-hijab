"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

interface ShopLinks {
  whatsapp: string;
  tiktok: string;
  shopee1: string;
  shopee2: string;
  maps: string;
}

interface ContactSectionProps {
  shopLinks: ShopLinks;
}

export default function ContactSection({ shopLinks }: ContactSectionProps) {
  return (
    <section
      id="kontak"
      className="py-16 bg-gradient-to-b from-beige-100 to-beige-200"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-beige-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hubungi Kami
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-beige-800 mb-6">
              Kontak Kami
            </h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-beige-700" />
                </div>
                <div>
                  <p className="font-medium text-beige-800">WhatsApp</p>
                  <a
                    href={shopLinks.whatsapp}
                    className="text-beige-600 hover:underline"
                  >
                    +62 878-1305-7256
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-beige-700"
                  >
                    <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z"></path>
                    <path d="m10 12 5.5-3-5.5-3v6Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-beige-800">TikTok Shop</p>
                  <a
                    href={shopLinks.tiktok}
                    className="text-beige-600 hover:underline"
                  >
                    @wearnebula
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center mr-4">
                  <ShoppingBag className="h-5 w-5 text-beige-700" />
                </div>
                <div>
                  <p className="font-medium text-beige-800">Shopee</p>
                  <div className="space-y-1">
                    <a
                      href={shopLinks.shopee1}
                      className="text-beige-600 hover:underline block"
                    >
                      Toko 1
                    </a>
                    <a
                      href={shopLinks.shopee2}
                      className="text-beige-600 hover:underline block"
                    >
                      Toko 2
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-full bg-beige-100 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-beige-700" />
                </div>
                <div>
                  <p className="font-medium text-beige-800">Lokasi Toko</p>
                  <a
                    href={shopLinks.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-beige-600 hover:underline"
                  >
                    Lihat di Google Maps
                  </a>
                </div>
              </motion.div>
            </div>

            <h3 className="text-xl font-semibold text-beige-800 mt-10 mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-beige-700 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-beige-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-beige-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-beige-200 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                ></textarea>
              </div>
              <Button className="w-full bg-beige-600 hover:bg-beige-700 text-white">
                Kirim Pesan
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] md:h-[600px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4062406785533!2d108.4875632!3d-6.720181900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee1347f734def%3A0xf2241cbd84623b53!2sAmalia%20Collection!5e0!3m2!1sen!2sid!4v1744172456829!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
