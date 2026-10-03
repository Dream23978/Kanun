import Navbar from "../../Components/Navbar";
import MakamHeroSection from "../../Components/MakamBatuLayang/MakamHeroSection";
import MakamSejarahSection from "../../Components/MakamBatuLayang/MakamSejarahSection";
import MakamKompleksSection from "../../Components/MakamBatuLayang/MakamKompleksSection";
import MakamAktivitasSection from "../../Components/MakamBatuLayang/MakamAktivitasSection";
import MakamEtikaSection from "../../Components/MakamBatuLayang/MakamEtikaSection";
import Footer from "../../Components/Footer";

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
