import type { Metadata } from "next";
import Navbar from "../../Components/Navbar";
import PanduanTuguHeroSection from "../../Components/PanduanTugu/PanduanTuguHeroSection";
import PanduanTuguRuteSection from "../../Components/PanduanTugu/PanduanTuguRuteSection";
import PanduanTuguTipsSection from "../../Components/PanduanTugu/PanduanTuguTipsSection";
import Footer from "../../Components/Footer";

export const metadata: Metadata = {
  title: "Panduan Tugu Khatulistiwa - Kanun 5.0",
  description:
    "Panduan perjalanan lapangan esensial menuju Tugu Khatulistiwa Pontianak. Rute kendaraan pribadi, transportasi umum, transportasi sungai, serta tips berkunjung.",
};

/* ================================================
   HALAMAN PANDUAN WISATA:
   Tugu Khatulistiwa Pontianak Utara
   ================================================ */

export default function PanduanTuguPage() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-canvas">
        {/* 1. Banner Hero & Kartu Fitur Tugu Khatulistiwa */}
        <PanduanTuguHeroSection />

        {/* 2. Rute & Akses Menuju Lokasi (3 Kartu Transportasi) */}
        <PanduanTuguRuteSection />

        {/* 3. Panduan Praktis & Sertifikat Ekuator */}
        <PanduanTuguTipsSection />
      </main>

      {/* Footer standar */}
      <Footer />
    </>
  );
}
