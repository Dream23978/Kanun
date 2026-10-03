import type { Metadata } from "next";
import Navbar from "../../Components/Navbar";
import BukitRelHeroSection from "../../Components/BukitRel/BukitRelHeroSection";
import BukitRelSejarahSection from "../../Components/BukitRel/BukitRelSejarahSection";
import BukitRelAtraksiSection from "../../Components/BukitRel/BukitRelAtraksiSection";
import BukitRelFasilitasSection from "../../Components/BukitRel/BukitRelFasilitasSection";
import Footer from "../../Components/Footer";

export const metadata: Metadata = {
  title: "Bukit Rel - Kanun 5.0",
  description:
    "Wisata edukasi di garis nol ekuator, Bukit Rel menyajikan pesona alam hijau, atraksi panorama, dan situs sejarah rute lori kuno di Pontianak Utara.",
};

/* ================================================
   HALAMAN DETAIL DESTINASI:
   Bukit Rel Wisata Edukasi
   ================================================ */

export default function BukitRelPage() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Section 1: Hero banner & info bar */}
      <BukitRelHeroSection />

      {/* Section 2: Sejarah & Latar Belakang */}
      <BukitRelSejarahSection />

      {/* Section 3: Atraksi Wisata Bukit Rel */}
      <BukitRelAtraksiSection />

      {/* Section 4: Informasi Fasilitas */}
      <BukitRelFasilitasSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
