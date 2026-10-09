import type { Metadata } from "next";
import Navbar from "../Components/Navbar";
import PanduanTuguHeroSection from "../Components/PanduanTugu/PanduanTuguHeroSection";
import PanduanTuguRuteSection from "../Components/PanduanTugu/PanduanTuguRuteSection";
import PanduanTuguTipsSection from "../Components/PanduanTugu/PanduanTuguTipsSection";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Panduan Wisata Pontianak Utara - Kanun 5.0",
  description:
    "Eksplorasi ragam pesona Pontianak Utara. Merangkum panduan lapangan esensial untuk singgah di Tugu Khatulistiwa, Makam Batu Layang, Kampung Tenun, dan Bukit Rel.",
};

/* ================================================
   HALAMAN UTAMA PANDUAN WISATA
   ================================================ */

export default function PanduanMainPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-canvas">
        <PanduanTuguHeroSection />
        <PanduanTuguRuteSection />
        <PanduanTuguTipsSection />
      </main>
      <Footer />
    </>
  );
}
