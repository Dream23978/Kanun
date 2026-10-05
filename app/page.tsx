import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import AboutSection from "./Components/AboutSection";
import DestinasiSection from "./Components/DestinasiSection";
import TeamSection from "./Components/TeamSection";
import Footer from "./Components/Footer";

/* ================================================
   HOMEPAGE - Menyusun semua section halaman utama
   ================================================ */
export default function Home() {
  return (
    <>
      {/* Navigasi utama fixed di atas */}
      <Navbar />

      {/* Carousel gambar fullscreen dengan overlay text */}
      <HeroSlider />

      {/* Section "Menyusuri jejak masa lalu Pontianak Utara" */}
      <AboutSection />

      {/* Grid 4 kartu destinasi pilihan */}
      <DestinasiSection />

      {/* Dukungan & Kemitraan Strategis (Sponsor Utama & Mitra Organisasi Pendukung) */}
      <TeamSection />

      {/* Branding, navigasi, sosmed, copyright */}
      <Footer />
    </>
  );
}
