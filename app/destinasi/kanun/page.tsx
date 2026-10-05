import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import KampungTenunHeroSection from "@/app/Components/KampungTenunKhatulistiwa/KampungTenunHeroSection";
import KampungTenunSejarahSection from "@/app/Components/KampungTenunKhatulistiwa/KampungTenunSejarahSection";
import KampungTenunAtraksiSection from "@/app/Components/KampungTenunKhatulistiwa/KampungTenunAtraksiSection";
import KampungTenunHomestaySection from "@/app/Components/KampungTenunKhatulistiwa/KampungTenunHomestaySection";
import KampungTenunPaketSection from "@/app/Components/KampungTenunKhatulistiwa/KampungTenunPaketSection";
import KampungTenunRekomendasiSection from "@/app/Components/KampungTenunKhatulistiwa/KampungTenunRekomendasiSection";

export const metadata = {
  title: "Kampung Tenun Khatulistiwa | Wisata Budaya Kanun Pontianak",
  description:
    "Jelajahi sentra kriya Tenun Corak Insang khas Pontianak di Gang Sambas Jaya, Batu Layang. Nikmati workshop menenun, homestay tepi sungai, dan koleksi kain tenun berkualitas tinggi.",
};

export default function KampungTenunPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7]">
      <Navbar />
      <main className="flex-1 w-full">
        {/* 1. Hero Section & Metadata Bar */}
        <KampungTenunHeroSection />

        {/* 2. Sejarah, Filosofi, Data Pengrajin & Linimasa 1980-Kini */}
        <KampungTenunSejarahSection />

        {/* 3. Atraksi Wisata, Workshop Unggulan, Aktivitas & Informasi Kunjungan */}
        <KampungTenunAtraksiSection />

        {/* 4. Homestay & Penginapan Warga Tepi Sungai Kapuas */}
        <KampungTenunHomestaySection />

        {/* 5. Paket Wisata Keterampilan & Pelatihan Menenun */}
        <KampungTenunPaketSection />

        {/* 6. Rekomendasi Oleh-oleh, Songket, Selendang & Aksesoris UMKM */}
        <KampungTenunRekomendasiSection />
      </main>
      <Footer />
    </div>
  );
}
