"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   PANDUAN KAMPUNG TENUN - RUTE & AKSES SECTION
   ================================================ */

export default function PanduanTenunRuteSection() {
  return (
    <section className="relative w-full pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-15 batik-pattern" id="rute-akses-tenun">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Header */}
        <ScrollAnimate direction="up" delay={0.1}>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
            <span className="text-brand-gold font-sans">&bull;</span>
            <span>Rute &amp; Akses Menuju Lokasi</span>
          </h2>

          <p className="font-sans text-xs sm:text-base md:text-lg text-white/90 font-semibold mb-8 sm:mb-12 leading-relaxed">
            Alamat: Jl. Khatulistiwa, Gg. Sambas Jaya, Kel. Batu Layang.
          </p>
        </ScrollAnimate>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Jarak & Panduan Berkendara */}
          <ScrollAnimate direction="up" delay={0.15} className="h-full">
            <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-forest/15 h-full flex flex-col justify-start hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-4 sm:mb-6 leading-tight">
                Jarak &amp; Panduan<br className="hidden sm:inline" /> Berkendara
              </h3>

              <div className="font-sans text-xs sm:text-sm text-txt-primary leading-relaxed">
                <p className="text-txt-secondary">
                  <strong className="font-bold text-brand-forest">Berjarak sekitar 12 km</strong> dari pusat kota Pontianak. Arahkan kendaraan Anda melewati Jembatan Kapuas dan susuri jalan utama Jalan Khatulistiwa mengarah ke Kelurahan Batu Layang. Perjalanan ini biasanya <strong className="font-bold text-brand-forest">memakan waktu &plusmn;30 menit</strong> dengan sepeda motor atau 30-45 menit jika lalu lintas sedang padat menggunakan mobil.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 2: Titik Patokan Lokasi */}
          <ScrollAnimate direction="up" delay={0.25} className="h-full">
            <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-forest/15 h-full flex flex-col justify-start hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-4 sm:mb-6 leading-tight">
                Titik Patokan Lokasi
              </h3>

              <div className="font-sans text-xs sm:text-sm text-txt-primary leading-relaxed">
                <p className="text-txt-secondary">
                  Setibanya di <strong className="font-bold text-brand-forest">kawasan Batu Layang</strong>, perhatikan plang atau petunjuk jalan menuju Gang Sambas Jaya. Kampung Tenun ini berada di dalam pemukiman warga. Jangan khawatir, tersedia fasilitas area parkir yang memadai untuk kendaraan pengunjung.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 3: Waktu Kunjungan Terbaik */}
          <ScrollAnimate direction="up" delay={0.35} className="h-full">
            <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-forest/15 h-full flex flex-col justify-start hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-4 sm:mb-6 leading-tight">
                Waktu Kunjungan Terbaik
              </h3>

              <div className="font-sans text-xs sm:text-sm text-txt-primary leading-relaxed">
                <p className="text-txt-secondary">
                  Kampung ini buka setiap hari dari <strong className="font-bold text-brand-forest">pukul 08:00 hingga 17:00</strong>. Sangat disarankan datang di pagi atau siang hari agar Anda bisa melihat langsung denyut nadi kampung ini, di mana sekitar 20 ibu-ibu perajin sedang aktif bekerja di alat tenun mereka.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
