import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amalia Hijab - Grosir Hijab Sekolah & Pashmina Premium",
  description:
    "Temukan koleksi hijab sekolah dan pashmina premium dari Amalia Hijab. Supplier hijab terpercaya dengan harga grosir terjangkau dan kualitas terbaik.",
  keywords: [
    "grosir hijab",
    "hijab sekolah",
    "pashmina premium",
    "supplier hijab",
    "hijab murah",
    "hijab berkualitas",
    "hijab anak sekolah",
    "hijab seragam",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
