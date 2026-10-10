import type { Metadata } from "next";
import Navbar from "../../Components/Navbar";
import PanduanTenunHeroSection from "../../Components/PanduanTenun/PanduanTenunHeroSection";
import PanduanTenunRuteSection from "../../Components/PanduanTenun/PanduanTenunRuteSection";
import PanduanTenunTipsSection from "../../Components/PanduanTenun/PanduanTenunTipsSection";
import Footer from "../../Components/Footer";

export const metadata: Metadata = {
  title: "Panduan Wisata Kampung Tenun Khatulistiwa - Kanun 5.0",
  description:
    "Panduan perjalanan lapangan esensial menuju Kampung Tenun Khatulistiwa di Gang Sambas Jaya, Batu Layang. Rute berkendara, patokan lokasi, waktu kunjungan terbaik, dan tips berinteraksi dengan perajin.",
};

/* ================================================
   HALAMAN PANDUAN WISATA:
   Kampung Tenun Khatulistiwa (Gang Sambas Jaya)
   ================================================ */

export default function PanduanTenunPage() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-canvas">
        {/* 1. Banner Hero & Kartu Fitur Kampung Tenun */}
        <PanduanTenunHeroSection />

        {/* 2. Rute & Akses Menuju Lokasi (Jarak, Patokan, Jam Kunjungan) */}
        <PanduanTenunRuteSection />

        {/* 3. Tips & Info Praktis Kunjungan */}
        <PanduanTenunTipsSection />
      </main>

      {/* Footer standar */}
      <Footer />
    </>
  );
}
