import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import AboutSection from "./Components/AboutSection";
import DestinasiSection from "./Components/DestinasiSection";
import ImpactSection from "./Components/ImpactSection";
import TeamSection from "./Components/TeamSection";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";

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

      {/* Info program CSR Pertamina */}
      <ImpactSection />

      {/* Grid anggota tim di balik Kanun 5.0 */}
      <TeamSection />

      {/* Branding, navigasi, sosmed, copyright */}
      <Footer />

      {/* Tombol floating K dan P di pojok bawah */}
      <FloatingButtons />
    </>
  );
}
