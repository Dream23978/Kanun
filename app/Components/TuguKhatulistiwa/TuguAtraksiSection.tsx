"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 4: ATRAKSI WISATA & AKSES/LOKASI - Responsive
   ================================================ */

export default function TuguAtraksiSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern border-t border-border-default/40" id="atraksi">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* --- PART 1: ATRAKSI WISATA --- */}
        <div>
          {/* Header */}
          <ScrollAnimate direction="up">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-normal text-brand-forest mb-3">
                Atraksi Wisata Tugu Khatulistiwa
              </h2>
              <p className="font-serif italic text-xs sm:text-sm md:text-base text-brand-forest/90 font-bold">
                Tugu lahir sebagai penanda ilmiah, lalu berkembang menjadi warisan arsitektur dan ruang belajar publik di garis khatulistiwa.
              </p>
            </div>
          </ScrollAnimate>

          {/* 3 Atraksi Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 01 */}
            <ScrollAnimate direction="up" delay={0.1}>
              <div className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
                      </svg>
                    </div>
                    <span className="font-serif text-base sm:text-lg text-brand-forest/40 font-bold">01</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-txt-primary mb-2 sm:mb-3">
                    Melihat tugu asli
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                    Masuk ke dalam kubah duplikat untuk melihat tugu asli peninggalan 1928/1938 dari kayu ulin, disertai galeri foto sejarah dan informasi titik kulminasi.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 02 */}
            <ScrollAnimate direction="up" delay={0.2}>
              <div className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <span className="font-serif text-base sm:text-lg text-brand-forest/40 font-bold">02</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-txt-primary mb-2 sm:mb-3">
                    Festival titik kulminasi
                  </h3>
                  <span className="inline-block bg-brand-gold-dark/30 text-brand-forest font-bold text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    21-23 MARET · 21-23 SEPTEMBER
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                    Dua kali setahun matahari berada tepat di garis khatulistiwa. Semua benda tegak di sekitar tugu tidak memiliki bayangan—fenomena yang dikenal sebagai hari tanpa bayangan.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 03 */}
            <ScrollAnimate direction="up" delay={0.3}>
              <div className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:col-span-2 lg:col-span-1">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="font-serif text-base sm:text-lg text-brand-forest/40 font-bold">03</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-txt-primary mb-2 sm:mb-3">
                    Sertifikat kunjungan
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                    Wisatawan dapat memperoleh sertifikat resmi sebagai kenang-kenangan bahwa pernah datang dan bersinggah di Tugu Khatulistiwa.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>

        {/* --- PART 2: AKSES & LOKASI --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-6 sm:pt-8 border-t border-border-default/40">
          {/* Left: Interactive Tugu Photo replacing Map with CTA */}
          <div className="lg:col-span-6">
            <ScrollAnimate direction="left">
              <a
                href="https://maps.google.com/?q=Tugu+Khatulistiwa+Pontianak"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 lg:aspect-4/3 h-full min-h-[260px] sm:min-h-[300px] shadow-card border border-border-default/40"
              >
                {/* Background Tugu Khatulistiwa Image */}
                <Image
                  src="/images/CardImage.png"
                  alt="Tugu Khatulistiwa Pontianak Location"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                {/* Top Badge: Indicating Location */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-brand-forest text-white shadow-md">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    PETA LOKASI
                  </span>
                </div>

                {/* Bottom CTA Button / Card Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between bg-surface/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-border-default shadow-lg group-hover:bg-brand-forest group-hover:text-white transition-all duration-300">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-forest text-white flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-forest transition-colors duration-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs sm:text-sm font-bold group-hover:text-white transition-colors duration-300">
                        Buka Lokasi di Google Maps
                      </h4>
                      <p className="font-sans text-[10px] sm:text-[11px] text-txt-secondary group-hover:text-white/80 transition-colors duration-300">
                        Klik foto untuk navigasi Rute Tugu Khatulistiwa 📍
                      </p>
                    </div>
                  </div>
                  <span className="text-brand-forest group-hover:text-brand-gold font-bold text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </ScrollAnimate>
          </div>

          {/* Right: Akses & Informasi Penginapan Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <ScrollAnimate direction="right">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-brand-forest mb-3 sm:mb-4">
                  Akses & Jarak dari Pusat Kota
                </h3>
                <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                  Tugu Khatulistiwa berjarak sekitar 12 hingga 15 kilometer ke arah utara dari pusat Kota Pontianak. Menggunakan sepeda motor atau mobil, Anda hanya memerlukan waktu sekitar 20 hingga 30 menit berkendara menyusuri Jalan Khatulistiwa yang asri.
                </p>
              </div>

              {/* White Box: Informasi Penginapan */}
              <div className="bg-surface rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border-default shadow-card mt-4 sm:mt-6">
                <h4 className="font-sans text-xs sm:text-sm md:text-base font-bold text-txt-primary mb-2">
                  Informasi Penginapan
                </h4>
                <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                  Di sekitar kompleks tugu umumnya tidak terdapat banyak akomodasi penginapan komersial. Wisatawan sangat direkomendasikan menginap di pusat Kota Pontianak, lalu melakukan perjalanan darat singkat ke sini.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
