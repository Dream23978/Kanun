import type { Metadata } from "next";
import Navbar from "../../Components/Navbar";
import TuguHeroSection from "../../Components/TuguKhatulistiwa/TuguHeroSection";
import TuguSejarahSection from "../../Components/TuguKhatulistiwa/TuguSejarahSection";
import TuguTimelineSection from "../../Components/TuguKhatulistiwa/TuguTimelineSection";
import TuguArsitekturSection from "../../Components/TuguKhatulistiwa/TuguArsitekturSection";
import TuguAtraksiSection from "../../Components/TuguKhatulistiwa/TuguAtraksiSection";
import TuguOlehOlehSection from "../../Components/TuguKhatulistiwa/TuguOlehOlehSection";
import Footer from "../../Components/Footer";

export const metadata: Metadata = {
  title: "Tugu Khatulistiwa - Kanun 5.0",
  description:
    "Wisata edukasi di garis nol ekuator. Jelajahi monumen bersejarah Tugu Khatulistiwa di Pontianak Utara, titik pertemuan dua belahan bumi utara dan selatan.",
};

/* ================================================
   HALAMAN DETAIL DESTINASI:
   Tugu Khatulistiwa Wisata Edukasi di Garis Nol
   ================================================ */

export default function TuguKhatulistiwaPage() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-canvas">
        {/* 1. Hero Banner & Info Bar */}
        <TuguHeroSection />

        {/* 2. Sejarah & Latar Belakang */}
        <TuguSejarahSection />

        {/* 3. Lima Tonggak Perubahan (Linimasa 1928 - 2005) */}
        <TuguTimelineSection />

        {/* 4. Detail Arsitektur & Titik Koordinat (Di atas bagian Atraksi) */}
        <TuguArsitekturSection />

        {/* 5. Atraksi Wisata & Akses/Lokasi */}
        <TuguAtraksiSection />

        {/* 6. Rekomendasi Oleh-Oleh */}
        <TuguOlehOlehSection />
      </main>

      {/* 7. Footer standar */}
      <Footer />
    </>
  );
}
