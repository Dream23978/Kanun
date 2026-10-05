import Navbar from "../../Components/Navbar";
import MakamHeroSection from "../../Components/MakamBatuLayang/MakamHeroSection";
import MakamSejarahSection from "../../Components/MakamBatuLayang/MakamSejarahSection";
import MakamKompleksSection from "../../Components/MakamBatuLayang/MakamKompleksSection";
import MakamAktivitasSection from "../../Components/MakamBatuLayang/MakamAktivitasSection";
import MakamEtikaSection from "../../Components/MakamBatuLayang/MakamEtikaSection";
import Footer from "../../Components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makam Ziarah Batu Layang - Kanun 5.0",
  description:
    "Kompleks pemakaman bersejarah Kesultanan Pontianak di Batu Layang—ruang ziarah, arsip silsilah, dan saksi sejarah kota di tepi Sungai Kapuas Besar.",
};

/* ================================================
   HALAMAN DETAIL DESTINASI:
   Makam Ziarah Batu Layang
   ================================================ */

export default function MakamZiarahBatuLayang() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Section 1: Hero fullscreen banner & info bar */}
      <MakamHeroSection />

      {/* Section 2: Sejarah & Latar Belakang */}
      <MakamSejarahSection />

      {/* Section 3: Kompleks, Tokoh & Silsilah */}
      <MakamKompleksSection />

      {/* Section 4: Aktivitas yang Dapat Dilakukan */}
      <MakamAktivitasSection />

      {/* Section 5: Etika Selama Kunjungan */}
      <MakamEtikaSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
