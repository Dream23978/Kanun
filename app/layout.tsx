import type { Metadata } from "next";
import { DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kanun 5.0 - Pontianak Utara | Wisata Khatulistiwa",
  description:
    "Platform panduan wisata terpercaya, merangkum keindahan alam, budaya, kuliner, dan kerajinan khas di Kecamatan Pontianak Utara, Kalimantan Barat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${dmSerif.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

