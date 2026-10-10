import type { Metadata } from "next";
import Navbar from "../Components/Navbar";
import TentangKamiHeroSection from "../Components/TentangKami/TentangKamiHeroSection";
import TentangKamiVisiMisiSection from "../Components/TentangKami/TentangKamiVisiMisiSection";
import TentangKamiTimSection from "../Components/TentangKami/TentangKamiTimSection";
import TeamSection from "../Components/TeamSection";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Tentang Kami - Kanun 5.0 Pontianak Utara",
  description:
    "Membangun Pariwisata & Pemberdayaan Masyarakat Pontianak Utara. Inisiatif pelestarian budaya kain tenun corak insang, penguatan ekonomi lintas komunitas, dan wisata berkelanjutan.",
};

/* ================================================
   HALAMAN TENTANG KAMI - KANUN 5.0
   ================================================ */

export default function TentangKamiPage() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-canvas">
        {/* 1. Hero Banner: Membangun Pariwisata & Pemberdayaan */}
        <TentangKamiHeroSection />

        {/* 2. Latar Belakang & Visi Misi: 3 Pilar Fokus & Dokumentasi Tenun */}
        <TentangKamiVisiMisiSection />

        {/* 3. Tim: Orang-Orang di Balik Kanun 5.0 */}
        <TeamSection />

        {/* 4. Dukungan & Kemitraan Strategis (Pertamina, ASPPERWI, BANSA) */}
        <TentangKamiTimSection />
      </main>

      {/* Footer standar */}
      <Footer />
    </>
  );
}
