import type { Metadata } from "next";
import {  Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--Rubik",
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
  metadataBase: new URL("https://amalia-hijab.vercel.app"),
  openGraph: {
    title: "Amalia Hijab - Grosir Hijab Sekolah & Pashmina Premium",
    description:
      "Koleksi hijab sekolah dan pashmina premium dari Amalia Hijab. Supplier hijab terpercaya dengan harga grosir dan kualitas terbaik.",
    url: "https://amalia-hijab.vercel.app",
    siteName: "Amalia Hijab",
    images: [
      {
        url: "/thumbnail.png", 
        width: 1200,
        height: 630,
        alt: "Amalia Hijab",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amalia Hijab - Grosir Hijab Sekolah & Pashmina Premium",
    description:
      "Temukan koleksi hijab sekolah dan pashmina premium dari Amalia Hijab. Supplier hijab terpercaya dengan harga grosir dan kualitas terbaik.",
    images: ["/thumbnail.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
